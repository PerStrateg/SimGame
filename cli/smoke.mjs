#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { ROOT } from './boot.mjs'

function run(fileUrl) {
  const script = fileURLToPath(fileUrl)
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [script], {
      cwd: ROOT,
      stdio: 'inherit',
      env: process.env,
    })
    child.on('exit', (code) => resolve(code ?? 1))
  })
}

const cliCode = await run(new URL('./smoke-cli.mjs', import.meta.url))
if (cliCode !== 0) process.exit(cliCode)

const browserCode = await run(new URL('./smoke-browser.mjs', import.meta.url))
process.exit(browserCode)
