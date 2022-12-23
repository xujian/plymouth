import {app, BrowserWindow, screen} from 'electron'
import * as path from 'path'
import * as fs from 'fs'

let window: BrowserWindow | null = null;
const args = process.argv.slice(1),
  serve: boolean = args.some(val => val === '--serve')

function createWindow (): BrowserWindow {
  const size = screen.getPrimaryDisplay().workAreaSize
  window = new BrowserWindow({
    center: true,
    width: size.width / 2,
    height: size.height / 2,
    backgroundColor: 'transparent',
    titleBarStyle: 'hiddenInset',
    transparent: true,
    vibrancy: 'sidebar',
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: serve,
      contextIsolation: false
    }
  })

  if (serve) {
    // const debug = require('electron-debug'),
    // debug()
    // require('electron-reloader')(module)
    window.loadURL('http://localhost:4200')
  } else {
    let pathIndex = './index.html'
    const distIndex = path.join(__dirname, '../dist/index.html')
    if (fs.existsSync(distIndex)) {
      pathIndex = '../dist/index.html'
    }
    const url = new URL(path.join('file:', __dirname, pathIndex))
    window.loadURL(url.href)
  }

  window.on('close', () => {
    window = null
  })

  return window
}

try {
  app.on('ready', () => {
    setTimeout(createWindow, 400)
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', () => {
    if (window === null) {
      createWindow()
    }
  })
} catch (e) {
  // catch error
  // throw e
}
