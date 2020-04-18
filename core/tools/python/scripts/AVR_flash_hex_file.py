##############################
#           DIRDEM           #
##############################

#Name: AVR_flash_hex_file.py
#Author: Simone Di Ricco
#Changes
#05/04/2020: Creazione
#18/04/2020: https://udirderm.atlassian.net/browse/DIR-24, https://udirderm.atlassian.net/browse/DIR-25

####################################################################################################################################################
# Import                                                                                                                             #
####################################################################################################################################################
import os
import sys
from AVR_pathTool import absolutePathFile_avrdude_exe


####################################################################################################################################################
# Global variables                                                                                                                              #
####################################################################################################################################################

####################################################################################################################################################
# Ext Args                                                                                                                             #
####################################################################################################################################################
sysArg_microcontrollerTag        = sys.argv[1]
sysArg_programmer                = sys.argv[2] 
sysArg_absolutePathFile_file_hex = sys.argv[3]

print("\nThe arguments passed are:")
print("sys.argv[1] = sysArg_microcontrollerTag: " + sysArg_microcontrollerTag)
print("sys.argv[2] = sysArg_programmer: " + sysArg_programmer)
print("sys.argv[3] = sysArg_absolutePathFile_file_hex: " + sysArg_absolutePathFile_file_hex + "\n")

#Example:
# sysArg_microcontrollerTag: m32
# sysArg_programmer: usbasp
# sysArg_absolutePathFile_file_hex: C:\Repository\dirdem-micro\builds\c_file/LEDblink.hex
#
# >>> AVR_flash_hex_file.py m32 usbasp C:\Repository\dirdem-micro\builds\c_file/LEDblink.hex

####################################################################################################################################################
# Global assignments                                                                                                                         #
####################################################################################################################################################
argsFlashHexFile_avrdude     = " -c " + sysArg_programmer + " -p " +  sysArg_microcontrollerTag + " -U " + "flash:w:" + sysArg_absolutePathFile_file_hex + ":i"
####################################################################################################################################################
# Global Functions                                                                                                                                  #
####################################################################################################################################################

####################################################################################################################################################
# Script                                                                                                                                        #
####################################################################################################################################################
print("Calling AVRDUDE..")
print(absolutePathFile_avrdude_exe + argsFlashHexFile_avrdude)
os.system(absolutePathFile_avrdude_exe + argsFlashHexFile_avrdude)
print("End Process")
