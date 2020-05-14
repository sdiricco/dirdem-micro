import { ElectronicUnit } from './Utilities/ElectronicUtilities';

export interface PeripheralFeatures {
    timers?: MicrocontrollerTimer [];
    adcs?: MicrocontrollerAdc [];
    analogComparators?: MicrocontrollerAnalogComparator [];
    sleepModes?: MicrontrollerSleepMode [];
}

/**
 * Timers
 */
export interface MicrocontrollerTimer {
    name: MicrocontrollerTimerNames;
    widthCounter?: ElectronicUnit;
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
export interface MicrocontrollerAdc {
    name: MicrocontrollerAdcNames;
    resolution: ElectronicUnit;
}

export enum MicrocontrollerAdcNames {
    Adc0 = "Adc0"
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