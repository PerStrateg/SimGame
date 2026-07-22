import { spawn } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')
const EXAMPLES = resolve(ROOT, 'examples')

function listExamples() {
  return readdirSync(EXAMPLES, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.startsWith('game-'))
    .map((d) => d.name.replace(/^game-/, ''))
    .sort()
}

const arg = process.argv[2]
if (!arg || arg === '--list' || arg === '-l') {
  console.log('Usage: npm run example -- <name>')
  console.log('Examples:')
  for (const name of listExamples()) console.log('  ' + name)
  process.exit(arg ? 0 : 1)
}

const short = arg.replace(/^game-/, '')
const dir = resolve(EXAMPLES, 'game-' + short)
if (!existsSync(dir)) {
  console.error('Not found: examples/game-' + short)
  console.error('Run: npm run example -- --list')
  process.exit(1)
}

const url = '/?example=' + encodeURIComponent(short)
const child = spawn('npx', ['vite', '--open', url], {
  cwd: ROOT,
  stdio: 'inherit',
  shell: true,
})
child.on('exit', (code) => process.exit(code ?? 1))
