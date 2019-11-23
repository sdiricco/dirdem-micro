/*
File: Gpt_LLD.h

Api:

void Gpt_Init_LLD()
void Gpt_DeInit_LLD( void )
uint Gpt_GetTimeElapsed_LLD()
uint Gpt_GetTimeRemaining_LLD()
void Gpt_StartTimer_LLD(uint value)
void Gpt_StopTimer_LLD()
void Gpt_EnableNotification_LLD()
void Gpt_DisableNotification_LLD()
void Gpt_SetMode_LLD(enum)

*/

/**************************************** INCLUDE FILES ****************************************/
//#include <avr/io.h>
#include "Arduino.h"
#include "Gpt_LLD.h"
#include "Gpt_LLD_TMR0.h"
#include "Gpt_LLD_TMR1.h"
#include "Gpt_LLD_TMR2.h"
#include "Gpt_Cfg.h"
/***********************************************************************************************/

void Gpt_Init_LLD(uint8_t channel)
{
    switch (Cfg[channel].GptHwChannel)
    {
        case TMR0:
		{
            Gpt_Init_LLD_TMR0();
			break;
		}
		case TMR1:
        {
		    Gpt_Init_LLD_TMR1();
			break;
		}
		case TMR2:
        {
		    Gpt_Init_LLD_TMR2();
			break;
		}
		default:
            ;//error();
    }
}

void Gpt_DeInit_LLD(uint8_t channel)
{
    switch (Cfg[channel].GptHwChannel)
    {
        case TMR0:
		{
            Gpt_DeInit_LLD_TMR0();
			break;
		}
		case TMR1:
		{
            Gpt_DeInit_LLD_TMR1();
			break;
		}
		case TMR2:
        {
		    Gpt_DeInit_LLD_TMR2();
			break;
		}
		default:
            ;//error();
    }
}

void Gpt_StartTimer_LLD(uint32_t channel, uint32_t value)
{
    uint8_t clockSelectBits = 0;
    switch (Cfg[channel].GptHwChannel)
    {
        case TMR0:
        {
            clockSelectBits = Gpt_CalculateClockSelect_TMR0(Cfg[channel].GptClockReference, Cfg[channel].GptClockPrescaler);
            Gpt_StartTimer_LLD_TMR0(value, clockSelectBits);
			break;
        }
        case TMR1:
        {
            clockSelectBits = Gpt_CalculateClockSelect_TMR1(Cfg[channel].GptClockReference, Cfg[channel].GptClockPrescaler);
            Gpt_StartTimer_LLD_TMR1(value, clockSelectBits);
			break;
        }
        case TMR2:
        {
            clockSelectBits = Gpt_CalculateClockSelect_TMR2(Cfg[channel].GptClockReference, Cfg[channel].GptClockPrescaler);
            Gpt_StartTimer_LLD_TMR2(value, clockSelectBits);
			break;
        }
        default:
            ;//error();
    }    
}

void Gpt_EnableNotification_LLD(uint32_t channel)
{
    switch (Cfg[channel].GptHwChannel)
    {
	    case TMR0:
		{
			Gpt_EnableNotification_LLD_TMR0();
			break;
		}
	    case TMR1:
		{
            Gpt_EnableNotification_LLD_TMR1();
			break;
		}
	    case TMR2:
		{
		    Gpt_EnableNotification_LLD_TMR2();
			break;
		}
	    default:
		    ;//error();
    }	
}

void Gpt_DisableNotification_LLD(uint32_t channel)
{
    switch (Cfg[channel].GptHwChannel)
    {
	    case TMR0:
		{
			Gpt_DisableNotification_LLD_TMR0();
			break;
		}
	    case TMR1:
		{
		    Gpt_DisableNotification_LLD_TMR1();
			break;
		}
	    case TMR2:
		{
			Gpt_DisableNotification_LLD_TMR2();
			break;
		}
	    default:
		    ;//error();
    }	
}

uint32_t Gpt_GetTimeElapsed_LLD(uint32_t channel)
{
    switch (Cfg[channel].GptHwChannel)
    {
	    case TMR0:
		{
            return Gpt_GetTimeElapsed_LLD_TMR0();
			break;
		}
	    case TMR1:
		{
		    return Gpt_GetTimeElapsed_LLD_TMR1();
			break;
		}
	    case TMR2:
		{
			return Gpt_GetTimeElapsed_LLD_TMR2();
			break;
		}
	    default:
		    ;//error();
    }
	return 0;	
}

uint32_t Gpt_GetTimeRemaining_LLD(uint32_t channel)
{
    uint32_t valueTickMax = Cfg[channel].GptChannelTickValueMax;
    uint32_t timeElapsed = Gpt_GetTimeElapsed_LLD(channel); 
    return (valueTickMax - timeElapsed);
}

void Gpt_StopTimer_LLD(uint32_t channel)
{
    switch (Cfg[channel].GptHwChannel)
    {
	    case TMR0:
		{
            Gpt_StopTimer_LLD_TMR0();
			break;
		}
		case TMR1:
		{
		    Gpt_StopTimer_LLD_TMR1();
			break;
		}
		case TMR2:
		{
			Gpt_StopTimer_LLD_TMR2();
			break;
		}
		default:
		    ;//error();
    }    
}


