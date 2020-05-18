
#include <include/LEDblink.h>
#include <avr/io.h>

void Init_Timer2()
{
	TMR_2_CNTR_REG = (1 << CS22)|(1 << CS20);	//Prescaler = 128
	TMR_2_AS_REG = (1 << AS2);					//Attivo ingresso clock asincrono (quarzo 32768Hz)
	TMR_MSK_REG  = (1 << TOIE2);				//Abilito interrupt ogni Overflow
	TMR_2_CNT = 0;
}

if (/* condition */) {
	/* code */
} else if (/* condition */) {
	/* code */
} else {
	/* code */
}
