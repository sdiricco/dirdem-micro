"use strict";
/**
 * Attenzione
 * Ad ogni modifica di questo file ricompilare anche il rispettivo
 * "MainProcesses.js" con il comando "tsc"
 */
exports.__esModule = true;
exports.MAIN_IN_PROCESSES = {
    burnFuse: 'burnFuse',
    readFuse: 'readFuse',
    burnArduinoUnoBootloader: 'burnArduinoUnoBootloader',
    compileCProject: 'compileCProject',
    burnHexFile: 'burnHexFile'
};
exports.MAIN_OUT_PROCESSES = {
    mainProcessError: 'mainProcessError',
    burnFuseCompleted: 'burnFuseCompleted',
    readFuseCompleted: 'readFuseCompleted',
    burnArduinoUnoBootloaderCompleted: 'burnArduinoUnoBootloaderCompleted',
    compileCProjectCompleted: 'compileCProjectCompleted',
    burnHexFileCompleted: 'burnHexFileCompleted',
    burnFuseFailed: 'burnFuseFailed',
    burnArduinoUnoBootloaderFailed: 'burnArduinoUnoBootloaderFailed',
    compileCProjectFailed: 'compileCProjectFailed',
    burnHexFileFailed: 'burnHexFileFailed'
};
