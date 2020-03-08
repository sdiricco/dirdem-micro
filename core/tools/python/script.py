import os
import shutil
import sys

NameScript = "runner"

##########################################################################################################
print ("-----------------------------------------------")
print ("Script: runner")
print ("Version: 0.8.0")
print ("-----------------------------------------------")

global microcontroller_name
global microcontroller_tag
global programmer
global project_name
global input_source_file
global output_files

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

#Informazioni default per la compilazione#
##########################################################################################################
microcontroller_name = "atmega32"
microcontroller_tag  = "m32"
programmer           = "usbasp"

project_name         = "LEDblink"
input_source_file    = "sources"
output_files         = "builds"
##########################################################################################################

#Funzioni Locali#
##########################################################################################################
def print_comandi():
	print ("-----------------------------------------------")
	print ("Usa il comando:")
	print (">>>runner\t--param")
	print ("-----------------------------------------------")
	print ("param:\tc\t\t-> Compilazione avr-gcc.exe")
	print ("\tfls\t\t-> Flash avrdude.exe")
	print ("\ts\t\t-> Visualizzazione settaggio.")
	print ("\tcs\t\t-> Modifica il settaggio.")
	print ("\thelp\t\t-> Apri i comandi.")
	print ("\tavrdude_exe\t-> Invoca avrdude.exe")
	print ("-----------------------------------------------\n")
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
def print_settaggio():
	print ("-----------------------------------------------")
	print ("Micocontroller name: " + microcontroller_name)
	print ("Micocontroller tag: " + microcontroller_tag)
	print ("Programmer: " + programmer)
	print ("Project name: " + project_name)
	print ("Directory source files: " + input_source_file)
	print ("Directory output files: " + output_files)
	print ("-----------------------------------------------\n")
	return 1
def cambio_settaggio():

	global microcontroller_name
	global microcontroller_tag
	global programmer
	global project_name
	global input_source_file
	global output_files
	
	tmp = input("Micocontroller name: ")
	if tmp.isalnum():
		microcontroller_name = tmp
	tmp = input("Micocontroller tag: ")
	if tmp.isalnum():
		microcontroller_tag = tmp
	tmp = input("Programmer: ")
	if tmp.isalnum():
		programmer = tmp
	tmp = input("Project name: ")
	if tmp.isalnum():
		project_name = tmp
	tmp = input("Directory source files: ")
	if tmp.isalnum():
		input_source_file = tmp
	tmp = input("Directory output files: ")
	if tmp.isalnum():
		output_files = tmp
	return 1

##########################################################################################################
print_comandi()
print_settaggio()
##########################################################################################################

while 1 == 1:

	#Variabili locali#
	##########################################################################################################
	input_file_c = input_source_file + "\\" + project_name + ".c"

	file_o   = output_files + "\\" + project_name + ".o"
	file_elf = output_files + "\\" + project_name + ".elf"
	file_hex = output_files + "\\" + project_name + ".hex"
	##########################################################################################################

	#tools/avrdude/avrdude.exe -c usbasp -p m32   -U flash:w:builds\LEDblink.hex:i 

	#TOOLS#
	##########################################################################################################
	path_avrgcc     = "..\\avr-toolchain\\bin\\avr-gcc.exe "
	path_avrobjcopy = "..\\avr-toolchain\\bin\\avr-objcopy.exe "
	path_avrdude    = "..\\avrdude\\avrdude.exe "
	##########################################################################################################
	flagsObjectFile_avrgcc  = " -I." + " -g"      + " -Os"    + " -mmcu="            + microcontroller_name  + " -o "
	flagsElfFile_avrgcc     = " -I." + " -Os"     + " -mmcu=" + microcontroller_name + " -o "
	flagsHexFile_avrobjcopy = " -j " + " .text "  + " -j "    + " .data "            + " -O "                + " ihex "
	flagsFlash_avrdude      = " -c " + programmer + " -p "    +  microcontroller_tag + " -U "                + "flash:w:" + file_hex + ":i"
	##########################################################################################################

	global comando 
	global ok
	global param
	
	comando = input(">>>")
	ok = 0
	
	if comando[0:len(NameScript)] == NameScript:
		if comando [7:9] == "--":
			param = comando[9:]
			#comandi compilazione#
			if param == "c":
				print ("-----------------------------------------------")
				print ("Pulizia di: " + output_files)
				shutil.rmtree(output_files)
				os.mkdir(output_files)
				print ("Ok..")
				print ("Inizio Compilazione..")
				print ("Project:" + project_name + ".c")
				print ("Microcontroller:" + microcontroller_name + "\n")
				cmd_compilazione()
				print ("Ok!\n")
			elif param == "fls":
				print ("-----------------------------------------------")
				print ("Flash di:")
				print ("Project:" + project_name + ".c")
				print ("Microcontroller:" + microcontroller_name)
				print ("..")
				print ("-----------------------------------------------")
				cmd_flash()
				print ("Ok!\n")
			elif param == "c" + " " "--" "fls":
				print ("-----------------------------------------------")
				print ("Compilazione + Flash di:")
				print ("Project:" + project_name + ".c")
				print ("Microcontroller:" + microcontroller_name)
				print ("..")
				print ("-----------------------------------------------")
				cmd_compilazione()
				cmd_flash()
			elif param == "s":
				print_settaggio()
			elif param == "cs":
				cambio_settaggio()
				print ("\nOk!\n")
			elif param == "help":
				print_comandi()
			elif param == "avrdude_exe":
				print (path_avrdude)
				os.system(path_avrdude)
			else:
				print ("!!!Error!!!")
				print ("Parametro non valido!")
				print_comandi()
		else:
			print ("!!!Error!!!")
			print ("Usa l'operatore '--' seguito da un parametro:")
			print_comandi()
	else:
		print ("!!!Error!!!")
		print("Utilizza il comando: 'runner --param' ")
		print_comandi()

