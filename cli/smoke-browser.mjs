#!/usr/bin/env node
/**
 * Browser smoke via Playwright against Vite (issue #6).
 */
import { spawn } from 'node:child_process'
import { connect } from 'node:net'
import { chromium } from 'playwright'
import { ROOT } from './boot.mjs'

function waitPort(port, host = '127.0.0.1', ms = 30000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const c = connect(port, host, () => {
        c.end()
        resolve()
      })
      c.on('error', () => {
        if (Date.now() - start > ms) reject(new Error(`Port ${port} not ready`))
        else setTimeout(tryOnce, 200)
      })
    }
    tryOnce()
  })
}

const port = 5173
const base = `http://127.0.0.1:${port}`

const vite = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['vite', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], {
  cwd: ROOT,
  stdio: 'pipe',
  shell: false,
  env: { ...process.env, BROWSER: 'none' },
})

let viteLog = ''
vite.stdout.on('data', (d) => { viteLog += d.toString() })
vite.stderr.on('data', (d) => { viteLog += d.toString() })

let exitCode = 0
try {
  await waitPort(port)
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(base + '/', { waitUntil: 'domcontentloaded', timeout: 30000 })
  await page.waitForSelector('#output', { timeout: 15000 })
  await page.waitForSelector('#textbox', { timeout: 15000 })
  const err = await page.locator('#loading.quest-load-error').count()
  if (err) throw new Error('Load error banner visible')

  await page.locator('#textbox').fill('look')
  await page.locator('#textbox').press('Enter')
  await page.waitForTimeout(400)

  const finalText = await page.locator('#output').innerText()
  if (!finalText || finalText.trim().length < 3) {
    throw new Error('Browser smoke: empty #output')
  }
  console.log(`Browser smoke OK  outputChars=${finalText.length}`)
  await browser.close()
} catch (e) {
  console.error('Browser smoke failed:', e.message)
  if (viteLog) console.error(viteLog.slice(-2000))
  exitCode = 1
} finally {
  vite.kill()
}

process.exit(exitCode)
