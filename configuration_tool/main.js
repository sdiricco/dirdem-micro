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
 * Flash del bootloader di Aruino UNO su ATmega328
 */
ipcMain.on('burn-arduino-uno-bootloader', (event, arg) => {
  const microcontrollerLabel = 'm328p';
  const bootloaderPath = '../core/bootloaders/arduino/optiboot_atmega328.hex';

  const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${microcontrollerLabel} -B 0.5 -v -e -U flash:w:"${bootloaderPath}":a`;
  executeAsyncProcess(commandLine);
})

/**
 * Flash dei Fuse bit nel microcontrollore
 */
ipcMain.on('burn-fuses', (event, arg) => {
  const microLabel = arg[0];
  const lowFuse = arg[1];
  const highFuse = arg[2];

  const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${microLabel} -B 0.5 -i 5 -U lfuse:w:${lowFuse}:m -U hfuse:w:${highFuse}:m`;
  executeAsyncProcess(commandLine);
})

/**
 * Apre la finestra per selezione di una cartella e compilazione del progetto al suo interno
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
      event.reply('compile-response', `${path.join(outputFolderPath, 'build.hex')}`);
    }, rej => {
      console.error(rej);
    });
  }, reject => {
    console.error(reject);
  })
})

/**
 * Apre la finestra per la selezione di una cartella, compila il prohetto e carica il file .hex dentro al microcontrollore
 */
ipcMain.on('burn-c-project', (event, arg) => {
  const microLabel = arg[0];
  const hexFilePath = arg[1];

  const commandLine = `avrdude -c ${USB_PROGRAMMER} -p ${microLabel} -U flash:w:${hexFilePath}:i`;
  executeAsyncProcess(commandLine);
})


/**
 * @param {*} command
 * Esegue un processo asincrono dalla console di Nodejs
 */
function executeAsyncProcess(command) {
  child.exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
};

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
        var res1 = child.execSync(createObjFile);
      } catch (error) {
        reject(error);
      }

      try {
        var res2 = child.execSync(createElfFile);
      } catch (error) {
        reject(error);
      }

      try {
        var res3 = child.execSync(createHexFile);
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
