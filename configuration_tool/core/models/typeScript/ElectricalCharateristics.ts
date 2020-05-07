import { Voltage, Frequency, Temperature, Current } from './Utilities/ElectronicUtilities';

export class ElectricalCharateristics {
    clockFrequencyOscillator: ClockFrequencyOscillator [];
    operatingVoltages: OperatingVoltage [];
    powerConsumption?: PowerConsumption;
}


export class ClockFrequencyOscillator {
    clockFrequencyOscillatorValue?: Frequency;
    clockFrequencyOscillatorRange?: Frequency [];
    clockFrequencyOscillatorType?: ClockFrequenciesOscillatorTypeEnum;
    clockFrequencyOscillatorMaterial?: ClockFrequenciesOscillatorMaterialEnum;
}

export class OperatingVoltage {
    operatingVoltageValue: Voltage;
    operatingVoltageRange: Voltage [];
}

export class PowerConsumption {
    powerConsumptionReference: PowerConsumptionReference;
    powerConsumptionMode: PowerConsumptionMode;
}

export class PowerConsumptionMode {
    powerConsumptionModeName: PowerConsumptionModeNamesEnum;
    powerConsumptionModeCurrent: Current;
}

export interface PowerConsumptionReference {
    powerConsumptionReferenceFrequency: Frequency;
    powerConsumptionReferenceVoltage?: Voltage;
    powerConsumptionReferenceTemperature?: Temperature; 
}

export enum PowerConsumptionModeNamesEnum {
    Active = "Active"
}

export enum ClockFrequenciesOscillatorTypeEnum {
    Internal = "Internal",
    External = "External"
}

export enum ClockFrequenciesOscillatorMaterialEnum {
    Quartz = "Quartz",
    RC = "RC",
    Ceramic = "Ceramic"
}
