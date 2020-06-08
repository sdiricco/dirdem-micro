import { Component, OnInit } from '@angular/core';
import { MicroService } from 'src/app/services/micro.service';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';

@Component({
  selector: 'app-fuse-bit-wizard',
  templateUrl: './fuse-bit-wizard.component.html',
  styleUrls: ['./fuse-bit-wizard.component.css']
})
export class FuseBitWizardComponent implements OnInit {
  microcontroller: AvrMicrocontroller

  constructor(private microService: MicroService) { }

  ngOnInit(): void {
    /**
    * Sottoscrizione al cambiamento del micro selezionato
    */
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
    });
  }

}
