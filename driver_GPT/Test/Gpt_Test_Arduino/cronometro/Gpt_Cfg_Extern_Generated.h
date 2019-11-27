/**************************************** INCLUDE FILES ****************************************/
//#include "Arduino.h"
/***********************************************************************************************/
//#include <avr/io.h>
#include "Arduino.h"

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

#define CONFIGURED_CHANNELS 1

#define MODULE_TMR1

#define ISR_TMR0 GptNotification00
#define ISR_TMR1 GptNotification01
#define ISR_TMR2 GptNotification02

#ifdef MODULE_TMR0
extern void ISR_TMR0();
#endif

#ifdef MODULE_TMR1
extern void ISR_TMR1();
#endif

#ifdef MODULE_TMR2
extern void ISR_TMR2();
#endif
