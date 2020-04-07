import sys 
import glob

global number_of_arg
global input_file_c_other

number_of_arg = len(sys.argv)

microcontroller_name = sys.argv[1]
microcontroller_tag = sys.argv[2]
programmer = sys.argv[3] 
output_files = sys.argv[4]
input_file_c = sys.argv[5]

if number_of_arg > 5:
    input_file_c_other = sys.argv[6]
    for i in range(7, number_of_arg): 
        input_file_c_other += " " + str(sys.argv[i])
  
print("This is the name of the program:\n", sys.argv[0]) 
print("microcontroller_name:\n", microcontroller_name)
print("microcontroller_tag:\n", microcontroller_tag)
print("programmer:\n", programmer)
print("output_files:\n", output_files)
print("input_file_c:\n", input_file_c)
print("input_file_c_other:\n", input_file_c_other)

#>>>UseOfsysargv.py atmega32 m32 usbasp C:\Repository\dirdem-micro\builds\c_file C:\Repository\dirdem-micro\test\LED_BLK\sources/LEDblink.c C:\Repository\dirdem-micro\test\LED_BLK\sources/timer2.c

#len(sys.argv)) 
#(len(sys.argv)-1)) 
#str(sys.argv)) 

