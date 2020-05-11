import { ElectronicUnit, Voltage, Frequency } from './Utilities/ElectronicUtilities';
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
    name: string;
    brand: MicroBrand;
    family: MicroFamily;
    datasheetUrl: string;
    imagesSrc: string [];
    pinoutImagesSrc: string [];
    dataBus: ElectronicUnit;
    memorySegments: MemorySegment [];
    electricalCharateristics: ElectricalCharateristics;
    microcontrollerPinConfigurations: MicrocontrollerPinConfiguaration [];
    peripheralFeatures: PeripheralFeatures;
    communicationInterfaces: CommunicationInterface [];
}

export enum MicroFamily {
    AVR = "AVR"
}

export enum MicroBrand {
    Atmel = "Atmel"
}


