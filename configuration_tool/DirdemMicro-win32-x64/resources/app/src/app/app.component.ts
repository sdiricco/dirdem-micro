import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { DriverService } from './services/driver.service';
import { LoaderService, ProcessStatus } from './services/loader.service';
import { MAIN_OUT_PROCESSES } from 'core/models/typeScript/MainProcesses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'driver-config';
  showSpinner: boolean = false;

  constructor(private electronService: ElectronService, private driverService: DriverService, private cdr: ChangeDetectorRef, private loaderService: LoaderService) { }

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
      console.log(err);
      window.alert(err);
    });
    /**
     * Sottoscrizione alla compilazione di un progetto contentente file .C
     */
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.compileCProjectCompleted, (evt, arg) => {
      this.loaderService.updateProcess(ProcessStatus.complete);
      this.driverService.compiledHexFilePath = arg.fileOutput;
      if (this.driverService.compiledHexFilePath) {
        window.alert('Compiled done successfully!');
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
        window.alert('Hex file flashed!');
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
        window.alert('Arduino UNO bootloader flashed!');
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
        window.alert('Fuse flashed!');
      }
    });
  }

  ngAfterViewChecked() {

  }

}
