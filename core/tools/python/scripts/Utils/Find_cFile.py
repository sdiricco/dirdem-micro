#import os
#for root, dirs, files in os.walk("C:\\Repository\\dirdem-micro\\core\\tools\\python\\scripts", topdown=True):
#   for name in files:
#      print(os.path.join(root, name))
#   for name in dirs:
#      print(os.path.join(root, name))

import os
for root, dirs, files in os.walk("C:\\Repository\\dirdem-micro\\core", topdown=True):
   for name in files:
      if ".txt" in name:
         print(name)
         print(os.path.join(root, name))
#   for name in dirs:
#      print(os.path.join(root, name))