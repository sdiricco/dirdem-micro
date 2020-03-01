/*
1 - Open c_cpp_properties.json
        *) Press Ctrl+Shift+P
        *) Select << C/C++: Edit Configurations (JSON) >>
2 - Header Files ATMEL:
        *) Add following path in c_cpp_properties.json, field:"includePath"
        *) C:\Program Files (x86)\Atmel\Studio\7.0\toolchain\avr8\avr8-gnu-toolchain\avr\include
        ..
        ..
        "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${workspaceFolder}/**",
                "C:\\Program Files (x86)\\Atmel\\Studio\\7.0\\toolchain\\avr8\\avr8-gnu-toolchain\\avr\\include"
            ],
        ..
        ..
3 - avr-gcc path: C:\Program Files (x86)\Arduino\hardware\tools\avr\bin
*/

/*
Define witch microcontroller you want to use.
You can find the MACRO in avr/io.h
*/
#ifndef __AVR_ATmega328P__
#   define __AVR_ATmega328P__
#endif

#ifndef F_CPU
#   define F_CPU 8000000UL
#endif

#include <avr/io.h>
#include <util/delay.h>
#include <avr/interrupt.h>

int main(void)
{
    DDRC = 0xFF;
    PORTC = 0x00;

    //Configurazione TIMER 2
	TCCR2 = (1 << CS22)|(1 << CS20);	//Prescaler = 128
	ASSR = (1 << AS2);					//Attivo ingresso clock asincrono (quarzo 32768Hz)
	TIMSK  = (1 << TOIE2);				//Abilito interrupt ogni Overflow
	TCNT2 = 0;

    sei();

    while(1)
    {

    }
    return 0;
}

ISR (TIMER2_OVF_vect){
    static int i=0;
    i++;
    if (i >= 5)
    {
	    PORTC = ~PORTC;
        i = 0;
    }
}