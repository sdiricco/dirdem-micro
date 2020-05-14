import { ElectronicUnit } from './Utilities/ElectronicUtilities';
import { PeripheralFeatures } from './PeripheralFeatures';
import { CommunicationInterface } from './CommunicationInterfaces';
import { ElectricalCharateristics } from './ElectricalCharateristics';
import { MicrocontrollerPins as MicrocontrollerPinConfiguaration } from './MicrocontrollerPins';
import { MemorySegment } from './MemorySegment';

/**
 * MicrocontrollerBase
 * Note:
 * - imageSrc: è un array perchè avrò un'immagine per ogni package
 */
export class MicrocontrollerBase {
    name: MicrocontrollerNamesEnum;
    brand: MicroBrandsEnum;
    family: MicroFamiliesEnum;
    datasheetUrl: string;
    dataBus: ElectronicUnit;
    memorySegments: MemorySegment [];
    electricalCharateristics: ElectricalCharateristics;
    microcontrollerPinConfigurations: MicrocontrollerPinConfiguaration [];
    peripheralFeatures: PeripheralFeatures;
    communicationInterfaces: CommunicationInterface [];
}

export enum MicroFamiliesEnum {
    AVR = "AVR"
}

export enum MicroBrandsEnum {
    Atmel = "Atmel"
}

export enum MicrocontrollerNamesEnum {
    Atmega32 = "Atmega32",
    Atmega328 = "Atmega328"
}


