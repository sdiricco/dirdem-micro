import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { MicroService } from 'src/app/services/micro.service';


@Component({
  selector: 'app-micro-image-show',
  templateUrl: './micro-image-show.component.html',
  styleUrls: ['./micro-image-show.component.css']
})
export class MicroImageShowComponent implements OnInit {
  microcontroller: AvrMicrocontroller;

  get imgSrc(): string {
    const currentPingConfig = this.microcontroller.microcontrollerPinConfiguration(this.microService.microcontrollerPackage.getValue());
    return currentPingConfig.pinoutImagesSrc[0];
  }

  constructor(public dialog: MatDialog, private overlay: Overlay, private microService: MicroService) { }

  ngOnInit(): void {
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    })
  }

  /**
   * Evento scatenato su click immagine
   */
  changeMicrocontrollerPackage() {
    const currentPinConfig = this.microcontroller.microcontrollerPinConfiguration(this.microService.microcontrollerPackage.getValue());
    const configIndex = this.microcontroller.microcontrollerPinConfigurations.findIndex(pinConfig => pinConfig == currentPinConfig);
    let newIndex = (configIndex + 1) == this.microcontroller.microcontrollerPinConfigurations.length ? 0 : (configIndex + 1);
    this.microService.updateMicrocontrollerPackage(this.microcontroller.microcontrollerPinConfigurations[newIndex].microcontrollerPackage);
  }

}
