export class GptDriverConfig {
    gptChannelID: number;
    gptContainerHwChannel: string;
    gptContainerClockReference: string;
    gptClockPrescaler: number;
    gptChannelTickValueMax: number;
    gptNotification: string;
  }

  export class ATmega328Values {
    get gptChannelIdValues() { return [0, 1, 2] };
    get gptContainerHwChannelValues() { return ['TMR0', 'TMR1', 'TMR2'] };
    get gptContainerClockReferenceValues() { return ['SYS_CLK', 'EXT_CLK'] };
    get gptClockPrescalerValues() { return [0, 8, 64, 256, 1024]};
    get gptChannelTickValues() { return [255, 65535] };
  }

