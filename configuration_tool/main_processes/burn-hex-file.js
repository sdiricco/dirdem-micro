const MAIN_IN_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_IN_PROCESSES;
const MAIN_OUT_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_OUT_PROCESSES;
const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function burnHexFile(usbProgrammer) {
  ipcMain.on(MAIN_IN_PROCESSES.burnHexFile, (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    const hexFilePath = arg[1];

    const commandLine = `avrdude -c ${usbProgrammer} -p ${avrdudeMicroLabel} -U flash:w:${hexFilePath}:i`;

    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
        event.reply(MAIN_OUT_PROCESSES.burnHexFileFailed, err);
        return;
      }
      let response = { stdout: stdout, stderr: stderr };
      event.reply(MAIN_OUT_PROCESSES.burnHexFileCompleted, response);
    });
  })
}
