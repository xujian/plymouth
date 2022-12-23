"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const fs = require("fs");
let window = null;
const args = process.argv.slice(1), serve = args.some(val => val === '--serve');
function createWindow() {
    const size = electron_1.screen.getPrimaryDisplay().workAreaSize;
    window = new electron_1.BrowserWindow({
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
    });
    if (serve) {
        // const debug = require('electron-debug'),
        // debug()
        // require('electron-reloader')(module)
        window.loadURL('http://localhost:4200');
    }
    else {
        let pathIndex = './index.html';
        const distIndex = path.join(__dirname, '../dist/index.html');
        if (fs.existsSync(distIndex)) {
            pathIndex = '../dist/index.html';
        }
        const url = new URL(path.join('file:', __dirname, pathIndex));
        window.loadURL(url.href);
    }
    window.on('close', () => {
        window = null;
    });
    return window;
}
try {
    electron_1.app.on('ready', () => {
        setTimeout(createWindow, 400);
    });
    electron_1.app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', () => {
        if (window === null) {
            createWindow();
        }
    });
}
catch (e) {
    // catch error
    // throw e
}
