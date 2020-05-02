export interface ElectronicUnit {
    value: number;
    measureUnit: ElectronicUnitMeasures;
}

export interface Voltage {
    value: number;
    measureUnit: VoltageUnitMeasures;
}

export interface Frequency {
    value: number;
    measureUnit: FrequencyUnitMeasures;
}

export interface ElectronicOscillator extends Frequency{
    type: OscillatorType;
    material: OscillatorMaterial;
}



export enum ElectronicUnitMeasures {
    Bit = "Bit",
    Bytes = "Bytes",
    Kilobytes = "Kilobytes",
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes"
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