/**************************************** INCLUDE FILES ****************************************/
//#include "Arduino.h"
/***********************************************************************************************/

#include "Gpt_Cfg.h"
#include "Gpt_Extern_Generated.h"

ConfigPtr Cfg[] =
{
	{
		1,
		TMR1,
		SYS_CLK,
		0,
		65535,
		"GptNotification01",
	},
	{
		2,
		TMR2,
		SYS_CLK,
		64,
		255,
		"GptNotification02",
	}
};

