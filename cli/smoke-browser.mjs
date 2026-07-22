#!/usr/bin/env node
/**
 * Browser smoke via Playwright against Vite (issue #6).
 */
import { spawn } from 'node:child_process'
import { resolve } from 'node:path'
import { chromium } from 'playwright'
import { ROOT } from './boot.mjs'

/** Dedicated port so we never accidentally smoke against a leftover `npm run dev`. */
const port = 5199
const base = `http://127.0.0.1:${port}`
const viteBin = resolve(ROOT, 'node_modules/vite/bin/vite.js')

const vite = spawn(process.execPath, [
  viteBin,
  '--host', '127.0.0.1',
  '--port', String(port),
  '--strictPort',
], {
  cwd: ROOT,
  stdio: 'pipe',
  env: { ...process.env, BROWSER: 'none' },
})

let viteLog = ''
let viteReadySettled = false

const viteReady = new Promise((resolve, reject) => {
  const onData = (d) => {
    viteLog += d.toString()
    if (!viteReadySettled && /Local:\s+http:\/\/127\.0\.0\.1:5199\//.test(viteLog)) {
      viteReadySettled = true
      resolve()
    }
  }
  vite.stdout.on('data', onData)
  vite.stderr.on('data', onData)
  vite.on('error', (err) => {
    if (!viteReadySettled) reject(err)
  })
  vite.on('exit', (code) => {
    if (!viteReadySettled) {
      reject(new Error(`vite exited early with code ${code}\n${viteLog.slice(-1500)}`))
    }
  })
  setTimeout(() => {
    if (!viteReadySettled) reject(new Error('vite ready timeout\n' + viteLog.slice(-1500)))
  }, 30000)
})

let exitCode = 0
try {
  await viteReady
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
  console.log(`Browser smoke OK  port=${port} outputChars=${finalText.length}`)
  await browser.close()
} catch (e) {
  console.error('Browser smoke failed:', e.message)
  if (viteLog) console.error(viteLog.slice(-2000))
  exitCode = 1
} finally {
  vite.kill('SIGTERM')
}

process.exit(exitCode)
