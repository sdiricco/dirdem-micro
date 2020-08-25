const MAIN_IN_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_IN_PROCESSES;
const MAIN_OUT_PROCESSES = require('../core/models/javascript/MainProcesses').MAIN_OUT_PROCESSES;
const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function burnArduinoUnoBootloader(usbProgrammer) {
  ipcMain.on(MAIN_IN_PROCESSES.burnArduinoUnoBootloader, (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    const bootloaderPath =  '../core/bootloaders/arduino/optiboot_atmega328.hex';

    const commandLine = `avrdude -u -c ${usbProgrammer} -p ${avrdudeMicroLabel} -e -U flash:w:"${bootloaderPath}":a`;

    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
        event.reply(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderFailed, err);
        return;
      };
      let response = {stdout: stdout, stderr: stderr};
      event.reply(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderCompleted, response);
    });
  })
}

