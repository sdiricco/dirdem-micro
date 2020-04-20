import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { DriverService } from './services/driver.service';
import { MainProcessDataService } from './services/main-process-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'driver-config';

  public get showSpinner() : boolean {
    return this.mainProcessDataService.isPendingProcess;
  };

  constructor(private electronService: ElectronService, private driverService: DriverService, private mainProcessDataService: MainProcessDataService) { }

  ngOnInit() {
    /**
     * Sottoscrizione a un errore dal main process
     */
    this.electronService.ipcRenderer.on('main-process-error', (evt, err) => {
      this.mainProcessDataService.isPendingProcess = false;
      console.log(err);
      window.alert('Error');
    });
    /**
     * Sottoscrizione alla compilazione di un progetto contentente file .C
     */
    this.electronService.ipcRenderer.on('compile-response', (evt, arg) => {
      this.mainProcessDataService.isPendingProcess = false;
      this.driverService.compiledHexFilePath = arg.fileOutput;
      let output = arg.compileOutput;
      if (this.driverService.compiledHexFilePath) {
        window.alert('Compiled done successfully!');
      }
    });
    /**
     * Sottoscrizione al flash del file .hex compilato
     */
    this.electronService.ipcRenderer.on('hex-flashed', (evt, arg) => {
      this.mainProcessDataService.isPendingProcess = false;
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      if (stdout || stderr) {
        window.alert('Hex file flashed!');
      }
    });
    /**
     * Sottoscrizione al flash del bootloader Arduino UNO
     */
    this.electronService.ipcRenderer.on('bootloader-arduino-uno-flashed', (evt, arg) => {
      this.mainProcessDataService.isPendingProcess = false;
      let stdout = arg.stdout;
      let stderr = arg.stderr;
      if (stdout || stderr) {
        window.alert('Arduino UNO bootloader flashed!');
      }
    });
    /**
     * Sottoscrizione al flash dei fuse bit
     */
    this.electronService.ipcRenderer.on('fuse-flashed', (evt, arg) => {
      this.mainProcessDataService.isPendingProcess = false;
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
