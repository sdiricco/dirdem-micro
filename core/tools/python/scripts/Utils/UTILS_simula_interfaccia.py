#Name: AVR_build_c_file.py
#Autore:
#Modifiche 08/04/2020: Creazione
#
#TO-DO: 
#

####################################################################################################################################################
# Import globali                                                                                                                                   #
####################################################################################################################################################
import os
import shutil
import sys
import time

####################################################################################################################################################
# Variabili globali                                                                                                                                #
####################################################################################################################################################

####################################################################################################################################################
# Paramentri Esterni                                                                                                                               #
####################################################################################################################################################

####################################################################################################################################################
# Assegnamenti globali                                                                                                                             #
####################################################################################################################################################
def menu_0():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("1 - Selezione un microcontrollore dalla lista")
    print("2 - Rileva il microcontrollore connesso")

    azione = int(input())
    if   azione == 1: menu_1()
    elif azione == 2: menu_2()
    else: 
        menu_invalid()
        menu_0()

    return 1


def menu_1():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("1: Atmega32")

    azione = int(input())
    if   azione == 1: menu_11()
    elif azione == 0: menu_0()
    else:          
        menu_invalid()
        menu_1()
    return 1

def menu_11():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("1: Compilazione di un progetto C")
    print("2: Scrittura del programma su microcontrollore")
    print("3: Scrittura dei Fuse Byte")

    azione = int(input())
    if   azione == 1: menu_compilazione()
    elif azione == 2: menu_flash_memoria()
    elif azione == 3: menu_flash_fuse_byte()
    elif azione == 0: menu_1()
    else:             
        menu_invalid()
        menu_11()
    return 1   

def menu_2():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("Script detect..")
    azione = int(input())
    if azione == 0: menu_0()
    else:           
        menu_invalid()
        menu_2()
    return 1

def menu_compilazione():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("Settaggio compilazione..")

    azione = int(input())
    if azione == 0: menu_11()
    else:           
        menu_invalid()
        menu_compilazione()
    return 1

def menu_flash_memoria():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("Selezione hex file..")

    azione = int(input())
    if azione == 0: menu_11()
    else:           
        menu_invalid()
        menu_flash_memoria()
    return 1  

def menu_flash_fuse_byte():
    pulisci_schermo()
    print("0: Torna indietro\n")
    print("Settaggi fuse byte..")

    azione = int(input())
    if azione == 0: menu_11()
    else:
        menu_invalid()
        menu_flash_fuse_byte()
    return 1  


def menu_invalid():
    pulisci_schermo()
    print("Selezione non valida..")
    return 1

####################################################################################################################################################
# Funzioni Locali                                                                                                                                  #
####################################################################################################################################################
def pulisci_schermo():
    os.system("cls")
    print("---------------------------------------------------------------")
    print("-\tu_DIRDEM")
    print("-\tV0.7.0")
    print("---------------------------------------------------------------")
    return 1
####################################################################################################################################################
# Logica                                                                                                                                           #
####################################################################################################################################################

for x in range (3):
    pulisci_schermo()
    if x == 0:
        time.sleep(0.5)
    print("Carica", end = " ", flush = True)
    time.sleep(0.1)
    for x in range (5):
       print('.', end = " ", flush = True)
       time.sleep(0.1)
    
menu_0()

