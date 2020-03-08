
Comandi per compilare 2 file ".c" e un file ".h"
	paths:
		avr-gcc.exe: C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK> C:/Repository/dirdem-micro/dirdem-micro/core/tools/avr-toolchain/bin/avr-gcc.exe
		file_1 c: C:/Repository/dirdem-micro/dirdem-micro/test/LED_BLK/sources\LEDblink.c
		file_2 c: C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK\sources\timer2.c
		file_3 h: C:/Repository/dirdem-micro/dirdem-micro/test/LED_BLK
		
C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK> C:/Repository/dirdem-micro/dirdem-micro/core/tools/avr-toolchain/bin/avr-gcc.exe C:/Repository/dirdem-micro/dirdem-micro/test/LED_BLK/sources\LEDblink.c C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK\sources\timer2.c -I C:/Repository/dirdem-micro/dirdem-micro/test/LED_BLK  -g -Os -mmcu=atmega32 -o C:/Repository/dirdem-micro/dirdem-micro/builds/c_file\LEDblink.o
C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK> C:/Repository/dirdem-micro/dirdem-micro/core/tools/avr-toolchain/bin/avr-gcc.exe C:/Repository/dirdem-micro/dirdem-micro/test/LED_BLK/sources\LEDblink.c C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK\sources\timer2.c  -I C:/Repository/dirdem-micro/dirdem-micro/test/LED_BLK   -Os -mmcu=atmega32 -o C:/Repository/dirdem-micro/dirdem-micro/builds/c_file\LEDblink.elf
C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK> C:/Repository/dirdem-micro/dirdem-micro/core/tools/avr-toolchain/bin/avr-objcopy.exe -j .text -j .data -O ihex C:/Repository/dirdem-micro/dirdem-micro/builds/c_file\LEDblink.elf C:/Repository/dirdem-micro/dirdem-micro/builds/c_file\LEDblink.hex

NOTA:
Per compilare più di un file c è necessario metterli in lista come primo argomento avr-gcc.exe
Per linkare un file h è necessario inserire il path dopo la direttiva -I

NOTA2:
Adesso lo script "build_flash_burn_c_file.py" contiene al suo interno i paths:
	include_files = "C:\\Repository\\dirdem-micro\\dirdem-micro\\test\\LED_BLK"
	input_file_c += " C:\Repository\dirdem-micro\dirdem-micro\test\LED_BLK\sources\LEDblink.c "

Questi files sono stati aggiunti al fine di rendere compilabile il codice LEDblink ma andrà trovato un modo per passarli esternamente