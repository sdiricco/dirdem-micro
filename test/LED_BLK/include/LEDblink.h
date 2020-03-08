
void Init_Timer2();

#ifdef __AVR_ATmega32__
    #define TMR_2_CNTR_REG TCCR2
    #define TMR_2_AS_REG ASSR
    #define TMR_MSK_REG TIMSK
    #define TMR_2_CNT TCNT2
#endif

#ifdef __AVR_ATmega328P__
    #define TMR_2_CNTR_REG TCCR2B
    #define TMR_2_AS_REG ASSR
    #define TMR_MSK_REG TIMSK2
    #define TMR_2_CNT TCNT2
#endif

