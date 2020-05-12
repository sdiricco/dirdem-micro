import { Component, OnInit, Input } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-avr-technical-specification-card',
  templateUrl: './avr-technical-specification-card.component.html',
  styleUrls: ['./avr-technical-specification-card.component.css']
})
export class AvrTechnicalSpecificationCardComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.microcontrollerSelected.subscribe(microcontroller => {
      console.log(microcontroller);
    })
  }

  ngOnChanges(): void {

  }

}
