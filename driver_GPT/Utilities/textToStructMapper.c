#include <stdio.h>

struct Node
{
    char *key;
    char *value;
    struct Node *next;
};

struct Node *list = NULL, **nextp = &list;
char buffer[1024];


int main() {

    FILE *fp;
    char* file = "./map_driver_config.txt";

    fp = fopen(file, "r");

    if (fp == NULL){
        printf("Could not open file",file);
        return 1;
    }

    while (fgets(buffer, sizeof buffer, fp) != NULL ) {
        struct Node *node;

        node = malloc(sizeof(struct Node) + strlen(buffer) + 1);
        node->key = strtok(strcpy((char*)(node+1), buffer), "=\r\n");
        node->value = strtok(NULL, "\r\n");
        node->next = NULL;
        *nextp = node;
        nextp = &node->next;

        if (node->key != NULL && node->value != NULL){
            printf("%s", node->key);
            printf("\t");
            printf("%s", node->value);
            printf("\n");
        }
    }
    fclose(fp);
}
