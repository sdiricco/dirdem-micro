const MAIN_IN_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_IN_PROCESSES;
const MAIN_OUT_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_OUT_PROCESSES;
const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function burnFuseBit(usbProgrammer) {
  ipcMain.on(MAIN_IN_PROCESSES.burnFuses, (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    const avrdudeFuses = arg[1];        // array di oggetti [{ avrdudeFuseType, value }]
    var commandLine = `avrdude -u -c ${usbProgrammer} -p ${avrdudeMicroLabel} `;

    avrdudeFuses.forEach(fuse => {
      if (fuse.avrdudeFuseType == 'lfuse') {
        commandLine += `-U lfuse:w:${fuse.hexValue}:m `;
      }
      if (fuse.avrdudeFuseType == 'hfuse') {
        commandLine += `-U hfuse:w:${fuse.hexValue}:m `;
      }
      if (fuse.avrdudeFuseType == 'efuse') {
        commandLine += `-U efuse:w:${fuse.hexValue}:m `;
      }
    })

    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
        event.reply(MAIN_OUT_PROCESSES.burnFusesFailed, err);
        return;
      }
      let response = { stdout: stdout, stderr: stderr };
      event.reply(MAIN_OUT_PROCESSES.burnFusesCompleted, response);
    });
  })
}
