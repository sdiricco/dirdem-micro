#include "Arduino.h"
#include "Gpt.h"
#define LED_TMR0 4
#define LED_TMR1 5

void setup() {
  sei();
  /*Set as output*/
  pinMode(LED_TMR0, OUTPUT);
  /*Set as output*/
  pinMode(LED_TMR1, OUTPUT);
  Gpt_Init();
  Gpt_EnableNotification(0);
  Gpt_EnableNotification(1);
  /*Setting the value of ticks to "X_value", the total number of ticks counted by the Timer is "X_value + 1"*/
  /*The timer starts at 0 and reaches X_value. then back to zero*/
  Gpt_StartTimer(0, 99);
  /*Setting the value of ticks to "X_value", the total number of ticks counted by the Timer is "X_value + 1" */
  /*The timer starts at 0 and reaches X_value. then back to zero*/
  Gpt_StartTimer(1, 1999);

}

void loop() {
}

void GptNotification01()
{
  static volatile uint8_t tick_TMR0 = 0;
  static bool statoLed_TMR0 = 0;
  tick_TMR0++;
  if (tick_TMR0 == 100)
  {
    tick_TMR0 = 0;
    statoLed_TMR0 = !statoLed_TMR0;
    digitalWrite(LED_TMR0, statoLed_TMR0);
  }
}

void GptNotification02()
{
  static volatile uint16_t tick_TMR1 = 0;
  static bool statoLed_TMR1 = 0;
  tick_TMR1++;
  if (tick_TMR1 == 999)
  {
    tick_TMR1 = 0;
    statoLed_TMR1 = !statoLed_TMR1;
    digitalWrite(LED_TMR1, statoLed_TMR1);
  }
}

void GptNotification03()
{
  static volatile uint16_t tick_TMR1 = 0;
  static bool statoLed_TMR1 = 0;
  tick_TMR1++;
  if (tick_TMR1 == 999)
  {
    tick_TMR1 = 0;
    statoLed_TMR1 = !statoLed_TMR1;
    digitalWrite(LED_TMR1, statoLed_TMR1);
  }
}
