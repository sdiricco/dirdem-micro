/**************************************** INCLUDE FILES ****************************************/
//#include <avr/io.h>
//#include <avr/interrupt.h>
#include "Arduino.h"
#include "Gpt_Irq.h"
/***********************************************************************************************/

/*
ISR(TIMER0_COMPA_vect)
{
	GptNotification01();
}
*/

ISR(TIMER1_COMPA_vect)
{
	GptNotification02();
}

/*
ISR(TIMER2_COMPA_vect)
{
	GptNotification03();
}
*/
