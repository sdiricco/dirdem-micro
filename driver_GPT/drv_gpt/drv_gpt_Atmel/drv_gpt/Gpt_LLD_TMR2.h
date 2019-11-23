/*
File: Gpt_LLD_TMR1.h

Api:
void Gpt_Init_LLD_TMR2(void);
void Gpt_DeInit_LLD_TMR2(void);
uint32_t Gpt_GetTimeElapsed_LLD_TMR2(void);
void Gpt_StartTimer_LLD_TMR2(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR2();
void Gpt_EnableNotification_LLD_TMR2(void);
void Gpt_DisableNotification_LLD_TMR2(void);
*/

/*
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
*/

typedef enum { 
	TMR2_NO_CLK = 0, 
	TMR2_SYS_CLK_P0 = 1, TMR2_SYS_CLK_P8 = 2, TMR2_SYS_CLK_P32 = 3, TMR2_SYS_CLK_P64 = 4,
    TMR2_SYS_CLK_P128 = 5, TMR2_SYS_CLK_P256 = 6, TMR2_SYS_CLK_P1024 = 7,
}type_GptClockSelectBit_TMR2;

void Gpt_Init_LLD_TMR2(void);
void Gpt_DeInit_LLD_TMR2(void);
uint8_t Gpt_GetTimeElapsed_LLD_TMR2(void);
void Gpt_StartTimer_LLD_TMR2(uint32_t value, uint8_t clockValue);
void Gpt_StopTimer_LLD_TMR2();
void Gpt_EnableNotification_LLD_TMR2(void);
void Gpt_DisableNotification_LLD_TMR2(void);
uint8_t Gpt_CalculateClockSelect_TMR2(uint8_t clockSource, uint16_t clockPrescaler);