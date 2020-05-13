import { Component } from "@angular/core";
import { MicroService } from "src/app/services/micro.service";
import { MatDialog } from '@angular/material/dialog';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  microcontroller: AvrMicrocontroller = new AvrMicrocontroller();

  constructor(
    public dialog: MatDialog, private microService: MicroService) { };

  ngOnInit(): void {
    this.microService.microcontrollerSelected.subscribe(micro => {
      this.microcontroller = micro;
    })
  }

}
