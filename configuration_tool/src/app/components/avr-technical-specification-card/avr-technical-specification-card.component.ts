import { Component, OnInit, Input } from '@angular/core';
import { AvrMicrocontrollerTechnicalSpecification } from 'core/models/typeScript/AvrMicrocontroller';

@Component({
  selector: 'app-avr-technical-specification-card',
  templateUrl: './avr-technical-specification-card.component.html',
  styleUrls: ['./avr-technical-specification-card.component.css']
})
export class AvrTechnicalSpecificationCardComponent implements OnInit {

  @Input() avrTechincalSpecification: AvrMicrocontrollerTechnicalSpecification;


  constructor() { }

  ngOnInit(): void {
  }

}
