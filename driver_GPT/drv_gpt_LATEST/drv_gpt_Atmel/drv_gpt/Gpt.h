
/*
File: Gpt.h

Api:

void Gpt_Init( const uint32* ConfigPtr )
void Gpt_DeInit( void )
uint32 Gpt_GetTimeElapsed( uint32 channel )
uint32 Gpt_GetTimeRemaining( uint32 channel )
void Gpt_StartTimer( uint32 channel, uint32 TargetTickNumber)
void Gpt_StopTimer( uint32 channel )
void Gpt_EnableNotification( uint32 channel )
void Gpt_DisableNotification( uint32 channel )
void Gpt_SetMode( enum mode )

*/

typedef enum { MODE_UNINITIALIZED, MODE_NORMAL, MODE_SLEEP, MODE_TRASH}type_GptDriverModes;
typedef enum { STATE_INITIALIZED, STATE_RUNNING, STATE_STOPPED, STATE_EXPIRED, STATE_TRASH}type_GptTimerChannelStates;

void Gpt_Init(void);
void Gpt_DeInit( void );
uint32_t Gpt_GetTimeElapsed( uint32_t channel );
uint32_t Gpt_GetTimeRemaining( uint32_t channel );
void Gpt_StartTimer( uint32_t channel, uint32_t value );
void Gpt_StopTimer( uint32_t channel );
void Gpt_EnableNotification( uint32_t channel );
void Gpt_DisableNotification( uint32_t channel );
//void Gpt_SetMode();
