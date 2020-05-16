"use strict";
/**
 * Attenzione
 * Ad ogni modifica di questo file ricompilare anche il rispettivo
 * "MainProcesses.js" con il comando "tsc"
 */
exports.__esModule = true;
exports.MAIN_IN_PROCESSES = {
    burnFuses: 'burnFuses',
    readFuses: 'readFuses',
    burnArduinoUnoBootloader: 'burnArduinoUnoBootloader',
    compileCProject: 'compileCProject',
    burnHexFile: 'burnHexFile'
};
exports.MAIN_OUT_PROCESSES = {
    mainProcessError: 'mainProcessError',
    burnFusesCompleted: 'burnFusesCompleted',
    readFusesCompleted: 'readFusesCompleted',
    burnArduinoUnoBootloaderCompleted: 'burnArduinoUnoBootloaderCompleted',
    compileCProjectCompleted: 'compileCProjectCompleted',
    burnHexFileCompleted: 'burnHexFileCompleted',
    burnFusesFailed: 'burnFusesFailed',
    burnArduinoUnoBootloaderFailed: 'burnArduinoUnoBootloaderFailed',
    compileCProjectFailed: 'compileCProjectFailed',
    burnHexFileFailed: 'burnHexFileFailed'
};
