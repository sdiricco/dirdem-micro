import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MicroService } from 'src/app/services/micro.service';
import { AvrMicrocontroller } from 'core/models/typeScript/AvrMicrocontroller';
import { Frequency, FrequenciesMeasureUnitEnum } from 'core/models/typeScript/Utilities/ElectronicUtilities';
import { ClockFrequenciesOscillatorTypeEnum, ClockFrequenciesOscillatorMaterialEnum } from 'core/models/typeScript/ElectricalCharateristics';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-fuse-bit-wizard',
  templateUrl: './fuse-bit-wizard.component.html',
  styleUrls: ['./fuse-bit-wizard.component.css']
})
export class FuseBitWizardComponent implements OnInit {
  microcontroller: AvrMicrocontroller;
  clockFrequencyOscillatorTypes: ClockFrequenciesOscillatorTypeEnum [] = [];
  clockFrequencyOscillatorMaterials: ClockFrequenciesOscillatorMaterialEnum [] = [];

  clockFrequencyOscillatorValueSelected: Frequency = { frequencyValue: null, frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz };
  clockFrequencyOscillatorTypeSelected: ClockFrequenciesOscillatorTypeEnum;
  clockFrequencyOscillatorMaterialSelected: ClockFrequenciesOscillatorMaterialEnum;


  /**
  * Proprietà emessa all'esterno al componente padre
  */
  @Output() systemClockOscillator = new EventEmitter<SystemClockOscillator>();

  constructor(private microService: MicroService) { }

  ngOnInit(): void {
    /**
    * Sottoscrizione al cambiamento del micro selezionato
    */
    this.microService.microcontrollerSelected.subscribe(microcontroller => {
      this.microcontroller = microcontroller;
      this.microcontroller.electricalCharateristics.clockFrequencyOscillators.forEach(oscillator => {
        if (this.clockFrequencyOscillatorTypes.indexOf(oscillator.clockFrequencyOscillatorType) === -1) {
          this.clockFrequencyOscillatorTypes.push(oscillator.clockFrequencyOscillatorType)
        } 
      })
      this.microcontroller.electricalCharateristics.clockFrequencyOscillators.forEach(material => {
        if (this.clockFrequencyOscillatorMaterials.indexOf(material.clockFrequencyOscillatorMaterial) === -1) {
          this.clockFrequencyOscillatorMaterials.push(material.clockFrequencyOscillatorMaterial)
        } 
      })

    });
  }

  /**
  * Funzione scatenata sul keyup dell'input della frequenza scelta dall'utente
  */
  onSelectedSystemFrequencyKeyup(): void {
    this.checkForEventEmitter();
  }

  /**
  * Funzione scatenata sul cambiamento della dropdown del tipo oscillatore
  */
  onOscillatorTypeChange(evt: MatSelectChange): void {
    this.clockFrequencyOscillatorTypeSelected = evt.value;
    this.checkForEventEmitter();
  }

  /**
  * Funzione scatenata sul cambiamento della dropdown del materiale dell'oscillatore
  */
  onOscillatorMaterialChange(evt: MatSelectChange): void {
    this.clockFrequencyOscillatorMaterialSelected = evt.value;
    this.checkForEventEmitter();
  }

  /**
   * Funzione che verifica che i campi selectedSystemFrequency - clockFrequencyOscillatorType - clockFrequencyOscillatorMaterials
   * siano tutti valorizzati per essere emessi al componente padre
   */
  checkForEventEmitter() {
    if (this.clockFrequencyOscillatorValueSelected && this.clockFrequencyOscillatorValueSelected.frequencyValue 
      && this.clockFrequencyOscillatorTypeSelected && this.clockFrequencyOscillatorMaterialSelected) {
      const systemClockOscillator: SystemClockOscillator = 
      { 
        clockFrequencyOscillatorValueSelected: this.clockFrequencyOscillatorValueSelected,
        clockFrequencyOscillatorTypeSelected: this.clockFrequencyOscillatorTypeSelected,
        clockFrequencyOscillatorMaterialSelected: this.clockFrequencyOscillatorMaterialSelected
      }
      this.systemClockOscillator.emit(systemClockOscillator);
    }

  }

}

/**
 * Rappresenta la "triade" di valori selectedSystemFrequency - clockFrequencyOscillatorType - clockFrequencyOscillatorMaterials
 */
export interface SystemClockOscillator {
  clockFrequencyOscillatorValueSelected: Frequency;
  clockFrequencyOscillatorTypeSelected: ClockFrequenciesOscillatorTypeEnum;
  clockFrequencyOscillatorMaterialSelected: ClockFrequenciesOscillatorMaterialEnum;
}
