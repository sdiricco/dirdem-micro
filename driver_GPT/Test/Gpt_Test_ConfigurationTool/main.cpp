#include <iostream>
#include <string.h>

using namespace std;

typedef enum type_GptContainerHwChannel {TMR0, TMR1, TMR2}GptContainerHwChannel;
typedef enum type_GptContainerClockReference {SYS_CLK, EXT_CLK}GptContainerClockReference;

typedef enum { MODE_UNINITIALIZED, MODE_NORMAL, MODE_SLEEP, MODE_TRASH}type_GptDriverModes;
typedef enum typeContainer_GptTimerChannelStates { STATE_INITIALIZED, STATE_RUNNING, STATE_STOPPED, STATE_EXPIRED, STATE_TRASH}type_GptTimerChannelStates;

type_GptDriverModes porccdiooo = MODE_UNINITIALIZED;
//type_GptTimerChannelStates Gpt_TimerChannelStateActual;

//Gpt_DriverModeActual = MODE_TRASH;
//Gpt_TimerChannelStateActual = STATE_TRASH;

typedef struct {
    uint8_t GptChannelID;
    GptContainerHwChannel GptHwChannel;
    GptContainerClockReference GptClockReference;
    uint32_t GptChannelTickValueMax;
    char GptNotification[30];
    bool GptEnableDisableNotificationApi;
}ConfigPtr;

int i = 0;

int vett[4];

ConfigPtr Cfg[2];


void Gpt_InserisciCfg(ConfigPtr *Cfg);
void Gpt_StampaCfg(ConfigPtr *Cfg);

void Gpt_InserisciCfg(ConfigPtr *Cfg){
    char parola_inserita[30];
    uint32_t numero_inserito;
    //GptChannelID
    cout << "GptChannelID {0, 1, 2}: ";
    cin >> numero_inserito;
    if ( numero_inserito >= 0 && numero_inserito <= 2)
        Cfg->GptChannelID = numero_inserito;
    else{
        cout << "GptChannelID: " << "!!!Error!!!" << endl;
        cout << "GptChannelID: " << "0" << endl;
        Cfg->GptChannelID = 0;
    }

    //GptHwChannel
    cout << "GptHwChannel {TMR0, TMR1, TMR2}: ";
    cin >> parola_inserita;
    if ( !strcmp( parola_inserita, "TMR0" ) )
        Cfg->GptHwChannel = TMR0;
    else if ( !strcmp( parola_inserita, "TMR1" ) )
        Cfg->GptHwChannel = TMR1;
    else if ( !strcmp( parola_inserita, "TMR2" ) )
        Cfg->GptHwChannel = TMR2;
    else{
        cout << "GptHwChannel: " << "!!!Error!!!" << endl;
        cout << "GptHwChannel: " << "TMR0" << endl;
        Cfg->GptHwChannel = TMR0;
    }

    //GptClockReference
    cout << "GptClockReference {SYS_CLK, EXT_CLK }: ";
    if ( Cfg->GptHwChannel == TMR0 ){
        Cfg->GptClockReference = SYS_CLK;
        cout << "SYS_CLK" << endl;
    }
    else if ( Cfg->GptHwChannel == TMR1 ){
        Cfg->GptClockReference = SYS_CLK;
        cout << "SYS_CLK" << endl;
    }
    else if ( Cfg->GptHwChannel == TMR2 ){
        cin >> parola_inserita;
        if ( !strcmp(parola_inserita, "SYS_CLK") )
            Cfg->GptClockReference = SYS_CLK;
        else if ( !strcmp(parola_inserita, "EXT_CLK") )
            Cfg->GptClockReference = EXT_CLK;
        else{
            cout << "GptClockReference: " << "!!!Error!!!" << endl;
            cout << "GptClockReference: " << "SYS_CLK" << endl;
            Cfg->GptClockReference = SYS_CLK;
        }
    }
    else{
        cout << "GptClockReference: " << "!!!Error!!!" << endl;
        cout << "GptClockReference: " << "SYS_CLK" << endl;
        Cfg->GptClockReference = SYS_CLK;
    }

    //GptChannelTickValueMax
    cout << "GptChannelTickValueMax {255, 65535}: ";
    if ( Cfg->GptHwChannel == TMR0 ){
        Cfg->GptChannelTickValueMax = 255;
        cout << "255" << endl;
    }
    else if ( Cfg->GptHwChannel == TMR1 ){
        Cfg->GptChannelTickValueMax = 65535;
        cout << "65535" << endl;
    }
    else if ( Cfg->GptHwChannel == TMR2 ){
        Cfg->GptChannelTickValueMax = 255;
        cout << "255" << endl;
    }
    else{
        cout << "GptChannelTickValueMax: " << "!!!Error!!!" << endl;
        cout << "GptChannelTickValueMax: " << "255" << endl;
        Cfg->GptChannelTickValueMax = 255;
    }

    //GptNotification
    cout << "GptNotification: ";
    cin >> Cfg->GptNotification;

    //GptEnableDisableNotificationApi
    cout << "GptEnableDisableNotificationApi {0, 1}: ";
    cin >> numero_inserito;
    if ( numero_inserito == 0 || numero_inserito == 1 )
        Cfg->GptEnableDisableNotificationApi = numero_inserito;
    else{
        cout << "GptEnableDisableNotificationApi: " << "!!!Error!!!" << endl;
        cout << "GptEnableDisableNotificationApi: " << "0" << endl;
        Cfg->GptEnableDisableNotificationApi = 0;
    }

}

void Gpt_StampaCfg(ConfigPtr *Cfg){
    if (Cfg->GptChannelID >= 0 && Cfg->GptChannelID <= 2)
        cout << "GptChannelID: " << (int)Cfg->GptChannelID << endl;
    else
        cout << "GptChannelID: " << "!!!Error!!!" << endl;

    if (Cfg->GptHwChannel == TMR0)
        cout << "GptHwChannel: " << "TMR0" << endl;
    else if (Cfg->GptHwChannel == TMR1)
        cout << "GptHwChannel: " << "TMR1" << endl;
    else if (Cfg->GptHwChannel == TMR2)
        cout << "GptHwChannel: " << "TMR2" << endl;
    else
        cout << "GptHwChannel: " << "!!!Error!!!" << endl;

    if (Cfg->GptClockReference == SYS_CLK)
        cout << "GptClockReference: " << "SYS_CLK" << endl;
    else if (Cfg->GptClockReference == EXT_CLK)
        cout << "GptClockReference: " << "EXT_CLK" << endl;
    else
        cout << "GptClockReference: " << "!!!Error!!!" << endl;

    if (Cfg->GptChannelTickValueMax == 255 || Cfg->GptChannelTickValueMax == 65535)
        cout << "GptChannelTickValueMax: " <<  Cfg->GptChannelTickValueMax << endl;
    else{
        cout << "GptChannelTickValueMax: " <<  "!!!Error!!!" << endl;
    }

    cout << "GptNotification: " <<  Cfg->GptNotification << endl;

    cout << "GptEnableDisableNotificationApi: " <<  (int)Cfg->GptEnableDisableNotificationApi << endl;

}
int main()
{
    cout << "**************************************" << endl
         << "GPT Configuration File                " << endl
         << "**************************************" << endl <<endl;

    cout << "**************************************" << endl
         << "Default Configuration                 " << endl
         << "**************************************" << endl;
    Gpt_StampaCfg(&Cfg[0]);
    cout << endl;

    cout << "**************************************" << endl
         << "Insert new Configuration              " << endl
         << "**************************************" << endl;

    Gpt_InserisciCfg(&Cfg[0]);
    cout << endl;

    cout << "**************************************" << endl
         << "New Configuration                     " << endl
         << "**************************************" << endl;

    Gpt_StampaCfg(&Cfg[0]);
    cout << endl;

    cout << "*In case of corrupted data, default values will be entered" << endl;

    return 0;
}

