import { ElectronicUnit } from './Utilities/ElectronicUtilities';

export interface MemorySegments {
    flash?: ElectronicUnit;
    eeprom?: ElectronicUnit;
    sram?: ElectronicUnit;
    ram?: ElectronicUnit;
}