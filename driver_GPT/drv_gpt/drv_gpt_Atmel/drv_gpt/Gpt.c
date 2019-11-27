/*
File: Gpt.c

Api:

void Gpt_Init( const uint32* ConfigPtr )
void Gpt_DeInit( void )
uint32 Gpt_GetTimeElapsed( uint32 channel )
uint32 Gpt_GetTimeRemaining( uint32 channel )
void Gpt_StartTimer( uint32 channel, uint32 value )
void Gpt_StopTimer( uint32 channel )
void Gpt_EnableNotification( uint32 channel )
void Gpt_DisableNotification( uint32 channel )
void Gpt_SetMode( enum mode )

*/

/**************************************** INCLUDE FILES ****************************************/
//#include "Arduino.h"
#include <avr/io.h>
#include "Gpt_Extern_Generated.h"
#include "Gpt.h"
#include "Gpt_LLD.h"
/***********************************************************************************************/

type_GptDriverModes Gpt_DriverModeActual = MODE_UNINITIALIZED;
type_GptTimerChannelStates Gpt_TimerChannelStateActual = STATE_TRASH;

void Gpt_Init( void)
{
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        int Channel;
        for (Channel = 0; Channel < CONFIGURED_CHANNELS; Channel++)
        {
            Gpt_Init_LLD(Channel);
        }
        Gpt_DriverModeActual = MODE_NORMAL;
    }
    /*if already initialized, error()*/
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        ;//error();
    }
    /*if already initialized, error()*/
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        ;//error(); 
    }
    else
    {
        ;//error();
    }
}



void Gpt_DeInit( void )
{
    /*if not initialized, error()*/
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        ;//error();
    }
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        int Channel;
        for (Channel = 0; Channel < CONFIGURED_CHANNELS; Channel++)
        {
            Gpt_DeInit_LLD(Channel);
        }
        Gpt_DriverModeActual = MODE_UNINITIALIZED;
    }
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        int Channel;
        for (Channel = 0; Channel < CONFIGURED_CHANNELS; Channel++)
        {
            Gpt_DeInit_LLD(Channel);
        }
        Gpt_DriverModeActual = MODE_UNINITIALIZED;
    }
    else
    {
        ;//error();
    }
}

void Gpt_StartTimer( uint32_t channel, uint32_t value )
{
    /*if not initialized, error()*/
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        ;//error();
    }
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        Gpt_StartTimer_LLD(channel, value);
        Gpt_TimerChannelStateActual = STATE_RUNNING;
    }
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        Gpt_StartTimer_LLD(channel, value);
        Gpt_TimerChannelStateActual = STATE_RUNNING;
    }
    else
    {
        ;//error();
    }    
}

void Gpt_EnableNotification( uint32_t channel )
{
	/*if not initialized, error()*/
	if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
	{
		;//error();
	}
	else if ( Gpt_DriverModeActual == MODE_NORMAL )
	{
		Gpt_EnableNotification_LLD(channel);
	}
	else if ( Gpt_DriverModeActual == MODE_SLEEP )
	{
		Gpt_EnableNotification_LLD(channel);
	}
	else
	{
		;//error();
	}
}


uint32_t Gpt_GetTimeElapsed( uint32_t channel )
{
    /*if not initialized, error()*/
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        ;//error();
    }
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        return Gpt_GetTimeElapsed_LLD(channel);
    }
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        return Gpt_GetTimeElapsed_LLD(channel);
    }
    else
    {
        ;//error();
    }
	return 0;
}

uint32_t Gpt_GetTimeRemaining( uint32_t channel )
{
    /*if not initialized, error()*/
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        ;//error();
    }
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        return Gpt_GetTimeRemaining_LLD(channel);
    }
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        return Gpt_GetTimeRemaining_LLD(channel);
    }
    else
    {
        ;//error();
    }
	return 0;
}

void Gpt_StopTimer( uint32_t channel )
{
    /*if not initialized, error()*/
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        ;//error();
    }
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        Gpt_StopTimer_LLD(channel);
    }
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        Gpt_StopTimer_LLD(channel);
    }
    else
    {
        ;//error();
    }    
}

void Gpt_DisableNotification( uint32_t channel )
{
    /*if not initialized, error()*/
    if (Gpt_DriverModeActual == MODE_UNINITIALIZED)
    {
        ;//error();
    }
    else if ( Gpt_DriverModeActual == MODE_NORMAL )
    {
        Gpt_DisableNotification_LLD(channel);
    }
    else if ( Gpt_DriverModeActual == MODE_SLEEP )
    {
        Gpt_DisableNotification_LLD(channel);
    }
    else
    {
        ;//error();
    }       
}

