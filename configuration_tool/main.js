// const { PythonShell } = require('python-shell');
const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron');
const { dialog } = require('electron');
var glob = require("glob")
const child = require('child_process');
const fs = require('fs');
const path = require('path');
const MAIN_IN_PROCESSES = require('./core/models/javascript/MainProcesses').MAIN_IN_PROCESSES;
const MAIN_OUT_PROCESSES = require('./core/models/javascript/MainProcesses').MAIN_OUT_PROCESSES;

const USB_PROGRAMMER = 'usbasp';
const AVRDUDE_LOG_FILE = 'AvrdudeLogfile.txt';

function createWindow() {
  let win = new BrowserWindow({
    width: 1300,
    height: 920,
    icon: `${__dirname}/src/assets/logo/electronAppLogo.png`,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
  })
  win.loadFile('./dist/index.html');
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
ipcMain.on(MAIN_IN_PROCESSES.burnArduinoUnoBootloader, (event, arg) => {
  const avrdudeMicroLabel = arg[0];
  const bootloaderPath = './core/bootloaders/arduino/optiboot_atmega328.hex';

  const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${avrdudeMicroLabel} -e -U flash:w:"${bootloaderPath}":a`;

  child.exec(commandLine, (err, stdout, stderr) => {
    if (err) {
      event.reply(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderFailed, err);
      return;
    };
    let response = {stdout: stdout, stderr: stderr};
    event.reply(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderCompleted, response);
  });
})

/**
 * Flash fuse bit
 */
ipcMain.on(MAIN_IN_PROCESSES.burnFuse, (event, arg) => {
  const avrdudeMicroLabel = arg[0];
  const lowFuse = arg[1];
  const highFuse = arg[2];

  const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${avrdudeMicroLabel} -U lfuse:w:${lowFuse}:m -U hfuse:w:${highFuse}:m`;

  child.exec(commandLine, (err, stdout, stderr) => {
    if (err) {
      event.reply(MAIN_OUT_PROCESSES.burnFusesFailed, err);
      return;
    }
    let response = { stdout: stdout, stderr: stderr };
    event.reply(MAIN_OUT_PROCESSES.burnFusesCompleted, response);
  });
})


/**
 * Lettura di tutti i fuse bit di un microcontrollere
 */
 ipcMain.on(MAIN_IN_PROCESSES.readFuses, (event, arg) => {
  const avrdudeMicroLabel = arg[0];
  const avrdudeFusesType = arg[1];  // array
  const fusesType = arg[2];         // array

  var fusesReaded = [];

  avrdudeFusesType.forEach((avrdudeFuseType, index) => {
    const fuseType = fusesType[index];
    const commandLine = `avrdude -u -c ${USB_PROGRAMMER} -p ${avrdudeMicroLabel} -U ${avrdudeFuseType}:r:-:h`;
    execFuseReading(fuseType, commandLine).then(response => {
      fusesReaded.push(response);
      if (fusesReaded.length == avrdudeFusesType.length) {
        event.reply(MAIN_OUT_PROCESSES.readFusesCompleted, fusesReaded);
      }   
    })
  })  
})


/**
* Processo sincrono lettura di un fuse bit
*/
function execFuseReading(fuseType, commandLine) {
  return new Promise((resolve, reject) => {
    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
          event.reply(MAIN_OUT_PROCESSES.mainProcessError, err);
          return;
      }
      let response = { stdout: stdout, stderr: stderr, fuseType: fuseType};
      resolve(response);
    })
  })
}


/**
 * Compilazione progetto con files .c
 */
ipcMain.on(MAIN_IN_PROCESSES.compileCProject, (event, arg) => {
  const microName = arg[0];
  const options = { properties: ['openDirectory'] };

  try {
    var projectPath = dialog.showOpenDialogSync(options)[0];
  } catch (error) {
    event.reply(MAIN_OUT_PROCESSES.compileCProjectFailed, error);
    return;
  }

  const outputFolderPath = path.join(projectPath, 'output');

  clearOutputFolder(outputFolderPath);
  findCFiles(projectPath).then(filePathToBuild => {
    compileCFiles(filePathToBuild, projectPath, microName, outputFolderPath).then(compileOutput => {
      let response = { fileOutput: `${path.join(outputFolderPath, 'build.hex')}`, compileOutput: compileOutput };
      event.reply(MAIN_OUT_PROCESSES.compileCProjectCompleted, response);
    }, rej1 => {
      event.reply(MAIN_OUT_PROCESSES.compileCProjectFailed, rej1);
    });
  }, rej2 => {
    event.reply(MAIN_OUT_PROCESSES.compileCProjectFailed, rej2);
  })
})

/**
 * Flash del file .hex compilato
 */
ipcMain.on(MAIN_IN_PROCESSES.burnHexFile, (event, arg) => {
  const avrdudeMicroLabel = arg[0];
  const hexFilePath = arg[1];

  const commandLine = `avrdude -c ${USB_PROGRAMMER} -p ${avrdudeMicroLabel} -U flash:w:${hexFilePath}:i`;

  child.exec(commandLine, (err, stdout, stderr) => {
    if (err) {
      event.reply(MAIN_OUT_PROCESSES.burnHexFileFailed, err);
      return;
    }
    let response = { stdout: stdout, stderr: stderr };
    event.reply(MAIN_OUT_PROCESSES.burnHexFileCompleted, response);
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
