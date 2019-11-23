/*
File: Gpt_LLD_TMR0.h

Api:
void Gpt_Init_LLD_TMR0(void);
void Gpt_DeInit_LLD_TMR0(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR0(void);
void Gpt_StartTimer_LLD_TMR0(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR0();
void Gpt_EnableNotification_LLD_TMR0(void);
void Gpt_DisableNotification_LLD_TMR0(void);


         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |

TCCR0A – Timer/Counter Control Register A
TCCR0A = |COM0A1 |COM0A0 |COM0B1 |COM0B0 |   -   |   -   |WGM01  |WGM00  |

TCCR0B – Timer/Counter Control Register B
TCCR0B = |FOC0A  |FOC0B  |   -   |   -   |WGM02  |CS02   |CS01   |CS00   |

TIMSK0 – Timer/Counter Interrupt Mask Register
TIMSK0 = |   -   |   -   |   -   |   -   |   -   |OCIE0B |OCIE0A |TOIE0  |

TIFR0 – Timer/Counter 0 Interrupt Flag Register
TIFR0 =  |   -   |   -   |   -   |   -   |   -   |OCF0B  |OCF0A  |TOV0   |

TCNT0 – Timer/Counter Register
OCR0A – Output Compare Register A
OCR0B – Output Compare Register B

Details:

Compare Output Mode (COM):
         |COM0A1 |COM0A0 | Description
         |   0   |   0   | Normal port operation, OC0A disconnected
         |   X   |   X   | Other..

         |COM0B1 |COM0B0 | Description
         |   0   |   0   | Normal port operation, OC0B disconnected
         |   X   |   X   | Other..

Waveform Generation Mode (WGM):
         |WGM02  |WGM01  |WGM00  | Timer/Counter Mode of operation | TOP
         |   0   |   0   |   0   | Normal                          | 0xFF
         |   0   |   1   |   0   | CTC                             | OCRA

TCCR0B, Bit 7 – FOC0A: Force Output Compare A
When writing a logical one to the FOC0A bit, an immediate Compare Match is forced on the Waveform Generation unit.

TCCR0B, Bit 6 – FOC0B: Force Output Compare B
When writing a logical one to the FOC0B bit, an immediate Compare Match is forced on the Waveform Generation unit

Clock Select Bit Description:
         |CS02   |CS01   |CS00   | Description
         |   0   |   0   |   0   | No clock source (Timer/Counter stopped)
         |   0   |   0   |   1   | clk(No prescaling)
         |   0   |   1   |   0   | clk/8 (From prescaler)
         |   0   |   1   |   1   | clk/64 (From prescaler)
         |   1   |   0   |   0   | clk/256 (From prescaler)
         |   1   |   0   |   1   | clk/1024 (From prescaler)
         |   1   |   1   |   0   | External clock source on T0 pin. Clock on falling edge.
         |   1   |   1   |   1   | External clock source on T0 pin. Clock on rising edge.

TIMSK0, Bit 2 – OCIE0B: Timer/Counter Output Compare Match B Interrupt Enable
TIMSK0, Bit 1 – OCIE0A: Timer/Counter0 Output Compare Match A Interrupt Enable
TIMSK0, Bit 0 – TOIE0: Timer/Counter0 Overflow Interrupt Enable

TIFR0, Bit 2 – OCF0B: Timer/Counter 0 Output Compare B Match Flag
The OCF0B bit is set when a Compare Match occurs between the Timer/Counter and the data in
OCR0B – Output Compare Register0 B. OCF0B is cleared by hardware when executing the corresponding
interrupt handling vector. Alternatively, OCF0B is cleared by writing a logic one to
the flag. When the I-bit in SREG, OCIE0B (Timer/Counter Compare B Match Interrupt Enable),
and OCF0B are set, the Timer/Counter Compare Match Interrupt is executed.

TIFR0, Bit 1 – OCF0A: Timer/Counter 0 Output Compare A Match Flag
The OCF0A bit is set when a Compare Match occurs between the Timer/Counter0 and the data
in OCR0A – Output Compare Register0. OCF0A is cleared by hardware when executing the corresponding
interrupt handling vector. Alternatively, OCF0A is cleared by writing a logic one to
the flag. When the I-bit in SREG, OCIE0A (Timer/Counter0 Compare Match Interrupt Enable),
and OCF0A are set, the Timer/Counter0 Compare Match Interrupt is executed.

TIFR0, Bit 0 – TOV0: Timer/Counter0 Overflow Flag
The bit TOV0 is set when an overflow occurs in Timer/Counter0. TOV0 is cleared by hardware
when executing the corresponding interrupt handling vector. Alternatively, TOV0 is cleared by
writing a logic one to the flag. When the SREG I-bit, TOIE0 (Timer/Counter0 Overflow Interrupt
Enable), and TOV0 are set, the Timer/Counter0 Overflow interrupt is executed.

*/

/**************************************** INCLUDE FILES ****************************************/
//#include <avr/io.h>
#include "Arduino.h"
#include "Gpt_LLD_TMR0.h"
#include "Gpt_Cfg.h"
/***********************************************************************************************/

#define SET_BIT_REGISTER(Reg_type, REGISTER, mask) { REGISTER |= (Reg_type)mask; }
#define CLEAR_BIT_REGISTER(Reg_type, REGISTER, mask) { REGISTER &= (Reg_type)(~((0xFF)&(mask))); }

void Gpt_Init_LLD_TMR0()
{
    /*Timer stopped, CTC mode*/
    TCCR0A = (0<<COM0A1)|(0<<COM0A0)|(0<<COM0B1)|(0<<COM0B0)|(1<<WGM01)|(0<<WGM00);
    /*Timer stopped, No Force Output Compare*/
    TCCR0B = (0<<FOC0A)|(0<<FOC0B)|(0<<WGM02)|(0<<CS02)|(0<<CS01)|(0<<CS00);
    /*Disable all interrupt*/
    TIMSK0 = (0<<OCIE0B)|(0<<OCIE0A)|(0<<TOIE0);
    /*Clear all interrupt flag*/
    TIFR0 = (1<<OCF0B)|(1<<OCF0A)|(1<<TOV0);
    /*Clear Timer/Counter register*/
    TCNT0 = 0;
}

void Gpt_DeInit_LLD_TMR0(void)
{
    /*Reset register*/
    TCCR0A = (0<<COM0A1)|(0<<COM0A0)|(0<<COM0B1)|(0<<COM0B0)|(0<<WGM01)|(0<<WGM00);
    /*Reset register*/
    TCCR0B = (0<<FOC0A)|(0<<FOC0B)|(0<<WGM02)|(0<<CS02)|(0<<CS01)|(0<<CS00);
    /*Disable all interrupt*/
    TIMSK0 = (0<<OCIE0B)|(0<<OCIE0A)|(0<<TOIE0);
    /*Clear all interrupt flag*/
    TIFR0 = (1<<OCF0B)|(1<<OCF0A)|(1<<TOV0);	
}

uint32_t Gpt_GetTimeElapsed_LLD_TMR0(void)
{
	/*Read Timer/counter register*/
	return (uint32_t)TCNT0;
}

void Gpt_StartTimer_LLD_TMR0(uint32_t value, uint8_t clockValue)
{
    /*Set compare match register*/
	OCR0A = (uint8_t)value;
	/*Set clock source by setting CS02 CS01 CS00*/
    SET_BIT_REGISTER (uint8_t, TCCR0B, 0b00000111&clockValue); 
}

void Gpt_StopTimer_LLD_TMR0()
{
	/*No clock Source. CS02 = 0, CS01 = 0, CS00 = 0*/
    CLEAR_BIT_REGISTER (uint8_t, TCCR0B, (1<<CS02)|(1<<CS01)|(1<<CS00))
}

void Gpt_EnableNotification_LLD_TMR0()
{
	/*Clear interrupt compare match flag A. Set OCF0A*/
    SET_BIT_REGISTER (uint8_t, TIFR0, (1<<OCF0A));
	/*Enable interrupt compare match A*/
	SET_BIT_REGISTER (uint8_t, TIMSK0, (1<<OCIE0A));
}

void Gpt_DisableNotification_LLD_TMR0(void)
{
	/*Clear interrupt compare match flag A*/
	SET_BIT_REGISTER (uint8_t, TIFR0, (1<<OCF0A));
	/*Disable interrupt compare match A. OCIE0A = 0*/
	CLEAR_BIT_REGISTER (uint8_t, TIMSK0, (1<<OCIE0A));
}

uint8_t Gpt_CalculateClockSelect_TMR0(uint8_t clockSource, uint16_t clockPrescaler)
{
    if (clockSource == SYS_CLK)
    {
        switch (clockPrescaler)
        {
            case 0:
			{
                return TMR0_SYS_CLK_P0;
				break;
			}
			case 8:
			{
                return TMR0_SYS_CLK_P8;
				break;
			}
			case 64:
			{	
                return TMR0_SYS_CLK_P64;
				break;
			}
            case 256:
			{
                return TMR0_SYS_CLK_P256;
				break;
			}
            case 1024:
			{
                return TMR0_SYS_CLK_P1024;
				break;
			}
        }
    }
    else
	{
        return clockSource;
	}
	return 0;
}