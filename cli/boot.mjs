import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { Window } from 'happy-dom'

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const SHELL = `
<main id="main">
  <div id="inner">
    <div id="output"></div>
    <div id="input"></div>
  </div>
</main>
<dialog id="dialog">
  <form method="dialog">
    <h4 id="dialog-title"></h4>
    <div id="dialog-content"></div>
    <div id="dialog-footer"><button id="dialog-button" value="default">Confirm</button></div>
  </form>
</dialog>
<div id="quest-map"></div>
<div id="quest-image"></div>
<form id="fileDialogForm" style="display:none"><input type="file" id="fileDialog" accept=".q6save"/></form>
`

function stripHtml(s) {
  return String(s)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd()
}

export function resolveFolder(opts = {}) {
  if (opts.folder) return opts.folder.replace(/\/?$/, '/')
  if (opts.example) {
    const name = String(opts.example).replace(/^game-/, '')
    return `examples/game-${name}/`
  }
  return 'game/'
}

function readRel(rel) {
  const clean = String(rel).replace(/^\//, '').replace(/\?.*$/, '')
  const abs = resolve(ROOT, clean)
  if (!existsSync(abs)) throw new Error(`Failed to load file "${rel}"`)
  return { abs, code: readFileSync(abs, 'utf8'), rel: clean }
}

function bundle(files) {
  return files.map(({ abs, code, rel }) => (
    `\n;\n// ---- ${rel} ----\n${code}\n//# sourceURL=${abs.replace(/\\/g, '/')}\n`
  )).join('\n')
}

/**
 * happy-dom: script tags do not run; separate eval() calls do not share \`const\`.
 * Load QuestJS as one concatenated classic eval (same order as settings.writeScript).
 */
export async function bootQuest(opts = {}) {
  const folder = resolveFolder(opts)
  const folderAbs = resolve(ROOT, folder)
  if (!existsSync(resolve(folderAbs, 'settings.js'))) {
    throw new Error(`Game folder not found: ${folder}`)
  }

  const window = new Window({
    url: pathToFileURL(resolve(ROOT, 'index.html')).href,
    width: 1024,
    height: 768,
  })

  window.matchMedia = function () {
    return {
      matches: false,
      media: '',
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() { return false },
    }
  }
  window.speechSynthesis = {
    getVoices() { return [] },
    speak() {},
    cancel() {},
  }
  // Use Node console — happy-dom VirtualConsole can throw under load
  window.console = console
  // Avoid _settings.js editor export probing Node \`module\`
  Object.defineProperty(window, 'module', { value: undefined, configurable: true })

  window.__questStripHtml = stripHtml
  window.__questWriteLine = opts.quiet
    ? function () {}
    : function (line) { process.stdout.write(line + '\n') }

  window.qeditor = false
  window.resourcesFolder = ''
  window.document.body.innerHTML = SHELL

  // Phase 1: util + settings + game settings → discover libraries/files
  const phase1 = [
    readRel('lib/_util.js'),
    readRel('lib/_settings.js'),
    readRel(folder + 'settings.js'),
  ]
  window.eval(bundle(phase1) + `
    ;settings.panes = 'none';
    settings.silent = true;
    settings.disableWaitInDevMode = true;
    settings.symbolsForCompass = false;
    settings.loadCssFiles = function () {};
    settings.loadFavicon = function () {};
    ${opts.forceTests ? "settings.tests = true; settings.playMode = 'dev';" : ''}
    globalThis.__questSettingsSnapshot = {
      tests: !!settings.tests,
      playMode: settings.playMode,
      lang: settings.lang,
      libraries: settings.libraries.slice(),
      files: settings.files.slice(),
      customExits: settings.customExits,
      customLibraries: settings.customLibraries.slice(),
    };
  `)

  const snap = window.__questSettingsSnapshot
  const files = []

  if (snap.tests && snap.playMode === 'dev') {
    files.push(readRel('lib/test-lib.js'))
    files.push(readRel(folder + 'tests.js'))
  }
  files.push(readRel('lang/' + snap.lang + '.js'))
  if (snap.customExits) {
    files.push(readRel(folder + snap.customExits + '.js'))
  }
  for (const lib of snap.libraries) {
    // Same resolution as QuestJS settings.writeScript → lib/<name>.js only
    files.push(readRel(`lib/${lib}.js`))
  }
  for (const custom of snap.customLibraries) {
    for (const file of custom.files) {
      files.push(readRel(custom.folder + file + '.js'))
    }
  }
  for (const file of snap.files) {
    files.push(readRel(folder + file + '.js'))
  }

  // Phase 2: rest of engine + game + CLI patches + init
  // Re-include phase1 so const bindings exist in this eval realm
  const all = [...phase1, ...files]
  window.eval(`
    var folder = ${JSON.stringify(folder)};
    var loaded = false;
  ` + bundle(all) + `
    ;settings.panes = 'none';
    settings.silent = true;
    settings.disableWaitInDevMode = true;
    settings.symbolsForCompass = false;
    settings.loadCssFiles = function () {};
    settings.loadFavicon = function () {};
    ${opts.forceTests ? "settings.tests = true; settings.playMode = 'dev';" : ''}
    settings.folder = ${JSON.stringify(folder)};

    (function patchIo() {
      var write = globalThis.__questWriteLine;
      var strip = globalThis.__questStripHtml;
      var origPrint = io.print.bind(io);
      io.print = function (data) {
        var html = origPrint(data);
        if (write && !(typeof test !== 'undefined' && test.testing)) {
          var text = typeof data === 'string' ? data : (data && data.text);
          if (text) {
            var line = strip(text);
            if (line.trim()) write(line);
          }
        }
        return html;
      };
      io.scrollToEnd = function () {};
      io.speak = function () {};
      io.synth = { getVoices: function () { return []; }, speak: function () {}, cancel: function () {} };
    })();

    world.init();
    io.init();

    globalThis.__quest = {
      io: io,
      parser: parser,
      runCmd: runCmd,
      settings: settings,
      test: test,
      world: world,
      w: w,
      lang: lang,
      msg: msg
    };
  `)

  if (!window.__quest) throw new Error('QuestJS CLI boot failed: __quest bridge missing')

  // Do not await happyDOM.waitUntilComplete — game timers keep the queue busy forever.
  await new Promise((r) => setTimeout(r, 0))

  return {
    window,
    folder,
    quest: window.__quest,
    stripHtml,
  }
}

export { stripHtml }
