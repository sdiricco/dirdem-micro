/**************************************** INCLUDE FILES ****************************************/
//#include "Arduino.h"
/***********************************************************************************************/

typedef enum {TMR0, TMR1, TMR2}type_GptHwChannel;
typedef enum {SYS_CLK, EXT_CLK_FE = 6, EXT_CLK_RE = 7}type_GptClockReference;

typedef struct {
    uint8_t GptChannelID;
    type_GptHwChannel GptHwChannel;
    type_GptClockReference GptClockReference;
    uint32_t GptClockPrescaler;
    uint32_t GptChannelTickValueMax;
    char GptNotification[30];
}ConfigPtr;

extern ConfigPtr Cfg[];

#define CONFIGURED_CHANNELS 2

#define MODULE_TMR1
#define MODULE_TMR2

extern void GptNotification01();
extern void GptNotification02();
