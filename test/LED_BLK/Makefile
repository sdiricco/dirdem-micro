#Main application file name
MAIN_APP = LEDblink
#Main hex file path in windows format
MAIN_HEX_PATH = builds\$(MAIN_APP).hex
MAIN_ELF_PATH = builds\$(MAIN_APP).elf
MAIN_OBJ_PATH = builds\$(MAIN_APP).o

# Compiler and other Section
# CC, OBJCOPY, AVRDUDE sono variabili di ambiente
CC = avr-gcc.exe
OBJCOPY = avr-objcopy.exe
AVRDUDE := avrdude

#Options for avr-gcc
CFLAGS = -g -Os -o

#Linking options for avr-gcc
LFLAGS = -Os -mmcu=atmega32 -o

#Options for HEX file generation
HFLAGS = -j .text -j .data -O ihex

#Options for avrdude to burn the hex file
#MMCU model here according to avrdude options
DUDEFLAGS = -c
DUDEFLAGS += usbasp 
DUDEFLAGS += -p
DUDEFLAGS += m32  
DUDEFLAGS += -U flash:w:$(MAIN_HEX_PATH):i

# Sources files needed for building the application 
SRC = sources\$(MAIN_APP).c
SRC += 

# The headers files needed for building the application
INCLUDE = -I. 
INCLUDE += 

# commands Section
Burn : Build
	$(AVRDUDE) $(DUDEFLAGS)

Build : $(MAIN_ELF_PATH)
	$(OBJCOPY) $(HFLAGS) $< $(MAIN_HEX_PATH)
	
$(MAIN_ELF_PATH): builds\$(MAIN_APP).o
	$(CC) $(SRC) $(INCLUDE) $(LFLAGS) $@
	
$(MAIN_OBJ_PATH):$(SRC)
	$(CC) $^ $(INCLUDE) $(CFLAGS) $@