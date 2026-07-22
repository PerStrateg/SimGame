#!/usr/bin/env node
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { bootQuest, resolveFolder, ROOT } from './boot.mjs'

function parseArgs(argv) {
  const opts = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--example' || a === '-e') opts.example = argv[++i]
    else if (a === '--folder' || a === '-f') opts.folder = argv[++i]
    else if (!a.startsWith('-') && !opts.example) opts.example = a
  }
  return opts
}

const opts = parseArgs(process.argv.slice(2))

// Default: example with tests.js when game/ has none
if (!opts.example && !opts.folder) {
  const gameTests = resolve(ROOT, 'game/tests.js')
  if (!existsSync(gameTests)) opts.example = 'eg'
}

const folder = resolveFolder(opts)
const testsPath = resolve(ROOT, folder, 'tests.js')
if (!existsSync(testsPath)) {
  console.error(`No tests.js in ${folder}`)
  process.exit(1)
}

process.stdout.write(`QuestJS TEST  ${folder}\n`)

const { quest, window } = await bootQuest({
  ...opts,
  forceTests: true,
  quiet: false,
})

if (typeof quest.test.runTests !== 'function') {
  console.error('test.runTests not available (settings.tests / test-lib failed to load)')
  process.exit(1)
}

const done = new Promise((resolveDone) => {
  quest.test.afterFinish = function (ok) {
    resolveDone({ ok, failCount: quest.test.failCount, totalCount: quest.test.totalCount })
  }
})

quest.test.runTests()
await new Promise((r) => setTimeout(r, 0))
const result = await done

console.log(`\nDone. total=${result.totalCount} fail=${result.failCount}`)
window.close()
process.exit(result.failCount > 0 ? 1 : 0)
