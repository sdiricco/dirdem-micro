import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { MicroService } from './services/micro.service';
import { LoaderService } from './services/loader.service';
import { MAIN_OUT_PROCESSES } from 'core/models/typeScript/MainProcesses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dirdem-micro';
  showSpinner: boolean = false;
  logMessage: string;

  constructor(private electronService: ElectronService, private driverService: MicroService,
    private cdr: ChangeDetectorRef, public loaderService: LoaderService) { }

  ngOnInit() {
    /**
     * Sottoscrizione a un errore generico dal main process
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.mainProcessError, (evt, err) => {
      this.loaderService.hide();
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione erorre della compilazione di un progetto con file .C
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.compileCProjectFailed, (evt, err) => {
      this.loaderService.hide();
      this.driverService.compiledHexFilePath = null;
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione errore del flash fuse bit
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnFusesFailed, (evt, err) => {
      this.loaderService.hide();
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
    * Sottoscrizione errore del flash bootloader Arduino Uno
    */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderFailed, (evt, err) => {
      this.loaderService.hide();
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione errore del flash file .hex
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnHexFileFailed, (evt, err) => {
      this.loaderService.hide();
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione alla compilazione di un progetto contentente file .C
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.compileCProjectCompleted, (evt, arg) => {
      this.loaderService.hide();
      this.driverService.compiledHexFilePath = arg.fileOutput;
      if (this.driverService.compiledHexFilePath) {
        this.logMessage = 'Compiled done successfully!';
        this.cdr.detectChanges();
      }
    });
    /**
     * Sottoscrizione al flash del file .hex compilato
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnHexFileCompleted, (evt, arg) => {
      this.loaderService.hide();
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      if (stdout || stderr) {
        this.logMessage = 'Hex file flashed!';
        this.cdr.detectChanges();
      }
    });
    /**
     * Sottoscrizione al flash del bootloader Arduino UNO
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderCompleted, (evt, arg) => {
      this.loaderService.hide();
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      if (stdout || stderr) {
        this.logMessage = 'Arduino UNO bootloader flashed!';
        this.cdr.detectChanges();
      }
    });
    /**
     * Sottoscrizione al flash dei fuse bit
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnFusesCompleted, (evt, arg) => {
      this.loaderService.hide();
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      if (stdout || stderr) {
        this.logMessage = 'Fuse flashed!';
        this.cdr.detectChanges();
      }
    });
    /**
     * Sottoscrizione al completamento lettura fuse bit;
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.readFusesCompleted, (evt, arg) => {
      this.loaderService.hide();
      this.logMessage = `Fuse readed with success!`;
      this.cdr.detectChanges();
    })
  }

  onCloseLogMessage(evt) {
    this.logMessage = null;
    this.cdr.detectChanges();
  }
}
