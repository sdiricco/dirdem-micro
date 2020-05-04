import { ElectronicUnit, Voltage, Frequency } from './Utilities/ElectronicUtilities';
import { PeripheralFeatures } from './PeripheralFeatures';
import { CommunicationInterface } from './CommunicationInterfaces';
import { ElectricalCharateristics } from './ElectricalCharateristics';
import { MicrocontrollerPins } from './MicrocontrollerPins';

export class Microcontroller {
    name: string;
    brand: MicroBrand;
    family: MicroFamily;
    datasheetUrl: string;
    imageSrc: string;
    pinoutImageSrc: string;
    dataBus: ElectronicUnit;
    electricalCharateristics: ElectricalCharateristics;
    microcontrollerPins: MicrocontrollerPins;
    peripheralFeatures: PeripheralFeatures;
    communicationInterfaces: CommunicationInterface [];
}

export enum MicroFamily {
    AVR = "AVR"
}

export enum MicroBrand {
    Atmel = "Atmel"
}


