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



void Gpt_Init_LLD(uint8_t channel);
void Gpt_DeInit_LLD(uint8_t channel);
uint32_t Gpt_GetTimeElapsed_LLD(uint32_t channel);
uint32_t Gpt_GetTimeRemaining_LLD(uint32_t channel);
void Gpt_StartTimer_LLD(uint32_t channel, uint32_t value);
void Gpt_StopTimer_LLD(uint32_t channel);
void Gpt_EnableNotification_LLD(uint32_t channel);
void Gpt_DisableNotification_LLD(uint32_t channel);
void Gpt_SetMode_LLD();
