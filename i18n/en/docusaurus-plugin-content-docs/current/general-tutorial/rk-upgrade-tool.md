---
sidebar_label: 'Upgrade Tool Flash Guide'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Rockchip provides [rkdeveloptool](rkdevtool#rkdeveloptool) for simple development on Linux and Mac platforms, and upgrade_tool for flash OS on boards.

## Get upgrade_tool

You can download it via this link: [click to download upgrade_tool](https://dl.radxa.com/tools/linux/Linux_Upgrade_Tool_V2.1.zip).

Once downloaded, unzip it into a folder and use it directly.

```bash
➜  Linux_Upgrade_Tool tree
.
├── config.ini
├── revision.txt
└── upgrade_tool 
```

## Use upgrade_tool

The upgrade_tool tool supports two modes of operation: command line mode and interactive mode.

:::caution 
The upgrade_tool tool needs to be run with sudo privileges.
:::

### Preparation

Before flashing the system, you need to prepare the [loader](/general-tutorial/rkdevtool#spi-u-boot-image-and-loader-file) file and the image file of the corresponding board.
It is recommended to put them in the same folder as upgrade_tool.

```bash
➜  Linux_Upgrade_Tool tree
.
├── xxx.bin  # loader file
├── xxx.img  # image file
├── config.ini
├── revision.txt
└── upgrade_tool 
```

:::caution
The image file needs to be in **.img format**, and the directly downloaded image file needs to be unzipped to work properly.
:::

Please put the board you want to flash into maskrom mode, the way to enter maskrom mode will be different for each motherboard.  
The common method is to remove all storage media, connect the OTG cable and power up the device, enter Maskrom mode and then install the storage media.
Usually it is also necessary to press the Maskrom button or short the Maskrom pin, and then release or disconnect it after powering up.

### Interactive Mode

Running upgrade_tool without any parameters enters tool mode.  
After execution, the following output will be given, and you need to select the device first:

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool
[sudo] password for rock:
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=11     Mode=Maskrom
Found 1 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:
```

Enter DevNo device number enter enter to complete the selection, enter the main interface of the tool mode:.

```bash
Found 1 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:1

---------------------Tool Usage ---------------------
Help:             H
Quit:             Q
Version:          V
Clear Screen:     CS
------------------Upgrade Command ------------------
ChooseDevice:           CD
ListDevice:             LD
SwitchDevice:           SD
UpgradeFirmware:        UF <Firmware> [-noreset]
UpgradeLoader:          UL <Loader> [-noreset] [FLASH|EMMC|SPINOR|SPINAND]
DownloadImage:          DI <-p|-b|-k|-s|-r|-m|-u|-t|-re image>
DownloadBoot:           DB <Loader>
EraseFlash:             EF <Loader|firmware>
PartitionList:          PL
WriteSN:                SN <serial number>
ReadSN:                 RSN
ReadComLog:             RCL <File>
CreateGPT:              GPT <Input Parameter> <Output Gpt>
SwitchStorage:          SSD
----------------Professional Command -----------------
TestDevice:             TD
ResetDevice:            RD [subcode]
···
WriteLBA:               WL  <BeginSec> <File>
EraseLBA:               EL  <BeginSec> <EraseCount>
EraseBlock:             EB <CS> <BeginBlock> <BlokcLen> [--Force]
RunSystem:              RUN <uboot_addr> <trust_addr> <boot_addr> <uboot> <trust> <boot>
-------------------------------------------------------

Rockusb>
```

### Command line Mode

:::caution
Command line mode only supports single device operation. If there are multiple devices connected at the same time and you want to operate one of them, please use interactive mode.
:::

Running upgrade_tool directly with the command parameter will enter the command line mode, and it can support commands that can be executed directly from the command line: UF, UL, DI, DB, WL, EF, RD, SD and TD.

### Flashing Steps

The following describes the flashing process using the ROCK 5A as an example:

1. Flash the corresponding loader

<Tabs>
<TabItem value="tool_mode" label="Interactive Mode">

The corresponding command is:

```bash
ul <bin file name> -noreset
```

The output is as follows:

```bash
Rockusb>ul rk3588_spl_loader_v1.08.111.bin -noreset
Loading loader...
Support Type:RK3588     Loader ver:1.0b Loader Time:2022-08-30 16:51:13
Upgrade loader ok.
```

</TabItem>
<TabItem value="command_mode" label="Command line Mode">

The corresponding command is:

```bash
sudo ./upgrade_tool ul <bin file name> -noreset
```

The output is as follows:

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool ul rk3588_spl_loader_v1.08.111.bin -noreset
[sudo] password for rock:
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
Loading loader...
Support Type:RK3588     Loader ver:1.0b Loader Time:2022-08-30 16:51:13
Upgrade loader ok.
```

</TabItem>
</Tabs>

2. Flash the corresponding image file

<Tabs>
<TabItem value="tool_mode" label="Interactive Mode">

The corresponding command is:

```bash
wl 0 <image file name>
```

The output is as follows:

```bash
Rockusb>wl 0 rock-5a_debian_bullseye_kde_b17.img
Write LBA from file (2%)
```

Progress flashing to 100% and return to interactive mode is successful flashing:

```bash
Write LBA from file (100%)
Rockusb>
```

</TabItem>
<TabItem value="command_mode" label="Command line Mode">

The corresponding command is:

```bash
sudo ./upgrade_tool wl 0 <image file name>
```

The output is as follows:

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool wl 0 rock-5a_debian_bullseye_kde_b17.img
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
Write LBA from file (2%)
```

The progress is flashed to 100% and returns to the terminal command line:

```bash
Write LBA from file (100%)
➜  Linux_Upgrade_Tool
```

</TabItem>
</Tabs>

3. Reboot device

You can reboot the device after flashing the image by using the RD command provided by upgrade_tool.

<Tabs>
<TabItem value="tool_mode" label="Interactive Mode">

```bash
Rockusb>rd
Reset Device OK.
```

</TabItem>
<TabItem value="command_mode" label="Command line Mode">

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool rd
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
Reset Device OK.
```

</TabItem>
</Tabs>

### Multi-device flash

Multi-device flashing can only be achieved through the interactive mode by:

1. When the first terminal enters the tool mode, pay attention to how many devices are connected, 
and open one more terminal for each additional device.

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=21     Mode=Maskrom
DevNo=2 Vid=0x2207,Pid=0x350b,LocationID=22     Mode=Maskrom
DevNo=3 Vid=0x2207,Pid=0x350b,LocationID=23     Mode=Maskrom
Found 3 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:
```

Here three devices are connected, so two additional terminals are opened.

2. Selection of different equipment for interactive mode at each terminal

:::caution
Please pay attention to the LocationID corresponding to each device and do not select the same LocationID when selecting the device number.
:::

Terminal 1：

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=21     Mode=Maskrom
DevNo=2 Vid=0x2207,Pid=0x350b,LocationID=22     Mode=Maskrom
DevNo=3 Vid=0x2207,Pid=0x350b,LocationID=23     Mode=Maskrom
Found 3 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:1
Rockusb>
```

Terminal 2：

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=21     Mode=Maskrom
DevNo=2 Vid=0x2207,Pid=0x350b,LocationID=22     Mode=Maskrom
DevNo=3 Vid=0x2207,Pid=0x350b,LocationID=23     Mode=Maskrom
Found 3 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:2
Rockusb>
```

Terminal 3：

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=21     Mode=Maskrom
DevNo=2 Vid=0x2207,Pid=0x350b,LocationID=22     Mode=Maskrom
DevNo=3 Vid=0x2207,Pid=0x350b,LocationID=23     Mode=Maskrom
Found 3 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:3
Rockusb>
```

3. Operate multiple terminals at the same time to flash multiple terminals according to the burning procedure of the tool mode.
