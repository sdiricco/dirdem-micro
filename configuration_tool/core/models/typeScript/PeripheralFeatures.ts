import { ElectronicUnit } from './Utilities/ElectronicUtilities';
import { MicrocontrollerNamesEnum } from './Microcontroller';
import { PinLabelsEnum } from './MicrocontrollerPins';

export class PeripheralFeatures {
    microcontrollerTimers?: MicrocontrollerTimer [];
    microcontrollerPwms?: MicrocontrollerPwm [];
    microcontrollerWdgs?: MicrocontrollerWdg [];
    microcontrollerAdcs?: MicrocontrollerAdc [];
    microcontrollerAnalogComparators?: MicrocontrollerAnalogComparator [];
    microcontrollerSleepModes?: MicrontrollerSleepMode [];
}

export class MicrocontrollerTimer {
    microcontrollerTimerName: MicrocontrollerTimerNamesEnum;
    microcontrollerWidthCounter: ElectronicUnit;
    microcontrollerTimerPrescaler : MicrocontrollerTimerPrescaler;
    microcontrollerTimerInterruptSources: MicrocontrollerTimerInterruptSource;
    microcontrollerTimerPinInvolved: PinLabelsEnum [];
    microcontrollerTimerFeatures?: MicrocontrollerTimerFeature [];
}

export class MicrocontrollerTimerPrescaler {
    microcontrollerTimerPrescalerEnable: boolean;
    microcontrollerTimerPrescalerValuesList?: number [];
    microcontrollerTimerPrescalerRange?: number []
}

export class MicrocontrollerTimerFeature {
    microcontrollerTimerFeaturesName: MicrocontrollerTimerFeaturesNameEnum;
    microcontrollerTimerFeaturesDescription?: MicrocontrollerTimerFeaturesDescriptionEnum [];
}

export class MicrocontrollerTimerInterruptSource {
    microcontrollerTimerInterruptSourceEnable: boolean;
    microcontrollerTimerInterruptSourcesList?: MicrocontrollerTimerInterruptSourcesListEnum;
}

export enum MicrocontrollerTimerInterruptSourcesListEnum {
    TOV0 = "TOV0",
    OCF0A = "OCF0A",
    OCF0B = "OCF0B"
}
export class MicrocontrollerPwm {

}

export class MicrocontrollerWdg {

}


export enum MicrocontrollerTimerFeaturesNameEnum {
    OCU = "OCU",
    CTC = "CTC",
    PWM = "PWM",
    WGM = "WGM"
}

export enum MicrocontrollerTimerFeaturesDescriptionEnum {
    OCU = "Output Compare Unit",
    CTC = "Clear Timer on Compare Match (Auto Reload)",
    PWM = "Pulse Width Modulation",
    WGM = "Waveform Generation Mode"
}

export enum MicrocontrollerTimerNamesEnum {
    Timer0 = "Timer0",
    Timer1 = "Timer1",
    Timer2 = "Timer2",
}

export enum MicrocontrollerTimerModeNamesEnum {

}

/**
 * ADCs
 */
export interface MicrocontrollerAdc {
    microcontrollerAdcName: MicrocontrollerAdcNames;
    microcontrollerAdcResolution: ElectronicUnit;
}

export enum MicrocontrollerAdcNames {
    Adc0 = "Adc0",
    Adc1 = "Adc1",
    Adc2 = "Adc2",
    Adc3 = "Adc3",
    Adc4 = "Adc4",
    Adc5 = "Adc5",
    Adc6 = "Adc6",
    Adc7 = "Adc7"
}

/**
 * ADCs
 */
export interface MicrocontrollerAnalogComparator {
    name: MicrocontrollerAnalogComparatorNames;
}

export enum MicrocontrollerAnalogComparatorNames {
    AC0 = "AC0"
}

/**
 * SleepModes
 */
export interface MicrontrollerSleepMode {
    name: MicrontrollerSleepModeNames;
}

export enum MicrontrollerSleepModeNames {
    SleepMode1 = "SleepMode1"
}