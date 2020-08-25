const MAIN_IN_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_IN_PROCESSES;
const MAIN_OUT_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_OUT_PROCESSES;
const path = require('path');
const fs = require('fs');
const glob = require("glob");
const child = require('child_process');
const { ipcMain } = require('electron');
const { dialog } = require('electron');


module.exports = function compileCProject() {
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
}

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

