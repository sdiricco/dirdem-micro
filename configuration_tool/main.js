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

function createWindow() {
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

// Chiamate che arrivano dal processo di renderig /

/**
 * Flash dei Fuse bit nel microcontrollore
 */
ipcMain.on('burn-fuses', (event, arg) => {
  pyShellOptions['args'] = arg;
  console.log(pyShellOptions);
  PythonShell.run('AVR_flash_fuses_byte.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
})

/**
 * Flash del bootloader di Aruino UNO su ATmega328
 */
ipcMain.on('burn-arduino-uno-bootloader', function (event, arg) {
  const microcontrollerLabel = 'm328p';
  const bootloaderPath = '../core/bootloaders/arduino/optiboot_atmega328.hex';
  pyShellOptions['args'] = [microcontrollerLabel, bootloaderPath];
  PythonShell.run('AVR_burn_c_file.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log(results);
  })
})

/**
 * Apre la finestra per selezione di una cartella e compilazione del progetto al suo interno
 */
ipcMain.on('compile-c-project', (event, arg) => {
  const options = { properties: ['openDirectory'] };
  const dirPath = dialog.showOpenDialogSync(options)[0];
  arg.push(dirPath);
  pyShellOptions['args'] = arg;
  PythonShell.run('AVR_build_c_file.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
})

/**
 * Apre la finestra per la selezione di una cartella, compila il prohetto e carica il file .hex dentro al microcontrollore
 */
ipcMain.on('compile-and-burn-c-project', (event, arg) => {
  const options = { properties: ['openDirectory'] };
  const dirPath = dialog.showOpenDialogSync(options)[0];
  arg.push(dirPath);
  pyShellOptions['args'] = arg;
  PythonShell.run('AVR_burn_c_file.py', pyShellOptions, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
})

