/*
 * GccApplication1.c
 *
 * Created: 26/10/2019 20:34:06
 * Author : 39347
 */ 

#include <avr/io.h>
#include <avr/interrupt.h>
#include "drv_gpt_4/Gpt.h"

int main(void)
{
	sei();
	/*Set PORTB as output*/
	DDRB = 0xFF;
	/*Clear PORTB*/
	PORTB = 0x00;
	/*Set PORTC as output*/
	DDRC = 0xFF;
	/*Clear PORTC*/
	PORTC = 0x00;
	Gpt_Init();
	Gpt_EnableNotification(0);
	Gpt_EnableNotification(1);
	Gpt_StartTimer(0, 200);
	Gpt_StartTimer(1, 400);
    /* Replace with your application code */
    while (1) 
    {
    }
}
void GptNotification01()
{
	PORTB = PORTB + 1;
}

void GptNotification02()
{
	PORTC = PORTC + 1;
}


