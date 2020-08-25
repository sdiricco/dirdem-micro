const USB_PROGRAMMER = 'usbasp';
// main processes
const electronMain = require('./main_processes/electron-main');
const burnArduinoUnoBootloader = require('./main_processes/burn-arduino-uno-bootloader');
const burnFuses = require('./main_processes/burn-fuses');
const readFuses = require('./main_processes/read-fuses');
const burnHexFile = require('./main_processes/burn-hex-file');
const compileCProject = require('./main_processes/compile-c-project');

electronMain;

burnArduinoUnoBootloader(USB_PROGRAMMER);

burnFuses(USB_PROGRAMMER);

readFuses(USB_PROGRAMMER);

burnHexFile(USB_PROGRAMMER);

compileCProject();
