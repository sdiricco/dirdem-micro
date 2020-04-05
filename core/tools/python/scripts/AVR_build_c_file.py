#Name: build_flash_burn_c_file.py
#Autore:
#Modifiche 05/04/2020: Aggiunti commenti e descrizioni alle variabili e alle funzioni
#TO-DO: 
#Lo script adesso è in grado di compilare più di un file ".c" e di prendere tutti i files ".h" che stanno all'interno di un path specifico, tuttavia
#al momento non c'è un modo per passare le informazioni dall'esterno poichè non è possibile sapere a priori quanti files verranno passati.
#Le soluzioni che propongo sono due:
#1 - Lo sviluppatore si crea un file con i files da compilare, l'equivalente del make file.
#2 - Viene passato dall'esterno un path dove saranno contenuti i files ".c" e i files ".h"
#
#Creare un file contenente i path dei tool in modo tale di averli esterni e facilmente manutenibili
#Questa soluzione permette pure di eliminare i path dei tool nel caso si decidesse di usare le variabili di ambiente

####################################################################################################################################################
# Import globali                                                                                                                             #
####################################################################################################################################################
import os
import shutil
import sys
import asyncio
from enum import Enum
import glob

####################################################################################################################################################
# Variabili globali                                                                                                                                #
####################################################################################################################################################
#Variabili parametri Esterni
global microcontroller_name
global microcontroller_tag
global programmer
global project_name 
global input_file_c
global output_files

#Variabili file output
global file_o
global file_elf
global file_hex

#Variabili tools
global path_avrgcc 
global path_avrobjcopy    

#Variabili paramentri tools
global flagsObjectFile_avrgcc  
global flagsElfFile_avrgcc    
global flagsHexFile_avrobjcopy

####################################################################################################################################################
# Paramentri Esterni                                                                                                                                #
####################################################################################################################################################

microcontroller_name = sys.argv[1]
microcontroller_tag = sys.argv[2]
programmer = sys.argv[3] 
input_file_c = sys.argv[4]
output_files = sys.argv[5]

#Esempio:
#Parametri esterni
# -1 microcontroller_name: atmega32
# -2 microcontroller_tag: m32
# -3 programmer: usbasp: usbasp
# -4 input_file_c: C:\Repository\dirdem-micro\test\LED_BLK\sources\LEDblink.c
# -5 output_files: C:\Repository\dirdem-micro\builds\c_file
# -6 action: build

# Guida:
# dal percorso: 
# C:\Repository\dirdem-micro\core\tools\python\scripts
# lanciare il seguente comando, il quale chiamerà lo script "build_flash_burn_c_file.py" con i paramentri impostati sopra dall'esempio.
# >>> build_flash_burn_c_file.py atmega32 m32 usbasp C:\Repository\dirdem-micro\test\LED_BLK\sources\LEDblink.c C:\Repository\dirdem-micro\builds\c_file build
# !!!ATTENZIONE!!!
# Dall'ultima modifica è possibile compilare più di un file e aggiungere anche una cartella custom di include files.
# Tuttavia la cartella inlcude così come il secondo file .c custom sono inseriti proprio all'interno dello script e non vengono passati all'esterno.
# La prossima modifica sarà quella di passare dall'esterno un path unico che si va a cercare i files .c e il files .h

####################################################################################################################################################
# Assegnamenti globali                                                                                                                           #
####################################################################################################################################################

#Inizio Script
#Descrizione: Questo script serve per ricavare il nome del nome del progetto dato il path.
#Nota: Cosa si intende per nome progetto?
#Il nome del progetto è inteso come il file contenente il main in ".c"
#Questo nome verrà utilizzato per creare i file ".o", ".elf", ".hex"
cFileIndex = input_file_c.rindex('\\')
project_name = input_file_c[(cFileIndex+1):]
pointIndex = project_name.rindex('.c')
project_name = project_name[:pointIndex]

file_o   = output_files + "\\" + project_name + ".o"
file_elf = output_files + "\\" + project_name + ".elf"
file_hex = output_files + "\\" + project_name + ".hex"
#Fine Script

path_avrgcc     = "..\\..\\avr-toolchain\\bin\\avr-gcc.exe "
path_avrobjcopy = "..\\..\\avr-toolchain\\bin\\avr-objcopy.exe "

#Attenzione!! 
#Questi sono path assoluti con riferimenti fissi al progetto, vedi TO-DO.
include_files = "C:\\Repository\\dirdem-micro\\test\\LED_BLK"
input_file_c = input_file_c + " C:\\Repository\\dirdem-micro\\test\\LED_BLK\\sources\\timer2.c"
#Fine Attenzione!!

flagsObjectFile_avrgcc  = " -I " + include_files + " -g"      + " -Os"    + " -mmcu="            + microcontroller_name  + " -o "
flagsElfFile_avrgcc     = " -I " + include_files + " -Os"     + " -mmcu=" + microcontroller_name + " -o "
flagsHexFile_avrobjcopy = " -j " + " .text "  + " -j "    + " .data "            + " -O "                + " ihex "

####################################################################################################################################################
# Funzioni Locali                                                                                                                                  #
####################################################################################################################################################

#Name: cmd_pulisci_output(path_to_delete)
#Descrizione: cmd_pulisci_output(path_to_delete) elimina i files ".o", ".elf", ".hex" dal path "path_to_delete"
async def cmd_pulisci_output(path_to_delete):
    for the_file in os.listdir(path_to_delete):
        if the_file == (project_name + ".o") or the_file == (project_name + ".elf") or the_file == (project_name + ".hex"):
            file_path = os.path.join(path_to_delete, the_file)
            if os.path.isfile(file_path):
                os.unlink(file_path)
    return 1

#Name: cmd_compilazione()
#Descrizione: cmd_compilazione() compila i files contenuti in "input_file_c" e genera i file di output: "file_o", "file_elf", "file_hex"
def cmd_compilazione():
    print (path_avrgcc + input_file_c + flagsObjectFile_avrgcc + file_o)
    os.system(path_avrgcc + input_file_c + flagsObjectFile_avrgcc + file_o)
    print (path_avrgcc + input_file_c + flagsElfFile_avrgcc + file_elf)
    os.system(path_avrgcc + input_file_c + flagsElfFile_avrgcc + file_elf)
    print (path_avrobjcopy + flagsHexFile_avrobjcopy + file_elf + " " + file_hex)
    os.system(path_avrobjcopy + flagsHexFile_avrobjcopy + file_elf + " " + file_hex)
    return 1

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################

asyncio.run(cmd_pulisci_output(output_files))
cmd_compilazione()




