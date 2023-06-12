---
sidebar_label: 'RK develop tools Installation'
sidebar_position: 1
---

# Introduction

The Radxa ROCK series of single board computer support Maskrom mode, a special mode of operation where the CPU waits for commands from the USB OTG port.
The **rkdeveloptool** and **RKDevTool** are the PC-side flash tools that we use to communicate with the ROCK SBCs in Maskrom mode. 
The rkdeveloptool is used under **Linux/MacOS**, while the RKDevTool is used under **Windows**.

## RKDevTool on Windows

### Install RKDevTool

The tool is provided in a compressed package. Please download the compressed package of this tool and extract files.  

 - [RKDevTool_v2.81](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.81.zip)
 - [RKDevTool_v2.92](https://dl.radxa.com/tools/windows/windows_RKDevTool_Release_v2.92.zip)
 - [RKDevTool_v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96-20221121.rar) (including ROCK 5B eMMC/SPI flash configuration files. Recommended.)

### Install driver

Using the RK driver assistant tool to install the driver.

There’s no need to connect your Rockchip device during this procedure just download and extract [RKDriverAssistant.zip](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

Then double click on DriverInstall.exe in the RKDriverAssistant directory to start the utility. If you installed the Rockchip USB drivers for any other Rockchip devices already, make sure you click “Uninstall Driver” first.  
![RK Driver](/img/configuration/RK-Driver-Assistant-Install-Uninstall.webp)  
Then click “Install Driver”to install the driver. And restart PC.

The following is an example of opening the RKDevTool and connecting to a Maskrom device after installation is complete:  

![RK Dev interface](/img/rock5a/on-maskrom.webp)

## rkdeveloptool on Linux/MacOS(X86 or ARM)

For Linux, we build the latest rkdeveloptool (version >=1.32), from source code.

To build rkdeveloptool on a Debian based Linux distribution, follow the instruction below:

Install build dependency: 

```bash
sudo apt-get install libudev-dev libusb-1.0-0-dev dh-autoreconf
```

Clone the source code and build: 

```bash
 git clone https://github.com/rockchip-linux/rkdeveloptool
 cd rkdeveloptool
 autoreconf -i
 ./configure
 make
```

Now you have rkdeveloptool executable at the current directory.

```bash
 sudo cp rkdeveloptool /usr/local/bin/
```

rkdeveloptool provides a range of commands to operate the motherboard, choose the right one for your needs.  

```bash
---------------------Tool Usage ---------------------
Help:                   -h or --help
Version:                -v or --version
ListDevice:             ld
DownloadBoot:           db <Loader>
UpgradeLoader:          ul <Loader>
ReadLBA:                rl  <BeginSec> <SectorLen> <File>
WriteLBA:               wl  <BeginSec> <File>
WriteLBA:               wlx  <PartitionName> <File>
WriteGPT:               gpt <gpt partition table>
WriteParameter:         prm <parameter>
PrintPartition:         ppt
EraseFlash:             ef
TestDevice:             td
ResetDevice:            rd [subcode]
ReadFlashID:            rid
ReadFlashInfo:          rfi
ReadChipInfo:           rci
ReadCapability:         rcb
PackBootLoader:         pack
UnpackBootLoader:       unpack <boot loader>
TagSPL:                 tagspl <tag> <U-Boot SPL>
-------------------------------------------------------
```

With the Maskrom mode SBC connected, the `ld` command will query for information like  

```bash
radxa@rock-5a:~/rkdeveloptool$ ./rkdeveloptool ld
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=201    Maskrom
```


### FAQ

Compilation error 1:

```bash
    configure: error: in `/home/radxa/rkdeveloptool':
    configure: error: C++ preprocessor "/lib/cpp" fails sanity check

```

This error is reported as a lack of the necessary C++ library, which can be installed with the following command:  

```bash
    sudo apt-get install build-essential
    sudo apt-get install g++
```

Compilation error 2:

```bash
   ./configure: line 4269: syntax error near unexpected token `LIBUSB1,libusb-1.0'
   ./configure: line 4269: `PKG_CHECK_MODULES(LIBUSB1,libusb-1.0)'
```

You should install pkg-config libusb-1.0:  

```bash
   sudo apt-get install pkg-config libusb-1.0
```

Then re-run  

```bash
   autoreconf -i
   ./configure
   make
```

Compilation error 3:  

```bash
make[1]: Entrando no diretório '/home/radxa/rkdeveloptool'
g++ -DHAVE_CONFIG_H -I. -I./cfg  -Wall -Werror -Wextra -Wreturn-type -fno-strict-aliasing -D_FILE_OFFSET_BITS=64 -D_LARGE_FILE -I/usr/include/libusb-1.0   -g -O2 -MT main.o -MD -MP -MF .deps/main.Tpo -c -o main.o main.cpp
main.cpp: In function ‘bool _Z9mergeBootv.part.0()’:
main.cpp:1493:43: error: ‘%s’ directive output may be truncated writing up to 557 bytes into a region of size 5 [-Werror=format-truncation=]
 1493 |         snprintf(buffer, sizeof(buffer), "%s", chip);
      |                                           ^~
......
 1534 |                 chipType = convertChipType(chip + 2);
      |                            ~~~~~~~~~~~~~~~~~~~~~~~~~
In file included from /usr/include/stdio.h:894,
                 from DefineHeader.h:3,
                 from main.cpp:11:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:71:35: note: ‘__builtin_snprintf’ output between 1 and 558 bytes into a destination of size 5
   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,
      |          ~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   72 |                                    __glibc_objsize (__s), __fmt,
      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   73 |                                    __va_arg_pack ());
      |                                    ~~~~~~~~~~~~~~~~~
cc1plus: all warnings being treated as errors
make[1]: *** [Makefile:491: main.o] Erro 1
make[1]: Saindo do diretório '/home/radxa/rkdeveloptool'
make: *** [Makefile:511: all-recursive] Erro 1
```

Then the code in main.cpp needs to be modified in some way:  

```bash
1490    static inline uint32_t convertChipType(const char* chip) {
1491	    char buffer[5];
1492	    memset(buffer, 0, sizeof(buffer));
1493	    snprintf(buffer, sizeof(buffer), "%s", chip);
1494	    return buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];
1495    }
```

where line 1493 is amended to:

```bash
1493        snprintf(buffer, sizeof(buffer), "%.*s", static_cast<int>(sizeof(buffer) - 1), chip);
```

Re-execute: 

```bash
    make
```




