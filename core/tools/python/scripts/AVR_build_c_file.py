#Name: AVR_build_c_file.py
#Autore:
#Modifiche 05/04/2020: Aggiunti commenti e descrizioni alle variabili e alle funzioni
#Modifiche 05/04/2020: Aggiunta la possibilità di compilare piu' file .c passati come argomento allo script e di linkare una directory per 
#                      gli inlcude file sempre necessaria in fase di compilazione.
#
#TO-DO: 
#
#Creare un file contenente i path dei tool in modo tale di averli esterni e facilmente manutenibili
#Questa soluzione permette pure di eliminare i path dei tool nel caso si decidesse di usare le variabili di ambiente

####################################################################################################################################################
# Import globali                                                                                                                                   #
####################################################################################################################################################
import os
import shutil
import sys
import asyncio
import glob

####################################################################################################################################################
# Variabili globali                                                                                                                                #
####################################################################################################################################################
#Variabili parametri Esterni
global number_of_arg
global microcontroller_name
global project_name 
global path_output_files
global input_main_c_file
global input_other_c_files

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
# Paramentri Esterni                                                                                                                               #
####################################################################################################################################################
number_of_arg = len(sys.argv)

microcontroller_name = sys.argv[1]
path_output_files = sys.argv[2]
path_root_include_file = sys.argv[3]
input_main_c_file = sys.argv[4]

if number_of_arg > 4:
    input_other_c_files = " " + sys.argv[5]
    for i in range(6, number_of_arg): 
        input_other_c_files += " " + str(sys.argv[i])

#Esempio:
#Parametri esterni
# -1 microcontroller_name: atmega32
# -2 path_output_files: C:\Repository\dirdem-micro\builds\c_file
# -3 path_root_include_file: C:\Repository\dirdem-micro\test\LED_BLK (può essere la root principale del progetto)
# -4 input_main_c_file: C:\Repository\dirdem-micro\test\LED_BLK\sources\LEDblink.c 

# Guida:
# dal percorso: 
# C:\Repository\dirdem-micro\core\tools\python\scripts
# lanciare il seguente comando, il quale chiamerà lo script "build_flash_burn_c_file.py" con i paramentri impostati sopra dall'esempio.
# >>> AVR_build_c_file.py atmega32 C:\Repository\dirdem-micro\builds\c_file C:\Repository\dirdem-micro\test\LED_BLK C:\Repository\dirdem-micro\test\LED_BLK\sources\LEDblink.c C:\Repository\dirdem-micro\test\LED_BLK\sources/timer2.c 

####################################################################################################################################################
# Assegnamenti globali                                                                                                                           #
####################################################################################################################################################

#Inizio Script
#Descrizione: Questo script serve per ricavare il nome del nome del progetto dato il path.
#Nota: Cosa si intende per nome progetto?
#Il nome del progetto è inteso come il file contenente il main in ".c"
#Questo nome verrà utilizzato per creare i file ".o", ".elf", ".hex"
cFileIndex = input_main_c_file.rindex('\\')
project_name = input_main_c_file[(cFileIndex+1):]
pointIndex = project_name.rindex('.c')
project_name = project_name[:pointIndex]

file_o   = path_output_files + "\\" + project_name + ".o"
file_elf = path_output_files + "\\" + project_name + ".elf"
file_hex = path_output_files + "\\" + project_name + ".hex"
#Fine Script

path_avrgcc     = "..\\..\\avr-toolchain\\bin\\avr-gcc.exe"
path_avrobjcopy = "..\\..\\avr-toolchain\\bin\\avr-objcopy.exe"

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
#Descrizione: cmd_compilazione() compila i files contenuti in "input_main_c_file" e genera i file di output: "file_o", "file_elf", "file_hex"
def cmd_compilazione():
    print (path_avrgcc + " " + input_main_c_file + input_other_c_files + " -I " + path_root_include_file + " -g" + " -Os" + " -mmcu=" + microcontroller_name  + " -o " + file_o)
    os.system(path_avrgcc + " " + input_main_c_file + input_other_c_files + " -I " + path_root_include_file + " -g" + " -Os" + " -mmcu=" + microcontroller_name  + " -o " + file_o)
    print (path_avrgcc + " " + input_main_c_file + input_other_c_files + " -I " + path_root_include_file + " -Os" + " -mmcu=" + microcontroller_name + " -o " + file_elf)
    os.system(path_avrgcc + " " + input_main_c_file + input_other_c_files + " -I " + path_root_include_file + " -Os" + " -mmcu=" + microcontroller_name + " -o " + file_elf)
    print (path_avrobjcopy + " " + "-j" + " .text" + " -j" + ".data " + "-O " + "ihex " + file_elf + " " + file_hex)
    os.system(path_avrobjcopy + " " + "-j" + " .text" + " -j" + ".data " + "-O " + "ihex " + file_elf + " " + file_hex)
    return 1

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################

asyncio.run(cmd_pulisci_output(path_output_files))
cmd_compilazione()




