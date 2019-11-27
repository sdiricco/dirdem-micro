/*
File: Gpt_LLD_TMR1.c
Api:
void Gpt_Init_LLD_TMR2(void);
void Gpt_DeInit_LLD_TMR2(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR2(void);
void Gpt_StartTimer_LLD_TMR2(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR2();
void Gpt_EnableNotification_LLD_TMR2(void);
void Gpt_DisableNotification_LLD_TMR2(void);

#######################################################################################################################
TCCR2A – Timer/Counter Control Register A
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TCCR2A = |COM2A1 |COM2A0 |COM2B1 |COM2B0 |   -   |   -   |WGM21  |WGM20  |

• Bits 7:6 – COM2A1:0: Compare Match Output A Mode
These bits control the Output Compare pin (OC2A) behavior. If one or both of the COM2A1:0
bits are set, the OC2A output overrides the normal port functionality of the I/O pin it is connected
to. However, note that the Data Direction Register (DDR) bit corresponding to the OC2A pin
must be set in order to enable the output driver.
When OC2A is connected to the pin, the function of the COM2A1:0 bits depends on the
WGM22:0 bit setting. Table 15-2 shows the COM2A1:0 bit functionality when the WGM22:0 bits
are set to a normal or CTC mode (non-PWM).

• Bits 5:4 – COM2B1:0: Compare Match Output B Mode
These bits control the Output Compare pin (OC2B) behavior. If one or both of the COM2B1:0
bits are set, the OC2B output overrides the normal port functionality of the I/O pin it is connected
to. However, note that the Data Direction Register (DDR) bit corresponding to the OC2B pin
must be set in order to enable the output driver.
When OC2B is connected to the pin, the function of the COM2B1:0 bits depends on the
WGM22:0 bit setting. Table 15-5 shows the COM2B1:0 bit functionality when the WGM22:0 bits
are set to a normal or CTC mode (non-PWM).

• Bits 1:0 – WGM21:0: Waveform Generation Mode
Combined with the WGM22 bit found in the TCCR2B Register, these bits control the counting
sequence of the counter, the source for maximum (TOP) counter value, and what type of waveform
generation to be used, see Table 15-8. Modes of operation supported by the Timer/Counter
unit are: Normal mode (counter), Clear Timer on Compare Match (CTC) mode, and two types of
Pulse Width Modulation (PWM) modes.
#######################################################################################################################

#######################################################################################################################
TCCR2B – Timer/Counter Control Register B
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TCCR2B = |FOC2A  |FOC2B  |   -   |   -   |WGM22  |CS22   |CS21   |CS20   |

• Bit 7 – FOC2A: Force Output Compare A
The FOC2A bit is only active when the WGM bits specify a non-PWM mode.
However, for ensuring compatibility with future devices, this bit must be set to zero when
TCCR2B is written when operating in PWM mode. When writing a logical one to the FOC2A bit,
an immediate Compare Match is forced on the Waveform Generation unit. The OC2A output is
changed according to its COM2A1:0 bits setting. Note that the FOC2A bit is implemented as a
strobe. Therefore it is the value present in the COM2A1:0 bits that determines the effect of the
forced compare.
A FOC2A strobe will not generate any interrupt, nor will it clear the timer in CTC mode using
OCR2A as TOP.
The FOC2A bit is always read as zero.

• Bit 6 – FOC2B: Force Output Compare B
The FOC2B bit is only active when the WGM bits specify a non-PWM mode.
However, for ensuring compatibility with future devices, this bit must be set to zero when
TCCR2B is written when operating in PWM mode. When writing a logical one to the FOC2B bit,
an immediate Compare Match is forced on the Waveform Generation unit. The OC2B output is
changed according to its COM2B1:0 bits setting. Note that the FOC2B bit is implemented as a
strobe. Therefore it is the value present in the COM2B1:0 bits that determines the effect of the
forced compare.
A FOC2B strobe will not generate any interrupt, nor will it clear the timer in CTC mode using
OCR2B as TOP.
The FOC2B bit is always read as zero.

• Bit 3 – WGM22: Waveform Generation Mode

• Bit 2:0 – CS22:0: Clock Select
#######################################################################################################################

#######################################################################################################################
Compare Output Mode, non-PWM Mode:
         |COM2A1 |COM2A0 | Description
         |   0   |   0   | Normal port operation, OC2A disconnected
         |   0   |   1   | Toggle OC2A on Compare Match
         |   1   |   0   | Clear OC2A on Compare Match
         |   1   |   1   | Set OC2A on Compare Match

Compare Output Mode, non-PWM Mode
         |COM2B1 |COM2B0 | Description
         |   0   |   0   | Normal port operation, OC2B disconnected
         |   0   |   1   | Toggle OC2B on Compare Match
         |   1   |   0   | Clear OC2B on Compare Match
         |   1   |   1   | Set OC2B on Compare Match

Waveform Generation Mode (WGM):
         |Mode   |WGM22  |WGM21  |WGM20  | Timer/Counter Mode of operation | TOP   | Update of OCRx at |
         |   0   |   0   |   0   |   0   | Normal                          | 0xFF  | Immediate         |
         |   1   |   0   |   0   |   1   | PWM, Phase Correct              | 0xFF  | TOP               |
         |   2   |   0   |   1   |   0   | CTC                             | OCRA  | Immediate         |
         |   3   |   0   |   1   |   1   | Fast PWM                        | 0xFF  | BOTTOM            |
         |   4   |   1   |   0   |   0   | Reserved                        |  -    |  -                |
         |   5   |   1   |   0   |   1   | PWM, Phase Correct              | OCRA  | TOP               |
         |   6   |   1   |   1   |   0   | Reserved                        |  -    |  -                |
         |   7   |   1   |   1   |   0   | Fast PWM                        | OCRA  | BOTTOM            |

Clock Select Bit Description:
         |CS22   |CS21   |CS20   | Description
         |   0   |   0   |   0   | No clock source (Timer/Counter stopped)
         |   0   |   0   |   1   | clk(No prescaling)
         |   0   |   1   |   0   | clk/8 (From prescaler)
         |   0   |   1   |   1   | clk/32 (From prescaler)
         |   1   |   0   |   0   | clk/64 (From prescaler)
         |   1   |   0   |   1   | clk/128 (From prescaler)
         |   1   |   1   |   0   | clk/256 (From prescaler)
         |   1   |   1   |   1   | clk/1024 (From prescaler)
#######################################################################################################################

#######################################################################################################################
TCNT2 – Timer/Counter Register
TCNT2 = TCNT2[7:0] (8bit register)
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TCNT2 = |   X   |   X   |   X   |   X   |   X   |   X   |   X   |   X   |

The Timer/Counter Register gives direct access, both for read and write operations, to the
Timer/Counter unit 8-bit counter. Writing to the TCNT2 Register blocks (removes) the Compare
Match on the following timer clock. Modifying the counter (TCNT2) while the counter is running,
introduces a risk of missing a Compare Match between TCNT2 and the OCR2x Registers.

OCR2A – Output Compare Register A
OCR2A = OCR2A[7:0] (8bit register)
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
OCR2A = |   X   |   X   |   X   |   X   |   X   |   X   |   X   |   X   |
The Output Compare Register A contains an 8-bit value that is continuously compared with the
counter value (TCNT2). A match can be used to generate an Output Compare interrupt, or to
generate a waveform output on the OC2A pin.

OCR2B – Output Compare Register B
OCR2B = OCR2B[7:0] (8bit register)
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
OCR2B = |   X   |   X   |   X   |   X   |   X   |   X   |   X   |   X   |
The Output Compare Register B contains an 8-bit value that is continuously compared with the
counter value (TCNT2). A match can be used to generate an Output Compare interrupt, or to
generate a waveform output on the OC2B pin.
#######################################################################################################################

#######################################################################################################################
TIMSK2 – Timer/Counter Interrupt Mask Register
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TIMSK2 = |   -   |   -   |   -   |   -   |   -   |OCIE2B |OCIE2A |TOIE2  |

• Bit 2 – OCIE2B: Timer/Counter2 Output Compare Match B Interrupt Enable
When the OCIE2B bit is written to one and the I-bit in the Status Register is set (one), the
Timer/Counter2 Compare Match B interrupt is enabled. The corresponding interrupt is executed
if a compare match in Timer/Counter2 occurs, i.e., when the OCF2B bit is set in the Timer/Counter
2 Interrupt Flag Register – TIFR2.

• Bit 1 – OCIE2A: Timer/Counter2 Output Compare Match A Interrupt Enable
When the OCIE2A bit is written to one and the I-bit in the Status Register is set (one), the
Timer/Counter2 Compare Match A interrupt is enabled. The corresponding interrupt is executed
if a compare match in Timer/Counter2 occurs, i.e., when the OCF2A bit is set in the Timer/Counter
2 Interrupt Flag Register – TIFR2.

• Bit 0 – TOIE2: Timer/Counter2 Overflow Interrupt Enable
When the TOIE2 bit is written to one and the I-bit in the Status Register is set (one), the
Timer/Counter2 Overflow interrupt is enabled. The corresponding interrupt is executed if an
overflow in Timer/Counter2 occurs, i.e., when the TOV2 bit is set in the Timer/Counter2 Interrupt
Flag Register – TIFR2.
#######################################################################################################################

#######################################################################################################################
TIFR2 – Timer/Counter 2 Interrupt Flag Register
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TIFR2 =  |   -   |   -   |   -   |   -   |   -   |OCF2B  |OCF2A  |TOV2   |

• Bit 2 – OCF2B: Output Compare Flag 2 B
The OCF2B bit is set (one) when a compare match occurs between the Timer/Counter2 and the
data in OCR2B – Output Compare Register2. OCF2B is cleared by hardware when executing
the corresponding interrupt handling vector. Alternatively, OCF2B is cleared by writing a logic
one to the flag. When the I-bit in SREG, OCIE2B (Timer/Counter2 Compare match Interrupt
Enable), and OCF2B are set (one), the Timer/Counter2 Compare match Interrupt is executed.
• Bit 1 – OCF2A: Output Compare Flag 2 A
The OCF2A bit is set (one) when a compare match occurs between the Timer/Counter2 and the
data in OCR2A – Output Compare Register2. OCF2A is cleared by hardware when executing
the corresponding interrupt handling vector. Alternatively, OCF2A is cleared by writing a logic
one to the flag. When the I-bit in SREG, OCIE2A (Timer/Counter2 Compare match Interrupt
Enable), and OCF2A are set (one), the Timer/Counter2 Compare match Interrupt is executed.
• Bit 0 – TOV2: Timer/Counter2 Overflow Flag
The TOV2 bit is set (one) when an overflow occurs in Timer/Counter2. TOV2 is cleared by hardware
when executing the corresponding interrupt handling vector. Alternatively, TOV2 is cleared
by writing a logic one to the flag. When the SREG I-bit, TOIE2A (Timer/Counter2 Overflow Interrupt
Enable), and TOV2 are set (one), the Timer/Counter2 Overflow interrupt is executed. In
PWM mode, this bit is set when Timer/Counter2 changes counting direction at 0x00.
#######################################################################################################################

#######################################################################################################################
ASSR – Asynchronous Status Register
       |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
ASSR = |   –   |EXCLK  |AS2    |TCN2UB |OCR2AUB|OCR2BUB|TCR2AUB|TCR2BUB|

• Bit 7 – RES: Reserved bit
This bit is reserved and will always read as zero.
• Bit 6 – EXCLK: Enable External Clock Input
When EXCLK is written to one, and asynchronous clock is selected, the external clock input buffer
is enabled and an external clock can be input on Timer Oscillator 1 (TOSC1) pin instead of a
32 kHz crystal. Writing to EXCLK should be done before asynchronous operation is selected.
Note that the crystal Oscillator will only run when this bit is zero.
• Bit 5 – AS2: Asynchronous Timer/Counter2
When AS2 is written to zero, Timer/Counter2 is clocked from the I/O clock, clkI/O. When AS2 is
written to one, Timer/Counter2 is clocked from a crystal Oscillator connected to the Timer Oscillator
1 (TOSC1) pin. When the value of AS2 is changed, the contents of TCNT2, OCR2A,
OCR2B, TCCR2A and TCCR2B might be corrupted.
• Bit 4 – TCN2UB: Timer/Counter2 Update Busy
When Timer/Counter2 operates asynchronously and TCNT2 is written, this bit becomes set.
When TCNT2 has been updated from the temporary storage register, this bit is cleared by hardware.
A logical zero in this bit indicates that TCNT2 is ready to be updated with a new value.
• Bit 3 – OCR2AUB: Output Compare Register2 Update Busy
When Timer/Counter2 operates asynchronously and OCR2A is written, this bit becomes set.
When OCR2A has been updated from the temporary storage register, this bit is cleared by hardware.
A logical zero in this bit indicates that OCR2A is ready to be updated with a new value.
• Bit 2 – OCR2BUB: Output Compare Register2 Update Busy
When Timer/Counter2 operates asynchronously and OCR2B is written, this bit becomes set.
When OCR2B has been updated from the temporary storage register, this bit is cleared by hardware.
A logical zero in this bit indicates that OCR2B is ready to be updated with a new value.
• Bit 1 – TCR2AUB: Timer/Counter Control Register2 Update Busy
When Timer/Counter2 operates asynchronously and TCCR2A is written, this bit becomes set.
When TCCR2A has been updated from the temporary storage register, this bit is cleared by
hardware. A logical zero in this bit indicates that TCCR2A is ready to be updated with a new
value.
• Bit 0 – TCR2BUB: Timer/Counter Control Register2 Update Busy
When Timer/Counter2 operates asynchronously and TCCR2B is written, this bit becomes set.
When TCCR2B has been updated from the temporary storage register, this bit is cleared by
hardware. A logical zero in this bit indicates that TCCR2B is ready to be updated with a new
value.

NOTE:
If a write is performed to any of the five Timer/Counter2 Registers while its update busy flag is
set, the updated value might get corrupted and cause an unintentional interrupt to occur.
The mechanisms for reading TCNT2, OCR2A, OCR2B, TCCR2A and TCCR2B are different.
When reading TCNT2, the actual timer value is read. When reading OCR2A, OCR2B, TCCR2A
and TCCR2B the value in the temporary storage register is read.
#######################################################################################################################

#######################################################################################################################
GTCCR – General Timer/Counter Control Register
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
GTCCR = |TSM    |   –   |   –   |   –   |   –   |   –   |PSRASY |PSRSYNC|

• Bit 1 – PSRASY: Prescaler Reset Timer/Counter2
When this bit is one, the Timer/Counter2 prescaler will be reset. This bit is normally cleared
immediately by hardware. If the bit is written when Timer/Counter2 is operating in asynchronous
mode, the bit will remain one until the prescaler has been reset. The bit will not be cleared by
hardware if the TSM bit is set. Refer to the description of the ”Bit 7 – TSM: Timer/Counter Synchronization
Mode” on page 143 for a description of the Timer/Counter Synchronization mode.
#######################################################################################################################

TCCR2A – Timer/Counter Control Register A
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TCCR2A = |COM2A1 |COM2A0 |COM2B1 |COM2B0 |   -   |   -   |WGM21  |WGM20  |

TCCR2B – Timer/Counter Control Register B
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TCCR2B = |FOC2A  |FOC2B  |   -   |   -   |WGM22  |CS22   |CS21   |CS20   |

TCNT2 – Timer/Counter Register
TCNT2 = TCNT2[7:0] (8bit register)
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TCNT2 = |   X   |   X   |   X   |   X   |   X   |   X   |   X   |   X   |

OCR2A – Output Compare Register A
OCR2A = OCR2A[7:0] (8bit register)
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
OCR2A = |   X   |   X   |   X   |   X   |   X   |   X   |   X   |   X   |

OCR2B – Output Compare Register B
OCR2B = OCR2B[7:0] (8bit register)
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
OCR2B = |   X   |   X   |   X   |   X   |   X   |   X   |   X   |   X   |

TIMSK2 – Timer/Counter Interrupt Mask Register
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TIMSK2 = |   -   |   -   |   -   |   -   |   -   |OCIE2B |OCIE2A |TOIE2  |

TIFR2 – Timer/Counter 2 Interrupt Flag Register
         |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
TIFR2 =  |   -   |   -   |   -   |   -   |   -   |OCF2B  |OCF2A  |TOV2   |

ASSR – Asynchronous Status Register
       |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
ASSR = |   –   |EXCLK  |AS2    |TCN2UB |OCR2AUB|OCR2BUB|TCR2AUB|TCR2BUB|

GTCCR – General Timer/Counter Control Register
        |   7   |   6   |   5   |   4   |   3   |   2   |   1   |   0   |
GTCCR = |TSM    |   –   |   –   |   –   |   –   |   –   |PSRASY |PSRSYNC|

#######################################################################################################################

#######################################################################################################################
Compare Output Mode, non-PWM Mode:
         |COM2A1 |COM2A0 | Description
         |   0   |   0   | Normal port operation, OC2A disconnected
         |   0   |   1   | Toggle OC2A on Compare Match
         |   1   |   0   | Clear OC2A on Compare Match
         |   1   |   1   | Set OC2A on Compare Match

Compare Output Mode, non-PWM Mode
         |COM2B1 |COM2B0 | Description
         |   0   |   0   | Normal port operation, OC2B disconnected
         |   0   |   1   | Toggle OC2B on Compare Match
         |   1   |   0   | Clear OC2B on Compare Match
         |   1   |   1   | Set OC2B on Compare Match

Waveform Generation Mode (WGM):
         |Mode   |WGM22  |WGM21  |WGM20  | Timer/Counter Mode of operation | TOP   | Update of OCRx at |
         |   0   |   0   |   0   |   0   | Normal                          | 0xFF  | Immediate         |
         |   1   |   0   |   0   |   1   | PWM, Phase Correct              | 0xFF  | TOP               |
         |   2   |   0   |   1   |   0   | CTC                             | OCRA  | Immediate         |
         |   3   |   0   |   1   |   1   | Fast PWM                        | 0xFF  | BOTTOM            |
         |   4   |   1   |   0   |   0   | Reserved                        |  -    |  -                |
         |   5   |   1   |   0   |   1   | PWM, Phase Correct              | OCRA  | TOP               |
         |   6   |   1   |   1   |   0   | Reserved                        |  -    |  -                |
         |   7   |   1   |   1   |   0   | Fast PWM                        | OCRA  | BOTTOM            |

Clock Select Bit Description:
         |CS22   |CS21   |CS20   | Description
         |   0   |   0   |   0   | No clock source (Timer/Counter stopped)
         |   0   |   0   |   1   | clk(No prescaling)
         |   0   |   1   |   0   | clk/8 (From prescaler)
         |   0   |   1   |   1   | clk/32 (From prescaler)
         |   1   |   0   |   0   | clk/64 (From prescaler)
         |   1   |   0   |   1   | clk/128 (From prescaler)
         |   1   |   1   |   0   | clk/256 (From prescaler)
         |   1   |   1   |   1   | clk/1024 (From prescaler)
#######################################################################################################################

*/

/**************************************** INCLUDE FILES ****************************************/
//#include "Arduino.h"
#include <avr/io.h>
#include "Gpt_LLD_TMR2.h"
#include "Gpt_Extern_Generated.h"
/***********************************************************************************************/

/*********************************************************************************************************************
MACRO specification: SET_BIT_REGISTER(Reg_type, REGISTER, mask)
                     CLEAR_BIT_REGISTER(Reg_type, REGISTER, mask)

Details: These macro are used for set or clear some bits in a register.
         You can use it when you must set or clear some bits but not all in the register
********************************************************************************************************************/
#define SET_BIT_REGISTER(Reg_type, REGISTER, mask) { REGISTER |= (Reg_type)mask; }
#define CLEAR_BIT_REGISTER(Reg_type, REGISTER, mask) { REGISTER &= (Reg_type)(~((0xFF)&(mask))); }

void Gpt_Init_LLD_TMR2()
{
    /*Timer stopped, CTC mode*/
    TCCR2A = (0<<COM2A1)|(0<<COM2A0)|(0<<COM2B1)|(0<<COM2B0)|(1<<WGM21)|(0<<WGM20);
    /*Timer stopped, No Force Output Compare*/
    TCCR2B = (0<<FOC2A)|(0<<FOC2B)|(0<<WGM22)|(0<<CS22)|(0<<CS21)|(0<<CS20);
    /*Disable all interrupt*/
    TIMSK2 = (0<<OCIE2B)|(0<<OCIE2A)|(0<<TOIE2);
    /*Clear all interrupt flag*/
    TIFR2 = (1<<OCF2B)|(1<<OCF2A)|(1<<TOV2);
    /*Clear Output Compare Register A*/
    OCR2A = 0;
    /*Clear Timer/Counter register*/
    TCNT2 = 0;
}

void Gpt_DeInit_LLD_TMR2(void)
{
    /*Reset Timer/Counter Control Register A*/
    TCCR2A = (0<<COM2A1)|(0<<COM2A0)|(0<<COM2B1)|(0<<COM2B0)|(0<<WGM21)|(0<<WGM20);
    /*Reset Timer/Counter Control Register B*/
    TCCR2B = (0<<FOC2A)|(0<<FOC2B)|(0<<WGM22)|(0<<CS22)|(0<<CS21)|(0<<CS20);
    /*Disable all interrupt*/
    TIMSK2 = (0<<OCIE2B)|(0<<OCIE2A)|(0<<TOIE2);
    /*Clear all interrupt flag*/
    TIFR2 = (1<<OCF2B)|(1<<OCF2A)|(1<<TOV2);
    /*Clear Output Compare Register A*/
    OCR2A = 0;
    /*Clear Timer/Counter register*/
    TCNT2 = 0;	
}

uint8_t Gpt_GetTimeElapsed_LLD_TMR2(void)
{
	/*Read the value of Timer/counter register*/
	return (uint8_t)TCNT2;
}

void Gpt_StartTimer_LLD_TMR2(uint32_t value, uint8_t clockValue)
{
    /*Set Output Compare Match Register A*/
	OCR2A = (uint8_t)value;
	/*Set clock source by setting CS02 CS01 CS00*/
    SET_BIT_REGISTER (uint8_t, TCCR2B, 0b00000111&clockValue); 
}

void Gpt_StopTimer_LLD_TMR2()
{
	/*No clock Source. Clear: CS2x*/
    CLEAR_BIT_REGISTER (uint8_t, TCCR2B, (1<<CS02)|(1<<CS01)|(1<<CS00))
}

void Gpt_EnableNotification_LLD_TMR2()
{
	/*Clear interrupt output compare match flag A. Set OCF0A*/
    SET_BIT_REGISTER (uint8_t, TIFR2, (1<<OCF2A));
	/*Enable interrupt output compare match A*/
	SET_BIT_REGISTER (uint8_t, TIMSK2, (1<<OCIE2A));
}

void Gpt_DisableNotification_LLD_TMR2(void)
{
	/*Clear interrupt compare match flag A*/
	SET_BIT_REGISTER (uint8_t, TIFR2, (1<<OCF2A));
	/*Disable interrupt compare match A. OCIE2A = 0*/
	CLEAR_BIT_REGISTER (uint8_t, TIMSK2, (1<<OCIE2A));
}

uint8_t Gpt_CalculateClockSelect_TMR2(uint8_t clockSource, uint16_t clockPrescaler)
{
    if (clockSource == SYS_CLK)
    {
        switch (clockPrescaler)
        {
            case 0:
			{
                return TMR2_SYS_CLK_P0;
				break;
			}
			case 8:
			{
                return TMR2_SYS_CLK_P8;
				break;
			}
            case 32:
			{	
                return TMR2_SYS_CLK_P32;
				break;
			}
			case 64:
			{	
                return TMR2_SYS_CLK_P64;
				break;
			}
            case 128:
			{	
                return TMR2_SYS_CLK_P128;
				break;
			}
            case 256:
			{
                return TMR2_SYS_CLK_P256;
				break;
			}
            case 1024:
			{
                return TMR2_SYS_CLK_P1024;
				break;
			}
			default:
				;//error();	
        }
    }
    else 
	{
        return clockSource;
	}
	return 0;
}
