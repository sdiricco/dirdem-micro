import { AvrMicrocontrollerBase } from '../AvrMicrocontroller';
import { MicroBrandsEnum, MicroFamiliesEnum, MicrocontrollerNamesEnum } from '../Microcontroller';
import { ElectronicUnitMeasuresEnum, FrequenciesMeasureUnitEnum, VoltageUnitMeasuresEnum, TemperatureMeasuresEnum, CurrentsMeasureUnitEnum } from '../Utilities/ElectronicUtilities';
import { MicrocontrollerTimerNamesEnum } from '../PeripheralFeatures';
import { PinLabelsEnum, MicrocontrollerPackageEnum, PinTypesEnum } from '../MicrocontrollerPins';
import { CommunicationInterfaceNamesEnum, CommunicationInterfaceTypesEnum } from '../CommunicationInterfaces';
import { FusesType as FusesTypeEnum, FuseBitLabel as FuseBitLabelEnum } from '../FuseBit';
import { ClockFrequenciesOscillatorTypeEnum, ClockFrequenciesOscillatorMaterialEnum, PowerConsumptionModeNamesEnum } from '../ElectricalCharateristics';
import { MemorySegmentNamesEnum } from '../MemorySegment';

export const ATMEGA328P: AvrMicrocontrollerBase =
{
    name: MicrocontrollerNamesEnum.ATmega328P,
    brand: MicroBrandsEnum.Atmel,
    family: MicroFamiliesEnum.AVR,
    datasheetUrl: "http://ww1.microchip.com/downloads/en/DeviceDoc/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002061A.pdf",
    dataBus:
    {
        value: 8,
        measureUnit: ElectronicUnitMeasuresEnum.Bit
    },
    memorySegments:
    [
        {
            memorySegmentName: MemorySegmentNamesEnum.Flash,
            memorySegmentValue:
            {
                value: 32,
                measureUnit: ElectronicUnitMeasuresEnum.KBytes
            }
        },
        {
            memorySegmentName: MemorySegmentNamesEnum.EEPROM,
            memorySegmentValue:
            {
                value: 1,
                measureUnit: ElectronicUnitMeasuresEnum.KBytes,
            }
        },
        {
            memorySegmentName: MemorySegmentNamesEnum.SRAM,
            memorySegmentValue:
            {
                value: 2,
                measureUnit: ElectronicUnitMeasuresEnum.KBytes
            }
        }
    ],
    electricalCharateristics:
    {
        clockFrequencyMaxValue: 
        {
            frequencyValue: 20,
            frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
        },
        clockFrequencyOscillator:
        [
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 1,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 2,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 4,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 8,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorRange:
                [
                    {
                        frequencyValue: 0.4,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                    {
                        frequencyValue: 0.9,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                ],
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.Ceramic
            },
            {
                clockFrequencyOscillatorRange:
                [
                    {
                        frequencyValue: 0.9,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                    {
                        frequencyValue: 16,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                ],
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.Crystal
            },
            {
                clockFrequencyOscillatorRange:
                [
                    {
                        frequencyValue: 0.9,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                    {
                        frequencyValue: 12,
                        frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                    },
                ],
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            },
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 32.768,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.KHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.Crystal
            },
            {
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.External,
            },
        ],
        operatingVoltageRange:
        [
            {
                value: 1.8,
                measureUnit: VoltageUnitMeasuresEnum.V
            },
            {
                value: 5.5,
                measureUnit: VoltageUnitMeasuresEnum.V
            }
        ],
        powerConsumption:
        {
            powerConsumptionReference:
            {
                powerConsumptionReferenceFrequency:
                {
                    frequencyValue: 1,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                powerConsumptionReferenceVoltage:
                {
                    value: 5,
                    measureUnit: VoltageUnitMeasuresEnum.V
                },
                powerConsumptionReferenceTemperature:
                {
                    value: 25,
                    measureUnit: TemperatureMeasuresEnum.Celsius
                }
            },
            powerConsumptionMode:
            {
                powerConsumptionModeName: PowerConsumptionModeNamesEnum.Active,
                powerConsumptionModeCurrent:
                {
                    currentValue: 1,
                    currentMeasureUnit: CurrentsMeasureUnitEnum.mA
                }
            }
        }
    },
    microcontrollerPinConfigurations:
    [
        {
            microcontrollerPackage:  MicrocontrollerPackageEnum.PDIP,
            defaultPinCount: 28,
            pinoutImagesSrc:
            [
                "assets/images/ATmega328P/ATmega328P_28DIP.png",
            ],
            pins:
            [
                {
                    number: 1,
                    pinLabels:
                    [
                        PinLabelsEnum.PB0,
                        PinLabelsEnum.T0,
                        PinLabelsEnum.XCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 2,
                    pinLabels:
                    [
                        PinLabelsEnum.PB1,
                        PinLabelsEnum.T1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 3,
                    pinLabels:
                    [
                        PinLabelsEnum.PB2,
                        PinLabelsEnum.INT2,
                        PinLabelsEnum.AIN0
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 4,
                    pinLabels:
                    [
                        PinLabelsEnum.PB3,
                        PinLabelsEnum.OC0,
                        PinLabelsEnum.AIN1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 5,
                    pinLabels:
                    [
                        PinLabelsEnum.PB4,
                        PinLabelsEnum.SS,
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 6,
                    pinLabels:
                    [
                        PinLabelsEnum.PB5,
                        PinLabelsEnum.MOSI,
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 7,
                    pinLabels:
                    [
                        PinLabelsEnum.PB6,
                        PinLabelsEnum.MISO,
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 8,
                    pinLabels:
                    [
                        PinLabelsEnum.PB7,
                        PinLabelsEnum.SCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 9,
                    pinLabels:
                    [
                        PinLabelsEnum.RESET
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 10,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 11,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 12,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL2
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 13,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL1
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 14,
                    pinLabels:
                    [
                        PinLabelsEnum.PD0,
                        PinLabelsEnum.RXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 15,
                    pinLabels:
                    [
                        PinLabelsEnum.PD1,
                        PinLabelsEnum.TXD
                    ],
                    pinType: PinTypesEnum.IO

                },
                {
                    number: 16,
                    pinLabels:
                    [
                        PinLabelsEnum.PD2,
                        PinLabelsEnum.INT0
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 17,
                    pinLabels:
                    [
                        PinLabelsEnum.PD3,
                        PinLabelsEnum.INT1,
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 18,
                    pinLabels:
                    [
                        PinLabelsEnum.PD4,
                        PinLabelsEnum.OC1B
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 19,
                    pinLabels:
                    [
                        PinLabelsEnum.PD5,
                        PinLabelsEnum.OC1A
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 20,
                    pinLabels:
                    [
                        PinLabelsEnum.PD6,
                        PinLabelsEnum.ICP1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 21,
                    pinLabels:
                    [
                        PinLabelsEnum.PD7,
                        PinLabelsEnum.OC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 22,
                    pinLabels:
                    [
                        PinLabelsEnum.PC0,
                        PinLabelsEnum.SCL
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 23,
                    pinLabels:
                    [
                        PinLabelsEnum.PC1,
                        PinLabelsEnum.SDA
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 24,
                    pinLabels:
                    [
                        PinLabelsEnum.PC2,
                        PinLabelsEnum.TCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 25,
                    pinLabels:
                    [
                        PinLabelsEnum.PC3,
                        PinLabelsEnum.TMS
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 26,
                    pinLabels:
                    [
                        PinLabelsEnum.PC4,
                        PinLabelsEnum.TDO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 27,
                    pinLabels:
                    [
                        PinLabelsEnum.PC5,
                        PinLabelsEnum.TDI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 28,
                    pinLabels:
                    [
                        PinLabelsEnum.PC6,
                        PinLabelsEnum.TOSC1
                    ],
                    pinType: PinTypesEnum.IO
                }
            ]
        },
        {
            microcontrollerPackage:  MicrocontrollerPackageEnum.MLF,
            defaultPinCount:28,
            pinoutImagesSrc:
            [
                "assets/images/ATmega328P/ATmega328P_28MLF.png",
            ],
            pins:
            [
                {
                    number: 1,
                    pinLabels:
                    [
                        PinLabelsEnum.PB5,
                        PinLabelsEnum.MOSI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 2,
                    pinLabels:
                    [
                        PinLabelsEnum.PB6,
                        PinLabelsEnum.MISO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 3,
                    pinLabels:
                    [
                        PinLabelsEnum.PB7,
                        PinLabelsEnum.SCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 4,
                    pinLabels:
                    [
                        PinLabelsEnum.RESET
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 5,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 6,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 7,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL2
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 8,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL1
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 9,
                    pinLabels:
                    [
                        PinLabelsEnum.PD0,
                        PinLabelsEnum.RXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 10,
                    pinLabels:
                    [
                        PinLabelsEnum.PD1,
                        PinLabelsEnum.TXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 11,
                    pinLabels:
                    [
                        PinLabelsEnum.PD2,
                        PinLabelsEnum.INT0
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 12,
                    pinLabels:
                    [
                        PinLabelsEnum.PD3,
                        PinLabelsEnum.INT1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 13,
                    pinLabels:
                    [
                        PinLabelsEnum.PD4,
                        PinLabelsEnum.OC1B
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 14,
                    pinLabels:
                    [
                        PinLabelsEnum.PD5,
                        PinLabelsEnum.OC1A
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 15,
                    pinLabels:
                    [
                        PinLabelsEnum.PD6,
                        PinLabelsEnum.ICP1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 16,
                    pinLabels:
                    [
                        PinLabelsEnum.PD7,
                        PinLabelsEnum.OC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 17,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 18,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 19,
                    pinLabels:
                    [
                        PinLabelsEnum.PC0,
                        PinLabelsEnum.SCL
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 20,
                    pinLabels:
                    [
                        PinLabelsEnum.PC1,
                        PinLabelsEnum.SDA
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 21,
                    pinLabels:
                    [
                        PinLabelsEnum.PC2,
                        PinLabelsEnum.TCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 22,
                    pinLabels:
                    [
                        PinLabelsEnum.PC3,
                        PinLabelsEnum.TMS
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 23,
                    pinLabels:
                    [
                        PinLabelsEnum.PC4,
                        PinLabelsEnum.TDO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 24,
                    pinLabels:
                    [
                        PinLabelsEnum.PC5,
                        PinLabelsEnum.TDI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 25,
                    pinLabels:
                    [
                        PinLabelsEnum.PC6,
                        PinLabelsEnum.TOSC1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 26,
                    pinLabels:
                    [
                        PinLabelsEnum.PC7,
                        PinLabelsEnum.TOSC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 27,
                    pinLabels:
                    [
                        PinLabelsEnum.AVCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 28,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                }
            ]
        },
        {
            microcontrollerPackage:  MicrocontrollerPackageEnum.MLF,
            defaultPinCount:32,
            pinoutImagesSrc:
            [
                "assets/images/ATmega328P/ATmega328P_28MLF.png",
            ],
            pins:
            [
                {
                    number: 1,
                    pinLabels:
                    [
                        PinLabelsEnum.PB5,
                        PinLabelsEnum.MOSI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 2,
                    pinLabels:
                    [
                        PinLabelsEnum.PB6,
                        PinLabelsEnum.MISO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 3,
                    pinLabels:
                    [
                        PinLabelsEnum.PB7,
                        PinLabelsEnum.SCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 4,
                    pinLabels:
                    [
                        PinLabelsEnum.RESET
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 5,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 6,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 7,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL2
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 8,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL1
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 9,
                    pinLabels:
                    [
                        PinLabelsEnum.PD0,
                        PinLabelsEnum.RXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 10,
                    pinLabels:
                    [
                        PinLabelsEnum.PD1,
                        PinLabelsEnum.TXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 11,
                    pinLabels:
                    [
                        PinLabelsEnum.PD2,
                        PinLabelsEnum.INT0
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 12,
                    pinLabels:
                    [
                        PinLabelsEnum.PD3,
                        PinLabelsEnum.INT1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 13,
                    pinLabels:
                    [
                        PinLabelsEnum.PD4,
                        PinLabelsEnum.OC1B
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 14,
                    pinLabels:
                    [
                        PinLabelsEnum.PD5,
                        PinLabelsEnum.OC1A
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 15,
                    pinLabels:
                    [
                        PinLabelsEnum.PD6,
                        PinLabelsEnum.ICP1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 16,
                    pinLabels:
                    [
                        PinLabelsEnum.PD7,
                        PinLabelsEnum.OC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 17,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 18,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 19,
                    pinLabels:
                    [
                        PinLabelsEnum.PC0,
                        PinLabelsEnum.SCL
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 20,
                    pinLabels:
                    [
                        PinLabelsEnum.PC1,
                        PinLabelsEnum.SDA
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 21,
                    pinLabels:
                    [
                        PinLabelsEnum.PC2,
                        PinLabelsEnum.TCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 22,
                    pinLabels:
                    [
                        PinLabelsEnum.PC3,
                        PinLabelsEnum.TMS
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 23,
                    pinLabels:
                    [
                        PinLabelsEnum.PC4,
                        PinLabelsEnum.TDO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 24,
                    pinLabels:
                    [
                        PinLabelsEnum.PC5,
                        PinLabelsEnum.TDI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 25,
                    pinLabels:
                    [
                        PinLabelsEnum.PC6,
                        PinLabelsEnum.TOSC1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 26,
                    pinLabels:
                    [
                        PinLabelsEnum.PC7,
                        PinLabelsEnum.TOSC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 27,
                    pinLabels:
                    [
                        PinLabelsEnum.AVCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 28,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 29,
                    pinLabels:
                    [
                        PinLabelsEnum.PC6,
                        PinLabelsEnum.TOSC1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 30,
                    pinLabels:
                    [
                        PinLabelsEnum.PC7,
                        PinLabelsEnum.TOSC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 31,
                    pinLabels:
                    [
                        PinLabelsEnum.AVCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 32,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                }
            ]
        },
        
        {
            microcontrollerPackage:  MicrocontrollerPackageEnum.TQFP,
            defaultPinCount: 32,
            pinoutImagesSrc:
            [
                "assets/images/ATmega328P/ATmega328P_TQFP32.png",
            ],
            pins:
            [
                {
                    number: 1,
                    pinLabels:
                    [
                        PinLabelsEnum.PB5,
                        PinLabelsEnum.MOSI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 2,
                    pinLabels:
                    [
                        PinLabelsEnum.PB6,
                        PinLabelsEnum.MISO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 3,
                    pinLabels:
                    [
                        PinLabelsEnum.PB7,
                        PinLabelsEnum.SCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 4,
                    pinLabels:
                    [
                        PinLabelsEnum.RESET
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 5,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 6,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 7,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL2
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 8,
                    pinLabels:
                    [
                        PinLabelsEnum.XTAL1
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 9,
                    pinLabels:
                    [
                        PinLabelsEnum.PD0,
                        PinLabelsEnum.RXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 10,
                    pinLabels:
                    [
                        PinLabelsEnum.PD1,
                        PinLabelsEnum.TXD
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 11,
                    pinLabels:
                    [
                        PinLabelsEnum.PD2,
                        PinLabelsEnum.INT0
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 12,
                    pinLabels:
                    [
                        PinLabelsEnum.PD3,
                        PinLabelsEnum.INT1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 13,
                    pinLabels:
                    [
                        PinLabelsEnum.PD4,
                        PinLabelsEnum.OC1B
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 14,
                    pinLabels:
                    [
                        PinLabelsEnum.PD5,
                        PinLabelsEnum.OC1A
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 15,
                    pinLabels:
                    [
                        PinLabelsEnum.PD6,
                        PinLabelsEnum.ICP1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 16,
                    pinLabels:
                    [
                        PinLabelsEnum.PD7,
                        PinLabelsEnum.OC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 17,
                    pinLabels:
                    [
                        PinLabelsEnum.VCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 18,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 19,
                    pinLabels:
                    [
                        PinLabelsEnum.PC0,
                        PinLabelsEnum.SCL
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 20,
                    pinLabels:
                    [
                        PinLabelsEnum.PC1,
                        PinLabelsEnum.SDA
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 21,
                    pinLabels:
                    [
                        PinLabelsEnum.PC2,
                        PinLabelsEnum.TCK
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 22,
                    pinLabels:
                    [
                        PinLabelsEnum.PC3,
                        PinLabelsEnum.TMS
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 23,
                    pinLabels:
                    [
                        PinLabelsEnum.PC4,
                        PinLabelsEnum.TDO
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 24,
                    pinLabels:
                    [
                        PinLabelsEnum.PC5,
                        PinLabelsEnum.TDI
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 25,
                    pinLabels:
                    [
                        PinLabelsEnum.PC6,
                        PinLabelsEnum.TOSC1
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 26,
                    pinLabels:
                    [
                        PinLabelsEnum.PC7,
                        PinLabelsEnum.TOSC2
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 27,
                    pinLabels:
                    [
                        PinLabelsEnum.AVCC
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 28,
                    pinLabels:
                    [
                        PinLabelsEnum.GND
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 29,
                    pinLabels:
                    [
                        PinLabelsEnum.AREF
                    ],
                    pinType: PinTypesEnum.I
                },
                {
                    number: 30,
                    pinLabels:
                    [
                        PinLabelsEnum.PA7,
                        PinLabelsEnum.ADC7
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 31,
                    pinLabels:
                    [
                        PinLabelsEnum.PA6,
                        PinLabelsEnum.ADC6
                    ],
                    pinType: PinTypesEnum.IO
                },
                {
                    number: 32,
                    pinLabels:
                    [
                        PinLabelsEnum.PA5,
                        PinLabelsEnum.ADC5
                    ],
                    pinType: PinTypesEnum.IO
                }
            ]
        }
    ],
    peripheralFeatures:
    {
        microcontrollerTimers:
        [
            {
                microcontrollerTimerName: MicrocontrollerTimerNamesEnum.Timer0,
                microcontrollerWidthCounter:
                {
                    value: 8,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                },
                microcontrollerTimerPrescaler:
                {
                    microcontrollerTimerPrescalerEnable: true
                },
                microcontrollerTimerInterruptSources:
                {
                    microcontrollerTimerInterruptSourceEnable: true
                }
            },
            {
                microcontrollerTimerName: MicrocontrollerTimerNamesEnum.Timer1,
                microcontrollerWidthCounter:
                {
                    value: 16,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                },
                microcontrollerTimerPrescaler:
                {
                    microcontrollerTimerPrescalerEnable: true
                },
                microcontrollerTimerInterruptSources:
                {
                    microcontrollerTimerInterruptSourceEnable: true
                }
            },
            {
                microcontrollerTimerName: MicrocontrollerTimerNamesEnum.Timer2,
                microcontrollerWidthCounter:
                {
                    value: 8,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                },
                microcontrollerTimerPrescaler:
                {
                    microcontrollerTimerPrescalerEnable: true
                },
                microcontrollerTimerInterruptSources:
                {
                    microcontrollerTimerInterruptSourceEnable: true
                }
            },

        ]
    },
    communicationInterfaces:
    [
        {
            name: CommunicationInterfaceNamesEnum.JTAG,
            type: CommunicationInterfaceTypesEnum.Serial
        },
        {
            name: CommunicationInterfaceNamesEnum.ISP,
            type: CommunicationInterfaceTypesEnum.Serial
        },
        {
            name: CommunicationInterfaceNamesEnum.TWI,
            type: CommunicationInterfaceTypesEnum.Serial
        },
        {
            name: CommunicationInterfaceNamesEnum.USART,
            type: CommunicationInterfaceTypesEnum.Serial
        },
    ],
    /**
    Avr Properties
    */
    avrLabel: "m32",
    fuses:
    [
        {
            hexValue: '64',
            type: FusesTypeEnum.LOW,
            bits:
            [
                { label: FuseBitLabelEnum.BODLEVEL, value: false },
                { label: FuseBitLabelEnum.BODEN, value: true },
                { label: FuseBitLabelEnum.SUT1, value: true },
                { label: FuseBitLabelEnum.SUT0, value: false },
                { label: FuseBitLabelEnum.CKSEL3, value: false },
                { label: FuseBitLabelEnum.CKSEL2, value: false },
                { label: FuseBitLabelEnum.CKSEL1, value: true },
                { label: FuseBitLabelEnum.CKSEL0, value: false }
            ]
        },
        {
            hexValue: 'DE',
            type: FusesTypeEnum.HIGH,
            bits:
            [
                { label: FuseBitLabelEnum.OCDEN, value: true },
                { label: FuseBitLabelEnum.JTAGEN, value: true },
                { label: FuseBitLabelEnum.SPIEN, value: false },
                { label: FuseBitLabelEnum.CKOPT, value: true },
                { label: FuseBitLabelEnum.EESAVE, value: true },
                { label: FuseBitLabelEnum.BOOTSZ1, value: false },
                { label: FuseBitLabelEnum.BOOTSZ0, value: false },
                { label: FuseBitLabelEnum.BOOTRST, value: true }
            ]
        }
    ]
}
