import { Frequency, Voltage, Temperature, ElectronicOscillator } from './Utilities/ElectronicUtilities';

export class ElectricalCharateristics {
    speedGrades: Frequency [];
    operatingVoltages: Voltage [];
    oscillators?: ElectronicOscillator [];
    powerConsumption?: PowerConsumption;
}

export class PowerConsumption {
    consumptionReference: ConsumptionReference;
    mode?: PowerConsumptionModesEnum;
}

export interface ConsumptionReference {
    frequency?: Frequency;
    voltage?: Voltage;
    temperature?: Temperature; 
}

export enum PowerConsumptionModesEnum{
    Active = "Active"
}
