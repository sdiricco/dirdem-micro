# We are Dirdem-Micro

v0.1.1 released on June 1st, 2020

# Setup

## Windows

To download the dirderm-micro software for windows click here:<br />
https://drive.google.com/file/d/1IpmesjylqjN5DS_8p3SguDK50ejMGO7m/view?usp=sharing<br />
To ensure that the dirdem-micro software runs smoothly, please follow the steps below:<br />

- download the avr-toolchain and avrdude packages from the following link: 
https://drive.google.com/file/d/1yDNwaGXGj1FiG_AYdIu4By9Xr00mLHyV/view?usp=sharing

- Extract and copy the content in your local disk: `C:\AvrTools`<br />

- Add the following paths to the environment variables:<br />
`C:\AvrTools\avrdude`<br />
`C:\AvrTools\avr-toolchain\bin`


To check if avr-gcc and avrdude have been installed correctly, open your terminal and type the following commands:<br />
```
>>>avr-gcc --version
>>>avrdude
```

## Linux
To download the dirderm-micro software for linux click the following link:<br />
https://drive.google.com/file/d/1egZrHCpr1LS-EiuV0b0khwFxhUTdKMRS/view?usp=sharing

To ensure that dirdem-micro software runs smoothly, open your terminal and type the following commands:<br />
```
$ sudo apt-get install gcc-avr binutils-avr avr-libc
$ sudo apt-get install avrdude
```

To check if avr-gcc and avrdude have been installed correctly, open your  terminal and type:<br />
```
$ avr-gcc --version
$ avrdude
```
