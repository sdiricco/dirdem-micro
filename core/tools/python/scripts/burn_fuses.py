import sys

global microcontroller_name
global microcontroller_tag
global programmer
global low_fuse
global high_fuse
global extended_fuse
global lock_bit


microcontroller_name = sys.argv[1]
microcontroller_tag = sys.argv[2]
programmer = sys.argv[3] 
low_fuse = sys.argv[4]
high_fuse = sys.argv[5]
extended_fuse = sys.argv[6]
lock_bit = sys.argv[7]


print(sys.argv)

input('pluto')