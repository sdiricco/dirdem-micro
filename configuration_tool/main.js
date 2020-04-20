// const { PythonShell } = require('python-shell');
const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');
const { dialog } = require('electron');
const child = require('child_process');
const fs = require('fs');
const path = require('path');
var glob = require("glob")

const USB_PROGRAMMER = 'usbasp;'

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
 * Flash bootloader Aruino UNO su ATmega328
 */
ipcMain.on('burn-arduino-uno-bootloader', (event, arg) => {
  const microcontrollerLabel = 'm328p';
  const bootloaderPath = '../core/bootloaders/arduino/optiboot_atmega328.hex';

  const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${microcontrollerLabel} -e -U flash:w:"${bootloaderPath}":a`;

  child.exec(commandLine, (err, stdout, stderr) => {
    if (err) {
      event.reply('main-process-error', err);
      return;
    };

    let response = {stdout: stdout, stderr: stderr};
    event.reply('bootloader-arduino-uno-flashed', response);
  });
})

/**
 * Flash fuse bit
 */
ipcMain.on('burn-fuses', (event, arg) => {
  const microLabel = arg[0];
  const lowFuse = arg[1];
  const highFuse = arg[2];

  const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${microLabel} -U lfuse:w:${lowFuse}:m -U hfuse:w:${highFuse}:m`;

  child.exec(commandLine, (err, stdout, stderr) => {
    if (err) {
      event.reply('main-process-error', err);
      return;
    }
    let response = { stdout: stdout, stderr: stderr };
    event.reply('fuse-flashed', response);
  });
})

/**
 * Compilazione progetto con files .c
 */
ipcMain.on('compile-c-project', (event, arg) => {
  const microName = arg[0];
  const options = { properties: ['openDirectory'] };
  const projectPath = dialog.showOpenDialogSync(options)[0];
  const outputFolderName = 'output';
  const outputFolderPath = path.join(projectPath, outputFolderName);

  clearOutputFolder(outputFolderPath);
  findCFiles(projectPath).then(filePathToBuild => {
    compileCFiles(filePathToBuild, projectPath, microName, outputFolderPath).then(compileOutput => {
      let response = { fileOutput: `${path.join(outputFolderPath, 'build.hex')}`, compileOutput: compileOutput };
      event.reply('compile-response', response);
    }, rej => {
      event.reply('main-process-error', rej);
    });
  }, reject => {
    event.reply('main-process-error', reject);
  })
})

/**
 * Flash del file .hex compilato
 */
ipcMain.on('burn-c-project', (event, arg) => {
  const microLabel = arg[0];
  const hexFilePath = arg[1];

  const commandLine = `avrdude -c ${USB_PROGRAMMER} -p ${microLabel} -U flash:w:${hexFilePath}:i`;

  child.exec(commandLine, (err, stdout, stderr) => {
    if (err) {
      event.reply('main-process-error', err);
      return;
    }
    let response = { stdout: stdout, stderr: stderr };
    event.reply('hex-flashed', response);
  });
})

/**
 * Cerca i file .c ricorsivamente in un dato percorso e li trasforma in stringa (path separati da spazi)
 */
function findCFiles(dirName) {
  return new Promise((resolve, reject) => {
    glob(`${dirName}/**/*.c`, null, (err, files) => {
      if (err) {
        reject(err);
      }
      else {
        var stringFiles = ' ';
        files.forEach(file => {
          stringFiles += `${file} `;
        })
        resolve(stringFiles);
      }
    })
  })
};


/**
 * Compila i file .c, ha bisogno di AVRGCC nelle variabili d'ambiente
 */
function compileCFiles(filePathsToBuild, projectPath, microName, outputFolderPath) {
    const createObjFile = `avr-gcc ${filePathsToBuild} -I ${projectPath} -g -Os -mmcu=${microName} -o ${outputFolderPath}\\build.o`;
    const createElfFile = `avr-gcc ${filePathsToBuild} -I ${projectPath} -Os -mmcu=${microName} -o ${outputFolderPath}\\build.elf`;
    const createHexFile = `avr-objcopy -j .text -j.data -O ihex ${path.join(outputFolderPath, 'build.elf')} ${path.join(outputFolderPath, 'build.hex')}`;

    return new Promise((resolve, reject) => {
      try {
        var res1 = child.execSync(createObjFile).toString();
      } catch (error) {
        reject(error);
      }

      try {
        var res2 = child.execSync(createElfFile).toString();
      } catch (error) {
        reject(error);
      }

      try {
        var res3 = child.execSync(createHexFile).toString();
      } catch (error) {
        reject(error);
      }

      resolve(`${res1}, ${res2}, ${res3}`);
    });
};


/**
 * Svuota il contenuto della cartella di output (dove vengono generati i file compilati)
 */
function clearOutputFolder (outputFolderPath) {
  if (!fs.existsSync(outputFolderPath)) {
    fs.mkdirSync(outputFolderPath);
  }
  else {
    let files = fs.readdirSync(outputFolderPath);
    if (files) {
      for (const file of files) {
        fs.unlink(path.join(outputFolderPath, file), err => {
          if (err) throw err;
        });
      }
    }
  };
}
