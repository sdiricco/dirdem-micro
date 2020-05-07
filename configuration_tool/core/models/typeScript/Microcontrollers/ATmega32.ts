import { AvrMicrocontroller } from '../AvrMicrocontroller';
import { MicroBrand, MicroFamily } from '../Microcontroller';
import { ElectronicUnitMeasuresEnum, FrequenciesMeasureUnitEnum, VoltageUnitMeasuresEnum } from '../Utilities/ElectronicUtilities';
import { MicrocontrollerTimerNames } from '../PeripheralFeatures';
import { PinLabelsEnum } from '../MicrocontrollerPins';
import { CommunicationInterfaceNamesEnum, CommunicationInterfaceTypesEnum } from '../CommunicationInterfaces';
import { FusesType as FusesTypeEnum, FuseBitLabel as FuseBitLabelEnum } from '../FuseBit';
import { ClockFrequenciesOscillatorTypeEnum, ClockFrequenciesOscillatorMaterialEnum } from '../ElectricalCharateristics';

export const ATMEGA32: AvrMicrocontroller = 
{
    name: "ATmega32",
    brand: MicroBrand.Atmel,
    family: MicroFamily.AVR,
    datasheetUrl: "http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf",
    imageSrc: "assets/images/ATmega32.png",
    pinoutImageSrc: "assets/images/ATmega32pinout.png",
    dataBus:
    { 
        value: 8,
        measureUnit: ElectronicUnitMeasuresEnum.Bit 
    },
    electricalCharateristics: 
    {
        clockFrequencyOscillator: 
        [
            {
                clockFrequencyOscillatorValue:
                {
                    frequencyValue: 2,
                    frequencyMeasureUnit: FrequenciesMeasureUnitEnum.MHz
                },
                clockFrequencyOscillatorType: ClockFrequenciesOscillatorTypeEnum.Internal,
                clockFrequencyOscillatorMaterial: ClockFrequenciesOscillatorMaterialEnum.RC
            }
        ],
        operatingVoltages: 
        [
            {
               operatingVoltageValue:
               {
                   value: 5,
                   measureUnit: VoltageUnitMeasuresEnum.V
               },
               operatingVoltageRange:
               [
                   {
                       value: 4.5,
                       measureUnit: VoltageUnitMeasuresEnum.V
                   },
                   {
                       value: 5.5,
                       measureUnit: VoltageUnitMeasuresEnum.V
                   }
               ] 
            }
        ]
    },
    microcontrollerPins:
    {
        defaultPinCount: 40,
        pins:
        [
            {
                number: 1,
                pinLabels:
                [
                    PinLabelsEnum.PB0,
                    PinLabelsEnum.T0,
                    PinLabelsEnum.XCK
                ]
            }
        ],
        pinCount: null,
    },
    peripheralFeatures:
    {
        timers:
        [
            {
                name: MicrocontrollerTimerNames.Timer0,
                widthCounter:
                {
                    value: 8,
                    measureUnit: ElectronicUnitMeasuresEnum.Bit
                }

            }
        ]
    },
    communicationInterfaces:
    [
        {
            name: CommunicationInterfaceNamesEnum.JTAG,
            type: CommunicationInterfaceTypesEnum.Serial
        }
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