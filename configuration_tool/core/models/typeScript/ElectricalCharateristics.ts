import { Voltage, Frequency, Temperature, Current } from './Utilities/ElectronicUtilities';

export class ElectricalCharateristics {
    clockFrequencyOscillator: ClockFrequencyOscillator [];
    operatingVoltages: OperatingVoltage [];
    powerConsumption?: PowerConsumption;
}

/**
 * Le sorgenti di clock possono essere espresse o tramite una lista di valori assoluti
 * o tramite un range di valori. Il clock inoltre può essere prodotto interamente da
 * un circuito interno o può essere il risultato di componentistica esterna come 
 * un quarzo o un filtro RC selezionati dall'utente 
 */
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
    powerConsumptionReferenceFrequency?: Frequency;
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
    Crystal = "Crystal",
    RC = "RC",
    Ceramic = "Ceramic"
}
