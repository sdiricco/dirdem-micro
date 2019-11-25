/*
File: Gpt_Cfg.h
Da implementare:
- Definire un array di strutture in modo che si riempia automaticamente dal tool di configurazione.

*/


typedef enum {TMR0, TMR1, TMR2}type_GptHwChannel;
typedef enum {SYS_CLK, EXT_CLK_FE = 6, EXT_CLK_RE = 7}type_GptClockReference;

typedef struct {
    uint8_t GptChannelID;
    type_GptHwChannel GptHwChannel;
    type_GptClockReference GptClockReference;
    uint32_t GptClockPrescaler;
    uint32_t GptChannelTickValueMax;
    char GptNotification[30];
	/*void (*userFunc)(void);*/
}ConfigPtr;

#define CONFIGURED_CHANNELS 1

extern ConfigPtr Cfg[CONFIGURED_CHANNELS];
