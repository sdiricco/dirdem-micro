import os
import shutil
import sys
import asyncio
from enum import Enum
import glob

#Parametri esterni
# -1 microcontroller_name
# -2 microcontroller_tag
# -3 programmer
# -4 input_file_c
# -5 output_files
# -6 action

global microcontroller_name
global microcontroller_tag
global programmer
global project_name 
global input_file_c
global output_files

global action 

class Action(Enum):
    build = "build"
    flash = "flash"
    burn = "burn"


microcontroller_name = sys.argv[1]
microcontroller_tag = sys.argv[2]
programmer = sys.argv[3] 
input_file_c = sys.argv[4]
output_files = sys.argv[5]
action = Action(sys.argv[6])

cFileIndex = input_file_c.rindex('\\')
project_name = input_file_c[(cFileIndex+1):]
pointIndex = project_name.rindex('.c')
project_name = project_name[:pointIndex]


global file_o
global file_elf
global file_hex

global path_avrgcc 
global path_avrobjcopy 
global path_avrdude    

global flagsObjectFile_avrgcc  
global flagsElfFile_avrgcc    
global flagsHexFile_avrobjcopy
global flagsFlash_avrdude

async def cmd_pulisci_output(path_to_delete):
    for the_file in os.listdir(path_to_delete):
        if the_file == (project_name + ".o") or the_file == (project_name + ".elf") or the_file == (project_name + ".hex"):
            file_path = os.path.join(path_to_delete, the_file)
            if os.path.isfile(file_path):
                os.unlink(file_path)
    return 1

def cmd_compilazione():
    print (path_avrgcc + input_file_c + flagsObjectFile_avrgcc + file_o)
    os.system(path_avrgcc + input_file_c + flagsObjectFile_avrgcc + file_o)
    print (path_avrgcc + input_file_c + flagsElfFile_avrgcc + file_elf)
    os.system(path_avrgcc + input_file_c + flagsElfFile_avrgcc + file_elf)
    print (path_avrobjcopy + flagsHexFile_avrobjcopy + file_elf + " " + file_hex)
    os.system(path_avrobjcopy + flagsHexFile_avrobjcopy + file_elf + " " + file_hex)
    return 1

def cmd_flash():
    os.system(path_avrdude + flagsFlash_avrdude)
    return 1

#Variabili locali#
##########################################################################################################
file_o   = output_files + "\\" + project_name + ".o"
file_elf = output_files + "\\" + project_name + ".elf"
file_hex = output_files + "\\" + project_name + ".hex"
##########################################################################################################

include_files = "C:\\Repository\\dirdem-micro\\dirdem-micro\\test\\LED_BLK"
input_file_c = input_file_c + " C:\\Repository\\dirdem-micro\\dirdem-micro\\test\\LED_BLK\\sources\\timer2.c"

#TOOLS#
##########################################################################################################
path_avrgcc     = "..\\avr-toolchain\\bin\\avr-gcc.exe "
path_avrobjcopy = "..\\avr-toolchain\\bin\\avr-objcopy.exe "
path_avrdude    = "..\\avrdude\\avrdude.exe "
##########################################################################################################
flagsObjectFile_avrgcc  = " -I " + include_files + " -g"      + " -Os"    + " -mmcu="            + microcontroller_name  + " -o "
flagsElfFile_avrgcc     = " -I " + include_files + " -Os"     + " -mmcu=" + microcontroller_name + " -o "
flagsHexFile_avrobjcopy = " -j " + " .text "  + " -j "    + " .data "            + " -O "                + " ihex "
flagsFlash_avrdude      = " -c " + programmer + " -p "    +  microcontroller_tag + " -U "                + "flash:w:" + file_hex + ":i"
##########################################################################################################

if action == Action.build:
    asyncio.run(cmd_pulisci_output(output_files))
    cmd_compilazione()
elif action == Action.flash:
    cmd_flash()
elif action == Action.burn:
    cmd_pulisci_output(output_files)
    cmd_compilazione()
    cmd_flash()
else:
    print("Error: No valid action")



