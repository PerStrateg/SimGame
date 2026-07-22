#!/usr/bin/env node
/**
 * Fast smoke: boot QuestJS in CLI host and check intro text exists.
 */
import { bootQuest } from './boot.mjs'

const { window, folder, quest } = await bootQuest({ quiet: true })

const output = window.document.querySelector('#output')
const text = (output && output.textContent) || ''
const hasUi = Boolean(window.document.querySelector('#input'))
const hasQuest = Boolean(quest && quest.parser && quest.world)

if (!hasUi || !hasQuest) {
  console.error('CLI smoke failed: UI/quest bridge missing')
  process.exit(1)
}

quest.runCmd('look')
await new Promise((r) => setTimeout(r, 50))
const after = window.document.querySelector('#output')?.textContent || ''

if (!after || after.length < 5) {
  console.error('CLI smoke failed: no output after look')
  console.error({ folder, textLen: text.length, afterLen: after.length, after })
  process.exit(1)
}

console.log(`CLI smoke OK  ${folder}  outputChars=${after.length}`)
window.close()
process.exit(0)
