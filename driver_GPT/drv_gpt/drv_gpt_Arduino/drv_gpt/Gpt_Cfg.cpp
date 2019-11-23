/*
File: Gpt_Cfg.c
*/

/**************************************** INCLUDE FILES ****************************************/
//#include <avr/io.h>
#include "Arduino.h"
#include "Gpt_Cfg.h"
/***********************************************************************************************/

#define CONFIGURED_CHANNELS 3

ConfigPtr Cfg[CONFIGURED_CHANNELS] =
{
	{
		0,
		TMR0,
		SYS_CLK,
		1024,
		255,
		"GptNotification01",
	},
	{
		1,
		TMR1,
		SYS_CLK,
		1024,
		65535,
		"GptNotification02",
	},
	{
		2,
		TMR2,
		SYS_CLK,
		64,
		255,
		"GptNotification03",
	}
};
