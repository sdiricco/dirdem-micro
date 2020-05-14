# We are Dirdem-Micro

April 30, 2020
Frist Release v0.1.0

Download here:<br />
https://drive.google.com/file/d/1h6sAK3r9Q5_x8mgi7zyu9XG9QzDNmcY-/view?usp=sharing

# Setup

## Windows

Download the dirderm-micro softwre for windows here:<br />
https://drive.google.com/file/d/1h6sAK3r9Q5_x8mgi7zyu9XG9QzDNmcY-/view?usp=sharing

You need to install the avr-toolchain and avrdude, get both from here:<br />
https://drive.google.com/file/d/1yDNwaGXGj1FiG_AYdIu4By9Xr00mLHyV/view?usp=sharing

Extract the content and copy it under your local disk: `C:\AvrTools`<br />
Add the following paths to the environment variables:<br />
`C:\AvrTools\avrdude`<br />
`C:\AvrTools\avr-toolchain\bin`

To check if avr-gcc and avrdude are installed correctly, open cmd and digit:<br />
```
>>>avr-gcc --version
>>>avrdude
```

## Linux
Download the dirderm-micro softwre for linux here:<br />
https://drive.google.com/file/d/1h6sAK3r9Q5_x8mgi7zyu9XG9QzDNmcY-/view?usp=sharing

You need to install the avr-toolchain and avrdude.<br />
Open the terminal and digit:<br />
```
$ sudo apt-get install gcc-avr binutils-avr avr-libc
$ sudo apt-get install avrdude
```

To check if avr-gcc and avrdude are installed correctly, open the terminal and digit:<br />
```
$ avr-gcc --version
$ avrdude
```
