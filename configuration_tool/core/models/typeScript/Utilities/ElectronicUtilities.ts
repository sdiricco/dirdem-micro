export interface ElectronicUnit {
    value: number;
    measureUnit: ElectronicUnitMeasuresEnum;
}

export interface Voltage {
    value: number;
    measureUnit: VoltageUnitMeasuresEnum;
}

export interface Current {
    currentValue: number;
    currentMeasureUnit: CurrentsMeasureUnitEnum;
}

export interface Frequency {
    frequencyValue: number;
    frequencyMeasureUnit: FrequenciesMeasureUnitEnum;
}

export interface Temperature {
    value: number;
    measureUnit: TemperatureMeasuresEnum;
}

export enum ElectronicUnitMeasuresEnum {
    Bit = "Bit",
    Bytes = "Bytes",
    Kilobytes = "Kilobytes",
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes"
}

export enum CurrentsMeasureUnitEnum {
    pA = "pA",
    nA = "nA",
    uA = "uA",
    mA = "mA",
    A = "A"
}

export enum VoltageUnitMeasuresEnum {
    uV = "uV",
    mV = "mV",
    V = "V",
    KV = "KV"
}

export enum FrequenciesMeasureUnitEnum {
    Hz = "Hz",
    KHz = "KHz",
    MHz = "MHz",
    GHz = "GHz"
}

export enum TemperatureMeasuresEnum {
    Celsius = "Celsius",
    Kelvin = "Kelvin"
}