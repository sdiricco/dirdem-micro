#Name: AVR_flash_hex_file.py
#Autore:
#Modifiche 05/04/2020: Creazione
#TO-DO: 
#Aggiungere un comando di erase della memoria prima del flash 
#Creare un file contenente i path dei tool in modo tale di averli esterni e facilmente manutenibili
#Questa soluzione permette pure di eliminare i path dei tool nel caso si decidesse di usare le variabili di ambiente

####################################################################################################################################################
# Import globali                                                                                                                             #
####################################################################################################################################################

import os
import sys
<<<<<<< HEAD
from AVR_pathTool import absolutePathFile_avrdude_exe
=======
>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12

####################################################################################################################################################
# Variabili globali                                                                                                                                #
####################################################################################################################################################

####################################################################################################################################################
# Paramentri Esterni                                                                                                                               #
####################################################################################################################################################
microcontroller_tag = sys.argv[1]
programmer = sys.argv[2] 
file_hex = sys.argv[3]

#Esempio:
# microcontroller_tag: m32
# programmer: usbasp
# file_hex: C:\Repository\dirdem-micro\builds\c_file/LEDblink.hex
# lanciare il seguente comando, il quale chiamerà lo script "AVR_flash_hex_file.py" con i paramentri impostati sopra dall'esempio.
# >>> AVR_flash_hex_file.py m32 usbasp C:\Repository\dirdem-micro\builds\c_file/LEDblink.hex

####################################################################################################################################################
# Assegnamenti globali                                                                                                                             #
####################################################################################################################################################
path_avrdude    = "..\\..\\avrdude\\avrdude.exe"
flagsFlash_avrdude      = " -c " + programmer + " -p " +  microcontroller_tag + " -U " + "flash:w:" + file_hex + ":i"

####################################################################################################################################################
# Funzioni Locali                                                                                                                                  #
####################################################################################################################################################

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################
print("Calling AVRDUDE..\n>>>" + path_avrdude + flagsFlash_avrdude)
os.system(path_avrdude + flagsFlash_avrdude)
