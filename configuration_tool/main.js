const { app, BrowserWindow, electron } = require('electron');
const { ipcMain } = require('electron');
const { PythonShell } = require('python-shell');
const { dialog } = require('electron')

var pyShellOptions =
{
  mode: 'text',
  pythonPath: 'py',
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
ipcMain.on('burn-fuses', (event, arg) => {
  pyShellOptions['args'] = arg;
  console.log(pyShellOptions);
  PythonShell.run('AVR_flash_fuses_byte.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log(results);
  })
})

/**
 * Carica il bootloader di Aruino UNO su ATmega328
 */
ipcMain.on('burn-arduino-uno-bootloader', (event, arg) => {
  console.log(arg);
  PythonShell.run('burn_uno_bootloader.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log('results: %j', results);
  })
})

/**
 * Apre la finestra per selezione di una cartella e compilazione del progetto al suo interno
 */
ipcMain.on('compile-c-project', (event, microcontrollerName) => {
  const options = { properties: ['openDirectory'] };
  const dirPath = dialog.showOpenDialogSync(options)[0];
  pyShellOptions['args'] = [microcontrollerName, dirPath];
  PythonShell.run('AVR_build_c_file.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log('results: %j', results);
  })
})


