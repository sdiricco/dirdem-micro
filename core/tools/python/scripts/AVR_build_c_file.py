##############################
#           DIRDEM           #
##############################

#Name: AVR_build_c_file.py
#Author: Simone Di Ricco
#Changes
#05/04/2020: Creazione
#18/04/2020: https://udirderm.atlassian.net/browse/DIR-24, https://udirderm.atlassian.net/browse/DIR-25

####################################################################################################################################################
# Import                                                                                                                                           #
####################################################################################################################################################
import os
import shutil
import sys
import asyncio
import glob
from AVR_pathTool import absolutePathFile_avrgcc_exe, absolutePathFile_avrobjcopy_exe


####################################################################################################################################################
# Global variables                                                                                                                                 #
####################################################################################################################################################
#Variabili parametri Esterni
global sysArg_microcotrollerName
global path_root_project
global input_main_c_file

global project_name 

#Variabili file output
global avrdude_filepath_o
global avrdude_filepath_elf
global avrdude_filepath_hex

#Variabili tools
global absolutePathFile_avrgcc_exe 
global absolutePathFile_avrobjcopy    


####################################################################################################################################################
# Ext Args                                                                                                                                         #
####################################################################################################################################################

sysArg_microcotrollerName = sys.argv[1]
sysArg_absolutePathDirectory_Project = sys.argv[2]

absolutePathDirectory_outputBuildFiles = sysArg_absolutePathDirectory_Project + "\\" + "outputBuildFiles"

avrdude_filepath_o   = absolutePathDirectory_outputBuildFiles + "\\" + "ObjFile.o"
avrdude_filepath_elf = absolutePathDirectory_outputBuildFiles + "\\" + "ElfFile.elf"
avrdude_filepath_hex = absolutePathDirectory_outputBuildFiles + "\\" + "HexFile.hex"

#avrgcc_listof_absolutePathFile_FilesToBuild = " "
#for root, list_of_pathdirectory, list_of_pathfiles in os.walk(sysArg_absolutePathDirectory_Project, topdown=True):
#   for pathfile in list_of_pathfiles:
#      file = os.path.basename(pathfile)
#      file_name, file_ext = os.path.splitext(file)
#      if file_ext == ".c" and  file_name != project_name:
#         avrgcc_listof_absolutePathFile_FilesToBuild += " " + os.path.join(root, file)
#         avrgcc_listof_absolutePathFile_FilesToBuild = " "

avrgcc_listof_absolutePathFile_FilesToBuild = " "
for root, list_of_pathdirectory, list_of_pathfiles in os.walk(sysArg_absolutePathDirectory_Project, topdown=True):
   for pathfile in list_of_pathfiles:
      file = os.path.basename(pathfile)
      file_name, file_ext = os.path.splitext(file)
      if file_ext == ".c" and file_name != "":
         avrgcc_listof_absolutePathFile_FilesToBuild += " " + os.path.join(root, file)

print("\nVerranno compilati i file:")
print(avrgcc_listof_absolutePathFile_FilesToBuild)
print("\nGli include file necessari verranno cercati all'interno di:\n" + sysArg_absolutePathDirectory_Project)
print("\nChiamo AVRDUDE..")

#Esempio:
#Parametri esterni
# -1 sysArg_microcotrollerName: atmega32
# -2 sysArg_absolutePathDirectory_Project: C:\Repository\dirdem-micro\test\LED_BLK (la root directory del progetto)

# Guida:
# dal percorso: 
# C:\Repository\dirdem-micro\core\tools\python\scripts
# >>> AVR_build_c_file.py atmega32 C:\Repository\dirdem-micro\test\LED_BLK

####################################################################################################################################################
# Global assignments                                                                                                                               #
####################################################################################################################################################

absolutePathFile_avrgcc_exe = "avr-gcc"
absolutePathFile_avrobjcopy = "avr-objcopy"

####################################################################################################################################################
# Global Function                                                                                                                                  #
####################################################################################################################################################

#Name: cmd_pulisci_output(path_to_delete)
#Descrizione: cmd_pulisci_output(path_to_delete) elimina i files ".o", ".elf", ".hex" dal path "path_to_delete"
async def cmd_pulisci_output(path_to_delete):
    for the_file in os.listdir(path_to_delete):
        file_name, file_ext = os.path.splitext(the_file)
        if (file_ext == ".o" or the_file == ".elf" or the_file == ".hex") and file_name != "":
            file_path = os.path.join(path_to_delete, the_file)
            if os.path.isfile(file_path):
                os.unlink(file_path)
    return 1

#Name: cmd_compilazione()
#Descrizione: cmd_compilazione() compila i files contenuti in "avrdude_path_file_main_c" e genera i file di output: "avrdude_filepath_o", "avrdude_filepath_elf", "avrdude_filepath_hex"
def cmd_compilazione():
    print (absolutePathFile_avrgcc_exe + " " + avrgcc_listof_absolutePathFile_FilesToBuild + " -I " + sysArg_absolutePathDirectory_Project + " -g" + " -Os" + " -mmcu=" + sysArg_microcotrollerName  + " -o " + avrdude_filepath_o)
    os.system(absolutePathFile_avrgcc_exe + " "  + avrgcc_listof_absolutePathFile_FilesToBuild + " -I " + sysArg_absolutePathDirectory_Project + " -g" + " -Os" + " -mmcu=" + sysArg_microcotrollerName  + " -o " + avrdude_filepath_o)
    print (absolutePathFile_avrgcc_exe + " " + avrgcc_listof_absolutePathFile_FilesToBuild + " -I " + sysArg_absolutePathDirectory_Project + " -Os" + " -mmcu=" + sysArg_microcotrollerName + " -o " + avrdude_filepath_elf)
    os.system(absolutePathFile_avrgcc_exe + " " + avrgcc_listof_absolutePathFile_FilesToBuild + " -I " + sysArg_absolutePathDirectory_Project + " -Os" + " -mmcu=" + sysArg_microcotrollerName + " -o " + avrdude_filepath_elf)
    print (absolutePathFile_avrobjcopy + " " + "-j" + " .text" + " -j" + ".data " + "-O " + "ihex " + avrdude_filepath_elf + " " + avrdude_filepath_hex)
    os.system(absolutePathFile_avrobjcopy + " " + "-j" + " .text" + " -j" + ".data " + "-O " + "ihex " + avrdude_filepath_elf + " " + avrdude_filepath_hex)
    return 1

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################
if not os.path.exists(absolutePathDirectory_outputBuildFiles):
    os.mkdir(absolutePathDirectory_outputBuildFiles)
asyncio.run(cmd_pulisci_output(absolutePathDirectory_outputBuildFiles))
cmd_compilazione()




