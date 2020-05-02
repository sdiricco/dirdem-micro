import { ElectronicUnit } from './Utilities/ElectronicUtilities';

export class PeripheralFeatures {
    timers?: MicrocontrollerTimer [];
    adcs?: MicrocontrollerAdc [];
    analogComparators?: MicrocontrollerAnalogComparator [];
    sleepModes?: MicrontrollerSleepMode [];
}

/**
 * Timers
 */
export class MicrocontrollerTimer {
    name: MicrocontrollerTimerNames;
    widthCounter?: number;
    mode?: TimerModes;
}

export enum MicrocontrollerTimerNames {
    Timer0 = "Timer0",
    Timer1 = "Timer1",
    Timer2 = "Timer2",
    Watchdog = "Watchdog"
}

export enum TimerModes {
    RTC = "RTC",
    PWM = "PWM",
    CaptureInput = "CaptureInput"
}

/**
 * ADCs
 */
export class MicrocontrollerAdc {
    name: MicrocontrollerAdcNames;
    resolution: ElectronicUnit;
}

export enum MicrocontrollerAdcNames {
    Adc0 = "Adc0"
}

/**
 * ADCs
 */
export class MicrocontrollerAnalogComparator {
    name: MicrocontrollerAnalogComparatorNames;
}

export enum MicrocontrollerAnalogComparatorNames {
    AC0 = "AC0"
}

/**
 * SleepModes
 */
export class MicrontrollerSleepMode {
    name: MicrontrollerSleepModeNames;
}

export enum MicrontrollerSleepModeNames {
    SleepMode1 = "SleepMode1"
}