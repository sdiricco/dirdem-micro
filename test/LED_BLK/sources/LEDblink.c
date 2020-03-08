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

#ifndef F_CPU
#   define F_CPU 8000000UL
#endif

#include <avr/io.h>
#include <util/delay.h>
#include <avr/interrupt.h>
#include <include/LEDblink.h>

int main(void)
{

    DDRB = 0xFF;
    PORTB = 0x00;
    //Configurazione TIMER 2
    Init_Timer2();
    
    sei();

    while(1)
    {

    }
    return 0;
}

ISR (TIMER2_OVF_vect) {
	PORTB += 1;
}