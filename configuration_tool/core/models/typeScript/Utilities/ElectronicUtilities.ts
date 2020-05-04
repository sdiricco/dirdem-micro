export interface ElectronicUnit {
    value: number;
    measureUnit: ElectronicUnitMeasures;
}

export interface Voltage {
    value: number;
    measureUnit: VoltageUnitMeasures;
}

export interface Current {
    value: number;
    measureUnit: CurrentUnitMeasures;
}

export interface Frequency {
    value: number;
    measureUnit: FrequencyUnitMeasures;
}

export interface ElectronicOscillator extends Frequency{
    type: OscillatorType;
    material: OscillatorMaterial;
}

export interface Temperature {
    value: number;
    measureUnit: TemperatureMeasures;
}

export enum ElectronicUnitMeasures {
    Bit = "Bit",
    Bytes = "Bytes",
    Kilobytes = "Kilobytes",
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes"
}

export enum CurrentUnitMeasures {
    pA = "pA",
    nA = "nA",
    uA = "uA",
    mA = "mA",
    A = "A"
}

export enum VoltageUnitMeasures {
    uV = "uV",
    mV = "mV",
    V = "V",
    KV = "KV"
}

export enum FrequencyUnitMeasures {
    Hz = "Hz",
    KHz = "KHz",
    MHz = "MHz",
    GHz = "GHz"
}

export enum OscillatorType {
    Crystal = "Crystal",
    Circuit = "Circuit"
}

export enum OscillatorMaterial {
    Quartz = "Quartz",
    RC = "RC",
    Ceramic = "Ceramic"
}

export enum TemperatureMeasures {
    Celsius = "Celsius",
    Kelvin = "Kelvin"
}