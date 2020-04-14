#Name: AVR_flash_fuses_byte.py
#Autore:
#Modifiche 06/04/2020: Creazione
#TO-DO: 

####################################################################################################################################################
# Import globali                                                                                                                             #
####################################################################################################################################################
import os
import sys

####################################################################################################################################################
# Variabili globali                                                                                                                                #
####################################################################################################################################################

####################################################################################################################################################
# Paramentri Esterni                                                                                                                               #
####################################################################################################################################################
microcontroller_tag = sys.argv[1]
programmer = sys.argv[2] 
low_fuse = sys.argv[3]
high_fuse =  sys.argv[4]

#Esempio:
# microcontroller_tag: m32
# programmer: usbasp
# low_fuse: 0x64
# high_fuse: 0xDE
# lanciare il seguente comando, il quale chiamerà lo script "AVR_flash_fuses_byte.py" con i paramentri impostati sopra dall'esempio.
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x64 0xDE

####################################################################################################################################################
# Assegnamenti globali                                                                                                                             #
####################################################################################################################################################
path_avrdude    = "..\\..\\avrdude\\avrdude.exe"
flagsFlash_avrdude      = " -u" + " -c " + programmer + " -p " +  microcontroller_tag + " -U " + "lfuse:w:"+ low_fuse + ":m " + " -U " + "hfuse:w:" + high_fuse + ":m "

####################################################################################################################################################
# Funzioni Locali                                                                                                                                  #
####################################################################################################################################################

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################
print("Calling AVRDUDE..\n>>>" + path_avrdude + flagsFlash_avrdude)
os.system(path_avrdude + flagsFlash_avrdude)