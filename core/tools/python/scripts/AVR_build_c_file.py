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
global avrdude_microcontroller_name
global path_output_files
global path_root_project
global input_main_c_file

global project_name 

#Variabili file output
global avrdude_filepath_o
global avrdude_filepath_elf
global avrdude_filepath_hex

#Variabili tools
global path_avrgcc 
global path_avrobjcopy    


####################################################################################################################################################
# Paramentri Esterni                                                                                                                               #
####################################################################################################################################################

avrdude_microcontroller_name = sys.argv[1]
directorypath_output_files = sys.argv[2]
avrdude_path_directory_root_project = sys.argv[3]
avrdude_path_file_main_c = sys.argv[4]

file_main_c = os.path.basename(avrdude_path_file_main_c)
project_name, file_ext = os.path.splitext(file_main_c)

avrdude_filepath_o   = directorypath_output_files + "\\" + project_name + ".o"
avrdude_filepath_elf = directorypath_output_files + "\\" + project_name + ".elf"
avrdude_filepath_hex = directorypath_output_files + "\\" + project_name + ".hex"

avrdude_list_of_other_pathFiles = " "
for root, list_of_pathdirectory, list_of_pathfiles in os.walk(avrdude_path_directory_root_project, topdown=True):
   for pathfile in list_of_pathfiles:
      file = os.path.basename(pathfile)
      file_name, file_ext = os.path.splitext(file)
      if file_ext == ".c" and  file_name != project_name:
         avrdude_list_of_other_pathFiles += " " + os.path.join(root, file)

print("\nVerranno compilati i file:")
print(avrdude_path_file_main_c + avrdude_list_of_other_pathFiles)
print("\nGli include file necessari verranno cercati all'interno di:\n" + avrdude_path_directory_root_project)
print("\nChiamo AVRDUDE..")

#Esempio:
#Parametri esterni
# -1 avrdude_microcontroller_name: atmega32
# -2 directorypath_output_files: C:\Repository\dirdem-micro\builds\c_file
# -3 avrdude_path_directory_root_project: C:\Repository\dirdem-micro\test\LED_BLK (la root directory del progetto)
# -4 avrdude_path_file_main_c: C:\Repository\dirdem-micro\test\LED_BLK\sources\LEDblink.c 

# Guida:
# dal percorso: 
# C:\Repository\dirdem-micro\core\tools\python\scripts
# lanciare il seguente comando, il quale chiamerà lo script "build_flash_burn_c_file.py" con i paramentri impostati sopra dall'esempio.
# >>> AVR_build_c_file.py atmega32 C:\Repository\dirdem-micro\builds\c_file C:\Repository\dirdem-micro\test\LED_BLK C:\Repository\dirdem-micro\test\LED_BLK\sources\LEDblink.c

####################################################################################################################################################
# Assegnamenti globali                                                                                                                             #
####################################################################################################################################################

path_avrgcc     = "avr-gcc.exe"
path_avrobjcopy = "avr-objcopy.exe"

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
#Descrizione: cmd_compilazione() compila i files contenuti in "avrdude_path_file_main_c" e genera i file di output: "avrdude_filepath_o", "avrdude_filepath_elf", "avrdude_filepath_hex"
def cmd_compilazione():
    print (path_avrgcc + " " + avrdude_path_file_main_c + avrdude_list_of_other_pathFiles + " -I " + avrdude_path_directory_root_project + " -g" + " -Os" + " -mmcu=" + avrdude_microcontroller_name  + " -o " + avrdude_filepath_o)
    os.system(path_avrgcc + " " + avrdude_path_file_main_c + avrdude_list_of_other_pathFiles + " -I " + avrdude_path_directory_root_project + " -g" + " -Os" + " -mmcu=" + avrdude_microcontroller_name  + " -o " + avrdude_filepath_o)
    print (path_avrgcc + " " + avrdude_path_file_main_c + avrdude_list_of_other_pathFiles + " -I " + avrdude_path_directory_root_project + " -Os" + " -mmcu=" + avrdude_microcontroller_name + " -o " + avrdude_filepath_elf)
    os.system(path_avrgcc + " " + avrdude_path_file_main_c + avrdude_list_of_other_pathFiles + " -I " + avrdude_path_directory_root_project + " -Os" + " -mmcu=" + avrdude_microcontroller_name + " -o " + avrdude_filepath_elf)
    print (path_avrobjcopy + " " + "-j" + " .text" + " -j" + ".data " + "-O " + "ihex " + avrdude_filepath_elf + " " + avrdude_filepath_hex)
    os.system(path_avrobjcopy + " " + "-j" + " .text" + " -j" + ".data " + "-O " + "ihex " + avrdude_filepath_elf + " " + avrdude_filepath_hex)
    return 1

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################

asyncio.run(cmd_pulisci_output(directorypath_output_files))
cmd_compilazione()




