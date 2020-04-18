#Name: AVR_flash_fuses_byte.py
#Autore:
#Modifiche 06/04/2020: Creazione
#TO-DO: 

####################################################################################################################################################
# Import globali                                                                                                                             #
####################################################################################################################################################
import os
import sys
from subprocess import Popen
from AVR_pathTool import absolutePathFile_avrdude_exe
import asyncio
import time


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

#Example:
# Internal RC OSC: 1Mhz
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x61 0xDE 
# Internal RC OSC: 8Mhz
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x64 0xDE

####################################################################################################################################################
# Assegnamenti globali                                                                                                                             #
####################################################################################################################################################
#absolutePathFile_avrdude_exe    = "avrdude.exe"
#flagsFlash_avrdude      = " -u" + " -c " + programmer + " -p " +  microcontroller_tag + " -U " + "lfuse:w:"+ low_fuse + ":m " + " -U " + "hfuse:w:" + high_fuse + ":m "
flagsFlash_avrdude      = " -u" + " -c " + programmer + " -p " +  microcontroller_tag + " -u " + "lfuse:w:"+ low_fuse + ":m " + " -U " + "hfuse:w:" + high_fuse + ":m " "-n " "-l " "logfile.txt"
#>>>: avrdude -u -c usbasp -p m32 -P COM3 -B 4.0 -U lfuse:w:0x60:m -U hfuse:w:0xDE:m
# ..\\..\\avrdude\\avrdude.exe -u -c usbasp -p m32 -U lfuse:w:0x64:m -U hfuse:w:0xDE:m
#C:\Repository\dirdem-micro\core\tools\python\scripts>..\\..\\avrdude\\avrdude.exe -u -c usbasp -p m32 -U lfuse:w:0x64:m -U hfuse:w:0xDE:m -n -l C:\Users\39347\Desktop\Nu\logfile.txt

#
####################################################################################################################################################
# Funzioni Locali                                                                                                                                  #
####################################################################################################################################################

####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################
print("Calling AVRDUDE..\n>>>" + absolutePathFile_avrdude_exe + flagsFlash_avrdude)

#p = Popen(['watch', 'ls']) # something long running
#os.system(absolutePathFile_avrdude_exe + flagsFlash_avrdude)
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

#asyncio.run(run(absolutePathFile_avrdude_exe + flagsFlash_avrdude))
os.system(absolutePathFile_avrdude_exe + flagsFlash_avrdude)
time.sleep(1)
print("Finito!!")
