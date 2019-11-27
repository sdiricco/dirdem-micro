/**************************************** INCLUDE FILES ****************************************/
#include "Arduino.h"
//#include <avr/io.h>
#include <avr/interrupt.h>
#include "Gpt_Cfg_Extern_Generated.h"
/***********************************************************************************************/

#ifdef MODULE_TMR0
ISR(TIMER0_COMPA_vect)
{
	ISR_TMR0();
}
#endif

#ifdef MODULE_TMR1
ISR(TIMER1_COMPA_vect)
{
	ISR_TMR1();
}
#endif

#ifdef MODULE_TMR2
ISR(TIMER2_COMPA_vect)
{
	ISR_TMR2();
}
#endif
