// const { spawn } = require('child_process');
// const path = require('path');
// const child_process = require('child_process');
const { app, BrowserWindow, electron } = require('electron');
const { ipcMain } = require('electron');
const { PythonShell } = require('python-shell');
const { dialog } = require('electron')
// const ScriptMethods = require('../core/models/typeScript/ScriptMethods').ScriptMethods

var pyShellOptions = 
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
ipcMain.on('burnFuses', (event, args) => {
  pyShellOptions['args'] = args;
  console.log(pyShellOptions);
  PythonShell.run('AVR_flash_fuses_byte.py', pyShellOptions, (err, results) => {
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

/** 
 * Apre la finestra di selezione per un file .C da compilare 
 */
ipcMain.on('openDialog', (event, arg) => {
  // let win = new BrowserWindow({ width: 800, height: 600 });
  let options = {
    title : "Seleziona un file .C da compilare", 
    defaultPath : "C:\\",
    buttonLabel : "Custom button",
    properties: ['openFile','multiSelections']
   }

  dialog.showOpenDialog(null, options, (filePaths) => {
    console.log(filePaths);
  });
})


