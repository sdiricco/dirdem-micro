#Main application file name
MAIN_APP = LEDblink
#Main hex file path in windows format
MAIN_HEX_PATH = builds\$(MAIN_APP).hex
MAIN_ELF_PATH = builds\$(MAIN_APP).elf
MAIN_OBJ_PATH = builds\$(MAIN_APP).o

# Programmatore utilizzato (sintassi AVRDUDE)
PROGRAMMER = usbasp

MICROCONTROLLER_NAME = atmega328p

# Microcontrollore Utilizzato (sintassi AVRDUDE) m32 -> ATMega32, m328p -> ATMega328p
MICROCONTROLLER_LABEL = m328p

# Compiler and other Section
# CC, OBJCOPY, AVRDUDE sono variabili di ambiente
CC = tools/avr-toolchain/bin/avr-gcc.exe
OBJCOPY = tools/avr-toolchain/bin/avr-objcopy.exe
AVRDUDE := tools/avrdude/avrdude.exe

#Options for avr-gcc
CFLAGS = -g -Os -o

#Linking options for avr-gcc
LFLAGS = -Os -mmcu=$(MICROCONTROLLER_NAME) -o

#Options for HEX file generation
HFLAGS = -j .text -j .data -O ihex

#Options for avrdude to burn the hex file
#MMCU model here according to avrdude options
DUDEFLAGS = -c
DUDEFLAGS += $(PROGRAMMER)
DUDEFLAGS += -p
DUDEFLAGS += $(MICROCONTROLLER_LABEL)  
DUDEFLAGS += -U flash:w:$(MAIN_HEX_PATH):i

# Sources files needed for building the application 
SRC = sources\$(MAIN_APP).c
SRC += 

# The headers files needed for building the application
INCLUDE = -I. 
INCLUDE += 
	
#4 Caricamento .hex nel microcontrollore con AVRDUDE
Burn : Build
	$(AVRDUDE) $(DUDEFLAGS)	
	
#3 creazione file .hex
Build : $(MAIN_ELF_PATH)
	$(OBJCOPY) $(HFLAGS) $< $(MAIN_HEX_PATH)
	
#2 creazione file .elf
$(MAIN_ELF_PATH): builds\$(MAIN_APP).o
	$(CC) $(SRC) $(INCLUDE) $(LFLAGS) $@

#1 crezione file .o
$(MAIN_OBJ_PATH):$(SRC)
	$(CC) $^ $(INCLUDE) $(CFLAGS) $@

