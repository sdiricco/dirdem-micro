import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { DriverService } from './services/driver.service';
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

  constructor(private electronService: ElectronService, private driverService: DriverService, 
    private cdr: ChangeDetectorRef, private loaderService: LoaderService, private toastr: ToastrService) { }

  ngOnInit() {
    /**
     * Sottoscrizione allo stato dei processi asincroni per il loader
     */
    this.loaderService.processStatus.subscribe((status: ProcessStatus)=> {
      status == ProcessStatus.complete? this.showSpinner = false : this.showSpinner = true;
      this.cdr.detectChanges();
    })
    /**
     * Sottoscrizione a un errore dal main process
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.mainProcessError, (evt, err) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.logMessage = err;
      this.cdr.detectChanges();
    });
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
  }

  onCloseLogMessage(evt) {
    this.logMessage = null;
    this.cdr.detectChanges();
  }

}
