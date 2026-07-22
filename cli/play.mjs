#!/usr/bin/env node
import readline from 'node:readline'
import { bootQuest, resolveFolder } from './boot.mjs'

function parseArgs(argv) {
  const opts = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--example' || a === '-e') opts.example = argv[++i]
    else if (a === '--folder' || a === '-f') opts.folder = argv[++i]
    else if (a === '--help' || a === '-h') opts.help = true
    else if (!a.startsWith('-') && !opts.example) opts.example = a
  }
  return opts
}

const opts = parseArgs(process.argv.slice(2))
if (opts.help) {
  console.log(`Usage: npm run play -- [--example name]
  npm run play
  npm run play -- --example item-links
CLI: text commands only (no clicks). Exit: quit / exit / Ctrl+C`)
  process.exit(0)
}

const folder = resolveFolder(opts)
process.stdout.write(`QuestJS CLI  ${folder}\n`)

const { quest, window } = await bootQuest(opts)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
})

let chain = Promise.resolve()
let closing = false

rl.prompt()
rl.on('line', (line) => {
  chain = chain.then(async () => {
    if (closing) return
    const cmd = line.trim()
    if (!cmd) {
      rl.prompt()
      return
    }
    if (/^(quit|exit|q)$/i.test(cmd)) {
      closing = true
      rl.close()
      return
    }
    try {
      quest.runCmd(cmd)
      await new Promise((r) => setTimeout(r, 0))
    } catch (err) {
      console.error(err)
    }
    if (!closing) rl.prompt()
  })
})

rl.on('close', () => {
  window.close()
  process.exit(0)
})
