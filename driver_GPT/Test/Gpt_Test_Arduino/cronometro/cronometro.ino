#include "Arduino.h"
#include "Gpt.h"

#define LED_TMR1 5

static bool statoLed_TMR1 = 0;

static int secondi = 0;
static int minuti = 0;


int temp_old_secondi = 0;
int temp_old_minuti = 0;

void setup() {
  Serial.begin(9600);
  interrupts();
  /*Set as output*/
  pinMode(LED_TMR1, OUTPUT);
  Gpt_Init();
  Gpt_EnableNotification(0);
  /*Setting the value of ticks to "X_value", the total number of ticks counted by the Timer is "X_value + 1"*/
  /*The timer starts at 0 and reaches X_value. then back to zero*/
  Gpt_StartTimer(0, 62499);

  Serial.println("secondi");
  Serial.println(secondi);
  Serial.println("minuti");
  Serial.println(minuti);
}

void loop() {
  if (temp_old_secondi != secondi){
    Serial.println("secondi");
    Serial.println(secondi);
    Serial.println("minuti");
    Serial.println(minuti);
    temp_old_secondi = secondi;

    statoLed_TMR1 = !statoLed_TMR1;
    digitalWrite(LED_TMR1, statoLed_TMR1); 
  }
}

volatile void GptNotification02()
{
  secondi++;
  minuti = minuti + (secondi/60)%60;
  secondi = secondi%60;
}
