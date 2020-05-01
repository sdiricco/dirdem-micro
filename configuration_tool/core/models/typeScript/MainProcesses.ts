/**
 * Attenzione
 * Ad ogni modifica di questo file ricompilare anche il rispettivo
 * "MainProcesses.js" con il comando "tsc"
 */

 export const MAIN_IN_PROCESSES =
 {
    burnFuse: 'burnFuse',
    burnArduinoUnoBootloader: 'burnArduinoUnoBootloader',
    compileCProject: 'compileCProject',
    burnHexFile: 'burnHexFile'
 }

 export const MAIN_OUT_PROCESSES =
 {
    mainProcessError: 'mainProcessError',
    burnFuseCompleted: 'burnFuseCompleted',
    burnArduinoUnoBootloaderCompleted: 'burnArduinoUnoBootloaderCompleted',
    compileCProjectCompleted: 'compileCProjectCompleted',
    burnHexFileCompleted: 'burnHexFileCompleted',
    burnFuseFailed: 'burnFuseFailed',
    burnArduinoUnoBootloaderFailed: 'burnArduinoUnoBootloaderFailed',
    compileCProjectFailed: 'compileCProjectFailed',
    burnHexFileFailed: 'burnHexFileFailed'
 }
