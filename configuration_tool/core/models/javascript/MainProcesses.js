"use strict";
/**
 * Attenzione
 * Non modificare manualmente questo file perchè dipende dal rispettivo
 * "MainProcesses.ts", quindi modificare quest'ultimo e eseguire il comando "tsc"
 */
exports.__esModule = true;
exports.MAIN_IN_PROCESSES = {
    burnFuse: 'burnFuse',
    burnArduinoUnoBootloader: 'burnArduinoUnoBootloader',
    compileCProject: 'compileCProject',
    burnHexFile: 'burnHexFile'
};
exports.MAIN_OUT_PROCESSES = {
    mainProcessError: 'mainProcessError',
    burnFuseCompleted: 'burnFuseCompleted',
    burnArduinoUnoBootloaderCompleted: 'burnArduinoUnoBootloaderCompleted',
    compileCProjectCompleted: 'compileCProjectCOmpleted',
    burnHexFileCompleted: 'burnHexFileCompleted'
};
