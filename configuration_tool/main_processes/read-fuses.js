const MAIN_IN_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_IN_PROCESSES;
const MAIN_OUT_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_OUT_PROCESSES;
const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function readFuses(usbProgrammer) {
  ipcMain.on(MAIN_IN_PROCESSES.readFuses, (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    const fusesToRead = arg[1];             // array di oggetti [{ avrdudeFuseType, value }]
    let commandLine = `avrdude -u -c ${usbProgrammer} -p ${avrdudeMicroLabel} `;
    fusesToRead.forEach(fuseToRead => {
      const avrdudeFuseType = fuseToRead.avrdudeFuseType;
      commandLine += `-U ${avrdudeFuseType}:r:-:h `;
    })
    try {
      let response = [];
      let hexValues = child.execSync(commandLine).toString();
      hexValues = hexValues.trim();
      hexValues = hexValues.split('\n');
      for (let i = 0; i < fusesToRead.length; i++) {
        const fuseType = fusesToRead[i].fuseType;
        const hexValue = hexValues[i];
        response.push({ type: fuseType, hexValue: hexValue });
      }
      event.reply(MAIN_OUT_PROCESSES.readFusesCompleted, response);
    } catch (error) {
      event.reply(MAIN_OUT_PROCESSES.mainProcessError, error);
    }
  })
}
