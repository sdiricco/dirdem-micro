/*
File: Gpt_LLD_TMR1.c
Api:
void Gpt_Init_LLD_TMR1(void);
void Gpt_DeInit_LLD_TMR1(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR1(void);
void Gpt_StartTimer_LLD_TMR1(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR1();
void Gpt_EnableNotification_LLD_TMR1(void);
void Gpt_DisableNotification_LLD_TMR1(void);

TCCR1A – Timer/Counter1 Control Register A
         |7      |6      |5      |4      |3      |2      |1      |0      |
TCCR1A = |COM1A1 |COM1A0 |COM1B1 |COM1B0 |   –   |   –   |WGM11  |WGM10  |

|COM1A1/COM1B1 |COM1A0/COM1B0 | Description
|0             |0             | Normal port operation, OC1A/OC1B disconnected.
|0             |1             | Toggle OC1A/OC1B on Compare Match.
|1             |0             | Clear OC1A/OC1B on Compare Match (Set output to low level).
|1             |1             | Set OC1A/OC1B on Compare

|Mode|WGM13|WGM12(CTC1)|WGM11(PWM11)|WGM10PWM10)|Timer/Counter Mode of Operation|TOP   |Update of OCR1x at|TOV1 Flag Set on|            
|0   |0    |0          |0           |0          |Normal                         !0xFFFF|Immediate         |MAX
...
|4   |0    |1          |0           |0          |CTC                            !OCR1A |Immediate         |MAX

TCCR1B – Timer/Counter1 Control Register B
         |7      |6      |5      |4      |3      |2      |1      |0      |
TCCR1B = |ICNC1  |ICES1  |   –   |WGM13  |WGM12  |CS12   |CS11   |CS10   |

Bit 7 – ICNC1: Input Capture Noise Canceler
Bit 6 – ICES1: Input Capture Edge Select
Bit 5 – Reserved Bit
Bit 4:3 – WGM13:2: Waveform Generation Mode
Bit 2:0 – CS12:0: Clock Select

Clock Select Bit Description:
         |CS12   |CS11   |CS10   | Description
         |   0   |   0   |   0   | No clock source (Timer/Counter stopped)
         |   0   |   0   |   1   | clk(No prescaling)
         |   0   |   1   |   0   | clk/8 (From prescaler)
         |   0   |   1   |   1   | clk/64 (From prescaler)
         |   1   |   0   |   0   | clk/256 (From prescaler)
         |   1   |   0   |   1   | clk/1024 (From prescaler)
         |   1   |   1   |   0   | External clock source on T1 pin. Clock on falling edge.
         |   1   |   1   |   1   | External clock source on T1 pin. Clock on rising edge.

TCCR1C – Timer/Counter1 Control Register C
         |7      |6      |5      |4      |3      |2      |1      |0      |
TCCR1C = |FOC1A  |FOC1B  |   –   |   -   |   -   |   -   |   -   |   -   |
Bit 7 – FOC1A: Force Output Compare for Channel A
Bit 6 – FOC1B: Force Output Compare for Channel B

TCNT1H and TCNT1L – Timer/Counter1
TCNT1H = TCNT1[15:8] 
TCNT1L = TCNT1[7:0]

OCR1AH and OCR1AL – Output Compare Register 1 A 16bit
OCR1AH = OCR1A[15:8] 
OCR1AL = OCR1A[7:0]

OCR1BH and OCR1BL – Output Compare Register 1 B 16Bit
OCR1BH = OCR1B[15:8] 
OCR1BL = OCR1B[7:0]

ICR1H and ICR1L – Input Capture Register 1 16Bit
ICR1H = ICR1[15:8] 
ICR1L = ICR1[7:0]

TIMSK1 – Timer/Counter1 Interrupt Mask Register
         |7      |6      |5      |4      |3      |2      |1      |0      |
TIMSK1 = |   -   |   -   |ICIE1  |   -   |   -   |OCIE1B |OCIE1A |TOIE1  |
Bit 5 – ICIE1: Timer/Counter1, Input Capture Interrupt Enable
When this bit is written to one, and the I-flag in the Status Register is set (interrupts globally
enabled), the Timer/Counter1 Input Capture interrupt is enabled. The corresponding Interrupt
Vector (see “Interrupts” on page 57) is executed when the ICF1 Flag, located in TIFR1, is set.

Bit 2 – OCIE1B: Timer/Counter1, Output Compare B Match Interrupt Enable
When this bit is written to one, and the I-flag in the Status Register is set (interrupts globally
enabled), the Timer/Counter1 Output Compare B Match interrupt is enabled. The corresponding
Interrupt Vector (see “Interrupts” on page 57) is executed when the OCF1B Flag, located in
TIFR1, is set.

Bit 1 – OCIE1A: Timer/Counter1, Output Compare A Match Interrupt Enable
When this bit is written to one, and the I-flag in the Status Register is set (interrupts globally
enabled), the Timer/Counter1 Output Compare A Match interrupt is enabled. The corresponding
Interrupt Vector (see “Interrupts” on page 57) is executed when the OCF1A Flag, located in
TIFR1, is set.

Bit 0 – TOIE1: Timer/Counter1, Overflow Interrupt Enable
When this bit is written to one, and the I-flag in the Status Register is set (interrupts globally
enabled), the Timer/Counter1 Overflow interrupt is enabled. The corresponding Interrupt Vector
(See ”Interrupts” on page 57) is executed when the TOV1 Flag, located in TIFR1, is set.

TIFR1 – Timer/Counter1 Interrupt Flag Register
        |7      |6      |5      |4      |3      |2      |1      |0      |
TIFR1 = |   -   |   -   |ICF1   |   -   |   -   |OCF1B  |OCF1A  |TOV1   |
Bit 5 – ICF1: Timer/Counter1, Input Capture Flag
Bit 2 – OCF1B: Timer/Counter1, Output Compare B Match Flag
This flag is set in the timer clock cycle after the counter (TCNT1) value matches the Output
Compare Register B (OCR1B).
Note that a Forced Output Compare (FOC1B) strobe will not set the OCF1B Flag.
OCF1B is automatically cleared when the Output Compare Match B Interrupt Vector is executed.
Alternatively, OCF1B can be cleared by writing a logic one to its bit location.

Bit 1 – OCF1A: Timer/Counter1, Output Compare A Match Flag
This flag is set in the timer clock cycle after the counter (TCNT1) value matches the Output
Compare Register A (OCR1A).
Note that a Forced Output Compare (FOC1A) strobe will not set the OCF1A Flag.
OCF1A is automatically cleared when the Output Compare Match A Interrupt Vector is executed.
Alternatively, OCF1A can be cleared by writing a logic one to its bit location.

Bit 0 – TOV1: Timer/Counter1, Overflow Flag
The setting of this flag is dependent of the WGM13:0 bits setting. In Normal and CTC modes,
the TOV1 Flag is set when the timer overflows. Refer to Table 13-4 on page 136 for the TOV1
Flag behavior when using another WGM13:0 bit setting.
TOV1 is automatically cleared when the Timer/Counter1 Overflow Interrupt Vector is executed.
Alternatively, TOV1 can be cleared by writing a logic one to its bit location.

Example functions:
unsigned int TIM16_ReadTCNT1( void )
{
    unsigned char sreg;
    unsigned int i;
    // Save global interrupt flag 
    sreg = SREG;
    // Disable interrupts 
    _CLI();
    // Read TCNT1 into i 
    i = TCNT1;
    // Restore global interrupt flag 
    SREG = sreg;
    return i;
}

void TIM16_WriteTCNT1( unsigned int i )
{
    unsigned char sreg;
    unsigned int i;
    // Save global interrupt flag 
    sreg = SREG;
    // Disable interrupts 
    _CLI();
    / Set TCNT1 to i 
    TCNT1 = i;
    // Restore global interrupt flag 
    SREG = sreg;
}
*/

/**************************************** INCLUDE FILES ****************************************/
//#include <avr/io.h>
#include "Arduino.h"
#include "Gpt_LLD_TMR1.h"
#include "Gpt_Cfg.h"
/***********************************************************************************************/

#define SET_BIT_REGISTER(Reg_type, REGISTER, mask) { REGISTER |= (Reg_type)mask; }
#define CLEAR_BIT_REGISTER(Reg_type, REGISTER, mask) { REGISTER &= (Reg_type)(~((0xFF)&(mask))); }

void Gpt_Init_LLD_TMR1()
{
    /*Timer stopped, CTC mode*/
    TCCR1A = (0<<COM1A1)|(0<<COM1A0)|(0<<COM1B1)|(0<<COM1B0)|(0<<WGM11)|(0<<WGM10);
    /*Timer stopped,,CTC mode, No Input Capture Edge Select*/
    TCCR1B = (0<<ICNC1)|(0<<ICES1)|(0<<WGM13)|(1<<WGM12)|(0<<CS12)|(0<<CS11)|(0<<CS10);
    /*No Force Output Compare*/
    TCCR1C = (0<<FOC1A)|(0<<FOC1B);
    /*Disable all TIMER1 interrupt bit Enable*/
    TIMSK1 = (0<<ICIE1)|(0<<OCIE1B)|(0<<OCIE1A)|(0<<TOIE1);
    /*Clear all TIMER1 interrupt flag*/
    TIFR1 = (0<<ICF1)|(0<<OCF1B)|(0<<OCF1A)|(0<<TOV1);
    /*Clear Output compare match A register*/
    OCR1A = 0x00;
    /*Clear Timer/Counter register*/
    TCNT1 = 0x00;
}

void Gpt_DeInit_LLD_TMR1(void)
{
    /*Timer stopped*/
    TCCR1A = (0<<COM1A1)|(0<<COM1A0)|(0<<COM1B1)|(0<<COM1B0)|(0<<WGM11)|(0<<WGM10);
    /*Timer stopped, No Input Capture Edge Select*/
    TCCR1B = (0<<ICNC1)|(0<<ICES1)|(0<<WGM13)|(0<<WGM12)|(0<<CS12)|(0<<CS11)|(0<<CS10);
    /*No Force Output Compare*/
    TCCR1C = (0<<FOC1A)|(0<<FOC1B);
    /*Disable all TIMER1 interrupt bit Enable*/
    TIMSK1 = (0<<ICIE1)|(0<<OCIE1B)|(0<<OCIE1A)|(0<<TOIE1);
    /*Clear all TIMER1 interrupt flag*/
    TIFR1 = (0<<ICF1)|(0<<OCF1B)|(0<<OCF1A)|(0<<TOV1);
    /*Clear Output compare match A register*/
    OCR1A = 0x00;
    /*Clear Timer/Counter register*/
    TCNT1 = 0x00;
}

uint16_t Gpt_GetTimeElapsed_LLD_TMR1(void)
{
    /*Read the value of Timer/counter register*/
    return (uint16_t)TCNT1;
}

void Gpt_StartTimer_LLD_TMR1(uint16_t value, uint8_t clockValue)
{
    /*Set compare match register*/
    OCR1A = value;
    /*Protect by wrong value of clockValue*/
    clockValue = 0b00000111&clockValue;
	/*Set clock source by setting CS12 CS11 CS10*/
    SET_BIT_REGISTER (uint8_t, TCCR1B, clockValue); 
}

void Gpt_StopTimer_LLD_TMR1()
{
	/*No clock Source. CS12 = 0, CS11 = 0, CS10 = 0*/
    CLEAR_BIT_REGISTER (uint8_t, TCCR1B, (1<<CS12)|(1<<CS11)|(1<<CS10))
}

void Gpt_EnableNotification_LLD_TMR1()
{
	/*Clear interrupt compare match flag A. Set OCF0A*/
    SET_BIT_REGISTER (uint8_t, TIFR1, (1<<OCF1A));
	/*Enable interrupt compare match A*/
	SET_BIT_REGISTER (uint8_t, TIMSK1, (1<<OCIE1A));
}

void Gpt_DisableNotification_LLD_TMR1(void)
{
	/*Clear interrupt compare match flag A*/
	SET_BIT_REGISTER (uint8_t, TIFR1, (1<<OCF1A));
	/*Disable interrupt compare match A. OCIE0A = 0*/
	CLEAR_BIT_REGISTER (uint8_t, TIMSK1, (1<<OCIE1A));
}

uint8_t Gpt_CalculateClockSelect_TMR1(uint8_t clockSource, uint16_t clockPrescaler)
{
    if (clockSource == SYS_CLK)
    {
        switch (clockPrescaler)
        {
            case 0:
			{
                return TMR1_SYS_CLK_P0;
				break;
			}
			case 8:
			{
                return TMR1_SYS_CLK_P8;
				break;
			}
			case 64:
			{	
                return TMR1_SYS_CLK_P64;
				break;
			}
            case 256:
			{
                return TMR1_SYS_CLK_P256;
				break;
			}
            case 1024:
			{
                return TMR1_SYS_CLK_P1024;
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