/*
File: Gpt_LLD.h

Api:
void Gpt_Init_LLD_TMR0(void);
void Gpt_DeInit_LLD_TMR0(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR0(void);
void Gpt_StartTimer_LLD_TMR0(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR0();
void Gpt_EnableNotification_LLD_TMR0(void);
void Gpt_DisableNotification_LLD_TMR0(void);
*/

typedef enum { 
	TMR0_NO_CLK, 
	TMR0_SYS_CLK_P0, TMR0_SYS_CLK_P8, TMR0_SYS_CLK_P64, TMR0_SYS_CLK_P256, TMR0_SYS_CLK_P1024,
}type_GptClockSelect_TMR0;

void Gpt_Init_LLD_TMR0(void);
void Gpt_DeInit_LLD_TMR0(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR0(void);
void Gpt_StartTimer_LLD_TMR0(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR0(void);
void Gpt_EnableNotification_LLD_TMR0(void);
void Gpt_DisableNotification_LLD_TMR0(void);
uint8_t Gpt_CalculateClockSelect_TMR0(uint8_t clockSource, uint16_t clockPrescaler);