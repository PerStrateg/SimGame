import { createReadStream, cpSync, existsSync, statSync } from 'node:fs'
import { extname, resolve } from 'node:path'
import { defineConfig } from 'vite'

const ROOT = resolve(import.meta.dirname)
const STATIC_DIRS = ['lib', 'lang', 'game', 'assets', 'rpg', 'examples']
const FA_PKG = resolve(ROOT, 'node_modules/@fortawesome/fontawesome-free')
const FA_VENDOR = '/vendor/fontawesome'
const MIME = {
  '.css': 'text/css; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.svg': 'image/svg+xml',
}

function copyQuestStatic() {
  return {
    name: 'copy-quest-static',
    closeBundle() {
      const outDir = resolve(ROOT, 'dist')
      for (const dir of STATIC_DIRS) {
        const src = resolve(ROOT, dir)
        if (!existsSync(src)) continue
        cpSync(src, resolve(outDir, dir), { recursive: true })
      }
      if (existsSync(FA_PKG)) {
        cpSync(resolve(FA_PKG, 'css'), resolve(outDir, 'vendor/fontawesome/css'), { recursive: true })
        cpSync(resolve(FA_PKG, 'webfonts'), resolve(outDir, 'vendor/fontawesome/webfonts'), { recursive: true })
      }
    },
  }
}

function serveFontAwesome() {
  return {
    name: 'serve-fontawesome',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith(FA_VENDOR + '/')) return next()
        const rel = req.url.slice(FA_VENDOR.length).split('?')[0]
        const file = resolve(FA_PKG, '.' + rel)
        if (!file.startsWith(FA_PKG) || !existsSync(file) || !statSync(file).isFile()) return next()
        res.setHeader('Content-Type', MIME[extname(file)] || 'application/octet-stream')
        res.setHeader('Cache-Control', 'no-store')
        createReadStream(file).pipe(res)
      })
    },
  }
}

function questDevBanner() {
  return {
    name: 'quest-dev-banner',
    configureServer(server) {
      const print = () => {
        const port = server.config.server.port
        const host = server.config.server.host || '127.0.0.1'
        const base = `http://${host}:${port}`
        server.config.logger.info('')
        server.config.logger.info(`  QuestJS  default  ${base}/`)
        server.config.logger.info(`  Example           ${base}/?example=item-links`)
        server.config.logger.info('  npm run example -- item-links')
        server.config.logger.info('  npm run example -- --list')
        server.config.logger.info('')
      }
      const { httpServer } = server
      if (httpServer) httpServer.once('listening', () => setTimeout(print, 0))
      else setTimeout(print, 500)
    },
  }
}

export default defineConfig({
  root: ROOT,
  publicDir: false,
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    open: '/',
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(ROOT, 'index.html'),
    },
  },
  plugins: [serveFontAwesome(), copyQuestStatic(), questDevBanner()],
})
