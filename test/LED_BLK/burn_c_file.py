import os
import shutil
import sys

from enum import Enum

#Parametri esterni
# -microcontroller_name
# -microcontroller_tag
# -programmer
# -input_source_file
# -output_files

global microcontroller_name
global microcontroller_tag
global programmer
global project_name 
global input_source_file
global output_files

global action 

class Action(Enum):
    build = "build"
    burn = "burn"

microcontroller_name = sys.argv[1]
microcontroller_tag = sys.argv[2]
programmer = sys.argv[3] 
input_source_file = sys.argv[4]
output_files = sys.argv[5]
action = Action(sys.argv[6])

#action = int(action)
#action = Action(action)

print (action)

project_name = "LEDblink"

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

def cmd_compilazione():
	print (path_avrgcc + input_file_c + flagsObjectFile_avrgcc + file_o)
	os.system(path_avrgcc + input_file_c + flagsObjectFile_avrgcc + file_o)
	print (path_avrgcc + input_file_c + flagsElfFile_avrgcc + file_elf)
	os.system(path_avrgcc + input_file_c + flagsElfFile_avrgcc + file_elf)
	print (path_avrobjcopy + flagsHexFile_avrobjcopy + file_elf + " " + file_hex)
	os.system(path_avrobjcopy + flagsHexFile_avrobjcopy + file_elf + " " + file_hex)
	return 1

#Variabili locali#
##########################################################################################################
input_file_c = input_source_file + "\\" + project_name + ".c"

file_o   = output_files + "\\" + project_name + ".o"
file_elf = output_files + "\\" + project_name + ".elf"
file_hex = output_files + "\\" + project_name + ".hex"
##########################################################################################################

#TOOLS#
##########################################################################################################
path_avrgcc     = "tools\\avr-toolchain\\bin\\avr-gcc.exe "
path_avrobjcopy = "tools\\avr-toolchain\\bin\\avr-objcopy.exe "
path_avrdude    = "tools\\avrdude\\avrdude.exe "
##########################################################################################################
flagsObjectFile_avrgcc  = " -I." + " -g"      + " -Os"    + " -mmcu="            + microcontroller_name  + " -o "
flagsElfFile_avrgcc     = " -I." + " -Os"     + " -mmcu=" + microcontroller_name + " -o "
flagsHexFile_avrobjcopy = " -j " + " .text "  + " -j "    + " .data "            + " -O "                + " ihex "
flagsFlash_avrdude      = " -c " + programmer + " -p "    +  microcontroller_tag + " -U "                + "flash:w:" + file_hex + ":i"
##########################################################################################################

if action == Action.build:
    cmd_compilazione()

for param in sys.argv:
    print ("Argument: " + param)