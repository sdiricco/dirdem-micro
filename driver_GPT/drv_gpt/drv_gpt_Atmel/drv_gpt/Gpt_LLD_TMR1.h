/*
File: Gpt_LLD_TMR1.h

Api:
void Gpt_Init_LLD_TMR1(void);
void Gpt_DeInit_LLD_TMR1(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR1(void);
void Gpt_StartTimer_LLD_TMR1(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR1();
void Gpt_EnableNotification_LLD_TMR1(void);
void Gpt_DisableNotification_LLD_TMR1(void);
*/

typedef enum { 
	TMR1_NO_CLK, 
	TMR1_SYS_CLK_P0, TMR1_SYS_CLK_P8, TMR1_SYS_CLK_P64, TMR1_SYS_CLK_P256, TMR1_SYS_CLK_P1024,
}type_GptClockSelect_TMR1;

void Gpt_Init_LLD_TMR1(void);
void Gpt_DeInit_LLD_TMR1(void);
uint16_t Gpt_GetTimeElapsed_LLD_TMR1(void);
void Gpt_StartTimer_LLD_TMR1(uint16_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR1();
void Gpt_EnableNotification_LLD_TMR1(void);
void Gpt_DisableNotification_LLD_TMR1(void);
uint8_t Gpt_CalculateClockSelect_TMR1(uint8_t clockSource, uint16_t clockPrescaler);
