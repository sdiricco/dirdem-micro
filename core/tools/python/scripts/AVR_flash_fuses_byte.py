##############################
#           DIRDEM           #
##############################

#Name: AVR_flash_fuses_byte.py
#Author: Simone Di Ricco
#Changes
#05/04/2020: Creazione
#18/04/2020: https://udirderm.atlassian.net/browse/DIR-24, https://udirderm.atlassian.net/browse/DIR-25

####################################################################################################################################################
# Import                                                                                                                                           #
####################################################################################################################################################
import os
import sys
<<<<<<< HEAD
from AVR_pathTool import absolutePathFile_avrdude_exe
=======
from subprocess import Popen

import asyncio
import time

>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12

####################################################################################################################################################
# Global variables                                                                                                                                 #
####################################################################################################################################################

####################################################################################################################################################
# Ext Args                                                                                                                                         #
####################################################################################################################################################
sysArg_microcontrollerTag = sys.argv[1]
sysArg_programmer         = sys.argv[2] 
sysArg_string_low_fuse    = sys.argv[3]
sysArg_string_high_fuse   = sys.argv[4]

<<<<<<< HEAD
#Example:
# Internal RC OSC: 1Mhz
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x61 0xDE 
# Internal RC OSC: 8Mhz
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x64 0xDE
# WARNIG!
# Do not set EXT OSC if it is not connected!
=======
#Esempio:
# microcontroller_tag: m32
# programmer: usbasp
# low_fuse: 0x64
# high_fuse: 0xDE
# lanciare il seguente comando, il quale chiamerà lo script "AVR_flash_fuses_byte.py" con i paramentri impostati sopra dall'esempio.
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x64 0xDE 
>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12

####################################################################################################################################################
# Global assignments                                                                                                                               #
####################################################################################################################################################
<<<<<<< HEAD

argsFlashFuseByte_avrdude      = " -u" + \
                                 " -c " + sysArg_programmer + \
                                 " -p " +  sysArg_microcontrollerTag + \
                                 " -U " + "lfuse:w:"+ sysArg_string_low_fuse + ":m " + \
                                 " -U " + "hfuse:w:" + sysArg_string_high_fuse + ":m " + \
                                 " -v -v " + \
                                 " -l " + "AVR_FlashFusesByte_logfile.txt"

=======
path_avrdude    = "avrdude.exe"
#flagsFlash_avrdude      = " -u" + " -c " + programmer + " -p " +  microcontroller_tag + " -U " + "lfuse:w:"+ low_fuse + ":m " + " -U " + "hfuse:w:" + high_fuse + ":m "
flagsFlash_avrdude      = " -u" + " -c " + programmer + " -p " +  microcontroller_tag + " -U " + "lfuse:w:"+ low_fuse + ":m " + " -U " + "hfuse:w:" + high_fuse + ":m " "-n " "-l " "logfile.txt"
#..\\..\\avrdude\\avrdude.exe -u -c usbasp -p m32 -U lfuse:w:0x64:m -U hfuse:w:0xDE:m
#C:\Repository\dirdem-micro\core\tools\python\scripts>..\\..\\avrdude\\avrdude.exe -u -c usbasp -p m32 -U lfuse:w:0x64:m -U hfuse:w:0xDE:m -n -l C:\Users\39347\Desktop\Nu\logfile.txt

#
>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12
####################################################################################################################################################
# Global Function                                                                                                                                  #
####################################################################################################################################################

####################################################################################################################################################
# Script                                                                                                                                           #
####################################################################################################################################################
<<<<<<< HEAD
print("Calling AVRDUDE..")
print(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude)
os.system(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude)
print("End Process")
=======
print("Calling AVRDUDE..\n>>>" + path_avrdude + flagsFlash_avrdude)
>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12



#import asyncio
#from subprocess import Popen
#p = Popen(['watch', 'ls']) # something long running
<<<<<<< HEAD
#os.system(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude)
=======
#os.system(path_avrdude + flagsFlash_avrdude)
>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12
#p.terminate()

#async def run(cmd):
#    proc = await asyncio.create_subprocess_shell(
#        cmd,
#        stdout=asyncio.subprocess.PIPE,
#        stderr=asyncio.subprocess.PIPE)

#    stdout, stderr = await proc.communicate()

#    print(f'[{cmd!r} exited with {proc.returncode}]')
#    if stdout:
#        print(f'[stdout]\n{stdout.decode()}')
#    if stderr:
#        print(f'[stderr]\n{stderr.decode()}')

<<<<<<< HEAD
#asyncio.run(run(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude))

=======
#asyncio.run(run(path_avrdude + flagsFlash_avrdude))
os.system(path_avrdude + flagsFlash_avrdude)
time.sleep(1)
print("Finito!!")
>>>>>>> 904403b23e7356494223f811d5b5ec133d5f1c12
