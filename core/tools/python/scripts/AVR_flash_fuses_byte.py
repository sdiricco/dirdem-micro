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
from AVR_pathTool import absolutePathFile_avrdude_exe


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

#Example:
# Internal RC OSC: 1Mhz
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x61 0xDE 
# Internal RC OSC: 8Mhz
# >>> AVR_flash_fuses_byte.py m32 usbasp 0x64 0xDE
# WARNIG!
# Do not set EXT OSC if it is not connected!

####################################################################################################################################################
# Global assignments                                                                                                                               #
####################################################################################################################################################

argsFlashFuseByte_avrdude      = " -u" + \
                                 " -c " + sysArg_programmer + \
                                 " -p " +  sysArg_microcontrollerTag + \
                                 " -U " + "lfuse:w:"+ sysArg_string_low_fuse + ":m " + \
                                 " -U " + "hfuse:w:" + sysArg_string_high_fuse + ":m " + \
                                 " -v -v " + \
                                 " -l " + "AVR_FlashFusesByte_logfile.txt"

####################################################################################################################################################
# Global Function                                                                                                                                  #
####################################################################################################################################################

####################################################################################################################################################
# Script                                                                                                                                           #
####################################################################################################################################################
print("Calling AVRDUDE..")
print(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude)
os.system(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude)
print("End Process")



#import asyncio
#from subprocess import Popen
#p = Popen(['watch', 'ls']) # something long running
#os.system(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude)
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

#asyncio.run(run(absolutePathFile_avrdude_exe + argsFlashFuseByte_avrdude))

