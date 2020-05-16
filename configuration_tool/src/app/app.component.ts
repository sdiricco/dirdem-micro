import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { MicroService } from './services/micro.service';
import { LoaderService, ProcessStatus } from './services/loader.service';
import { MAIN_OUT_PROCESSES } from 'core/models/typeScript/MainProcesses';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'driver-config';
  showSpinner: boolean = false;
  logMessage: string;

  constructor(private electronService: ElectronService, private driverService: MicroService,
    private cdr: ChangeDetectorRef, private loaderService: LoaderService, private toastr: ToastrService) { }

  ngOnInit() {
    /**
     * Sottoscrizione allo stato dei processi asincroni per il loader
     */
    this.loaderService.processStatus.subscribe((status: ProcessStatus)=> {
      status == ProcessStatus.complete? this.showSpinner = false : this.showSpinner = true;
      this.cdr.detectChanges();
    })


    // errori
    /**
     * Sottoscrizione a un errore generico dal main process
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.mainProcessError, (evt, err) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione erorre della compilazione di un progetto con file .C
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.compileCProjectFailed, (evt, err) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.driverService.compiledHexFilePath = null;
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione errore del flash fuse bit
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnFuseFailed, (evt, err) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
        /**
     * Sottoscrizione errore del flash bootloader Arduino Uno
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnArduinoUnoBootloaderFailed, (evt, err) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });
    /**
     * Sottoscrizione errore del flash file .hex
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnHexFileFailed, (evt, err) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.logMessage = err.toString();
      this.cdr.detectChanges();
    });


    // completati
    /**
     * Sottoscrizione alla compilazione di un progetto contentente file .C
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.compileCProjectCompleted, (evt, arg) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
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
      this.loaderService.updateProcess(ProcessStatus.complete);
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
      this.loaderService.updateProcess(ProcessStatus.complete);
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
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.burnFuseCompleted, (evt, arg) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
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
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.readFuseCompleted, (evt, arg) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      if (stdout) {
        this.logMessage = `Fuse readed with value: ${stdout}`;
        this.cdr.detectChanges(); 
      }
    })
  }

  onCloseLogMessage(evt) {
    this.logMessage = null;
    this.cdr.detectChanges();
  }
}
