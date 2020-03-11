// const { spawn } = require('child_process');
// const path = require('path');
// const child_process = require('child_process');
const { app, BrowserWindow, electron } = require('electron');
const { ipcMain } = require('electron');
const { PythonShell } = require('python-shell');
// const ScriptMethods = require('../core/models/typeScript/ScriptMethods').ScriptMethods

const pyShellOptions = 
{
  mode: 'text',
  pythonPath: 'python',
  scriptPath: '../core/tools/python/scripts/',
  pythonOptions: ['-u']
}

function createWindow () {
  let win = new BrowserWindow({
    width: 1300,
    height: 920,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
  })
  win.loadFile('./dist/index.html')
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
  win.removeMenu()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// Chiamate che arrivano dal processo di renderig

/**
 * Carica i Fuse bit nel microcontrollore
 */
ipcMain.on('burnFuses', (event, arg) => {
  console.log(arg);
  PythonShell.run('hello.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log('results: %j', results);
  })
});

/**
 * Carica il bootloader di Aruino UNO su ATmega328
 */
ipcMain.on('burnUnoBootloader', (event, arg) => {
  console.log(arg);
  PythonShell.run('burn_uno_bootloader.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log('results: %j', results);
  })
})

