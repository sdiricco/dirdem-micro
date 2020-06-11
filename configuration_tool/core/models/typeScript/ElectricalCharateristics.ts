import { Voltage, Frequency, Temperature, Current } from './Utilities/ElectronicUtilities';

export interface ElectricalCharateristics {
    clockFrequencyMaxValue: Frequency;
    clockFrequencyOscillators: ClockFrequencyOscillator [];
    operatingVoltageRange: Voltage [];
    powerConsumption?: PowerConsumption;
}

/**
 * Le sorgenti di clock possono essere espresse o tramite una lista di valori assoluti
 * o tramite un range di valori. Il clock inoltre può essere prodotto interamente da
 * un circuito interno o può essere il risultato di componentistica esterna come 
 * un quarzo o un filtro RC selezionati dall'utente 
 */
export interface ClockFrequencyOscillator {
    clockFrequencyOscillatorValue?: Frequency;
    clockFrequencyOscillatorRange?: Frequency [];
    clockFrequencyOscillatorType?: ClockFrequenciesOscillatorTypeEnum;
    clockFrequencyOscillatorMaterial?: ClockFrequenciesOscillatorMaterialEnum;
    clockFrequencyOscillatorHexValueLow?: string;
    clockFrequencyOscillatorHexValueHigh?: string;
    clockFrequencyOscillatorHexValueExtended?: string;
}

export interface PowerConsumption {
    powerConsumptionReference: PowerConsumptionReference;
    powerConsumptionMode: PowerConsumptionMode;
}

export interface PowerConsumptionMode {
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
