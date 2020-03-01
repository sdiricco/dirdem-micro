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
#ifndef __AVR_ATmega32__
#   define __AVR_ATmega32__
#endif

#include <avr/io.h>
#include <util/delay.h>

int main(void)
{
    DDRB = 0xFF;
    while(1)
    {
        _delay_ms(1000);
        PORTB = 0;
        _delay_ms(1000);
        PORTB = 255;
    }
    return 0;
}