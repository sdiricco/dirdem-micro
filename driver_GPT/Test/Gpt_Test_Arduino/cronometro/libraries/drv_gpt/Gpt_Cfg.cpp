/*
File: Gpt_Cfg.c
*/

/**************************************** INCLUDE FILES ****************************************/
//#include <avr/io.h>
#include "Arduino.h"
#include "Gpt_Cfg.h"
/***********************************************************************************************/

#define CONFIGURED_CHANNELS 1

ConfigPtr Cfg[CONFIGURED_CHANNELS] =
{
	{
		1,
		TMR1,
		SYS_CLK,
		256,
		65535,
		"GptNotification02",
	},
};
