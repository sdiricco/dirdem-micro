#include <stdio.h>

struct Node
{
    char *key;
    char *value;
    struct Node *next;
};

struct Node *list = NULL, **nextp = &list;
char buffer[1024];

typedef enum {TMR0, TMR1, TMR2}type_GptHwChannel;
typedef enum {SYS_CLK, EXT_CLK_FE = 6, EXT_CLK_RE = 7}type_GptClockReference;

typedef struct {
    int GptConfigSet;
    int GptChannelID;
    type_GptHwChannel GptHwChannel;
    type_GptClockReference GptClockReference;
    int GptClockPrescaler;
    int GptChannelTickValueMax;
    char GptNotification[30];
}ConfigPtr;



int main() {

    FILE *fp;
    char* file = "./Gpt_Cfg.txt";


    ConfigPtr Cfg;

    fp = fopen(file, "r");

    if (fp == NULL){
        printf("Could not open file",file);
        return 1;
    }

    while (fgets(buffer, sizeof buffer, fp) != NULL) {


        if (buffer[0] == '\n'){
            break;
        }

        struct Node *node;

        node = malloc(sizeof(struct Node) + strlen(buffer) + 1);
        node->key = strtok(strcpy((char*)(node+1), buffer), ":\r\n");
        node->value = strtok(NULL, "\r\n");
        node->next = NULL;
        *nextp = node;
        nextp = &node->next;

        if (node->key != NULL && node->value != NULL){
            if ( strcmp(node->key, "gptConfigSet") == 0 ){
                Cfg.GptConfigSet = 0;
                sscanf(node->value, "%d", &Cfg.GptConfigSet);
                printf("%s", node->key);
                printf(" = %d", Cfg.GptConfigSet);
                printf("\n");
            }
            else if ( strcmp(node->key, "gptChannelID") == 0 ){
                Cfg.GptChannelID = 0;
                sscanf(node->value, "%d", &Cfg.GptChannelID);
                printf("%s", node->key);
                printf(" = %d", Cfg.GptChannelID);
                printf("\n");
            }
            else if ( strcmp(node->key, "gptContainerHwChannel") == 0 ){
                Cfg.GptHwChannel = (type_GptHwChannel)node->value;
                printf("%s", node->key);
                printf(" = %s", Cfg.GptHwChannel);
                printf("\n");
            }
            else if ( strcmp(node->key, "gptChannelTickValueMax") == 0 ){
                Cfg.GptChannelTickValueMax = 0;
                sscanf(node->value, "%d", &Cfg.GptChannelTickValueMax);
                printf("%s", node->key);
                printf(" = %d", Cfg.GptChannelTickValueMax);
                printf("\n");
            }
            else if ( strcmp(node->key, "gptContainerClockReference") == 0 ){
                Cfg.GptClockReference = (type_GptClockReference)node->value;
                printf("%s", node->key);
                printf(" = %s", Cfg.GptClockReference);
                printf("\n");
            }
            else if ( strcmp(node->key, "gptClockPrescaler") == 0 ){
                Cfg.GptClockPrescaler = 0;
                sscanf(node->value, "%d", &Cfg.GptClockPrescaler);
                printf("%s", node->key);
                printf(" = %d", Cfg.GptClockPrescaler);
                printf("\n");
            }
            else if ( strcmp(node->key, "gptNotification") == 0 ){
                strcpy(Cfg.GptNotification , node->value);
                printf("%s", node->key);
                printf(" = %s", Cfg.GptNotification);
                printf("\n");
            }
        }
    }

    fclose(fp);
}
