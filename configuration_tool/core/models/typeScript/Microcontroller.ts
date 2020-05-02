import { ElectronicUnit } from './Utilities/ElectronicUtilities';
import { PeripheralFeatures } from './PeripheralFeatures';
import { CommunicationInterface } from './CommunicationInterfaces';

export class Microcontroller {
    name: string;
    brand: MicroBrand;
    family: MicroFamily;
    dataBus: ElectronicUnit;
    peripheralFeatures: PeripheralFeatures;
    communicationInterfaces: CommunicationInterface [];
}

export enum MicroFamily {
    AVR = "AVR"
}

export enum MicroBrand {
    Atmel = "Atmel"
}

