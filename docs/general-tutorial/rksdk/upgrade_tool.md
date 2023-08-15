---
sidebar_label: 'Upgrade Tool 烧录教程'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 简介

Rockchip 在 Linux 和 Mac 平台下，除了提供 [rkdeveloptool](rkdevtool#rkdeveloptool) 来进行简单开发外，还可以通过 upgrade_tool 来对主板进行烧录操作。

## upgrade_tool 的获取

您可以通过此链接下载：[点击下载 upgrade_tool](https://dl.radxa.com/tools/linux/Linux_Upgrade_Tool_V2.1.zip) 。

下载完成后，将其解压进入文件夹便可直接使用。

```bash
➜  Linux_Upgrade_Tool tree
.
├── config.ini
├── revision.txt
└── upgrade_tool 
```

## upgrade_tool 的使用

upgrade_tool 工具支持两种运行模式：命令行模式和工具模式。

:::caution 注意
upgrade_tool 工具需要以 sudo 权限运行。
:::

### 使用准备

在烧录系统之前，需要准备对应主板的 [loader](/general-tutorial/rkdevtool#spi-u-boot-镜像及-loader-文件) 文件以及镜像文件，
推荐将他们放在 upgrade_tool 的同一文件夹。

```bash
➜  Linux_Upgrade_Tool tree
.
├── rk3588_spl_loader_v1.08.111.bin
├── rock-5a_debian_bullseye_kde_b17.img
├── config.ini
├── revision.txt
└── upgrade_tool 
```

:::caution 注意
其中镜像文件需要为 **.img 格式**，直接下载的镜像文件需要解压才可正常使用。
:::

请将您想要烧录的主板进入 maskrom 模式，每个主板进入 Maskrom 模式的方式会有所区别，
通用的方法为：移除所有存储介质，连接OTG线并上电，进入 Maskrom 模式后再安装存储介质，
通常还需要按下 Maskrom 按键或短接 Maskrom 引脚，上电之后松开或断开。

### 工具模式

运行 upgrade_tool 不带任何参数则进入工具模式。  
执行后，会有以下输出，需要先进行选择设备：

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool
[sudo] password for rock:
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
List of rockusb connected
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=11     Mode=Maskrom
Found 1 rockusb,Select input DevNo,Rescan press <R>,Quit press <Q>:
```

输入 DevNo 设备号输入回车完成选择，进入工具模式主界面:

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

### 命令行模式

:::caution 注意
命令行模式只支持单台设备操作，如果有多台设备同时连接，指定操作某一台请使用工具模式。
:::

运行 upgrade_tool 直接跟命令参数则进入命令行模式执行，可以支持命令行下直接执行的命令：UF、UL、DI、DB、WL、EF、RD、SD 和 TD。

### 烧录步骤

以下以 ROCK 5A 为例，介绍烧录过程：

1. 刷入对应 loader

<Tabs>
<TabItem value="tool_mode" label="工具模式">

对应命令为：

```bash
ul <bin file name> -noreset
```

输出如下：

```bash
Rockusb>ul rk3588_spl_loader_v1.08.111.bin -noreset
Loading loader...
Support Type:RK3588     Loader ver:1.0b Loader Time:2022-08-30 16:51:13
Upgrade loader ok.
```

</TabItem>
<TabItem value="command_mode" label="命令行模式">

对应命令为：

```bash
sudo ./upgrade_tool ul <bin file name> -noreset
```

输出如下：

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

2. 刷入对应镜像文件

<Tabs>
<TabItem value="tool_mode" label="工具模式">

对应命令为：

```bash
wl 0 <image file name>
```

输出如下：

```bash
Rockusb>wl 0 rock-5a_debian_bullseye_kde_b17.img
Write LBA from file (2%)
```

进度刷写到 100% 并返回工具模式即成功刷入：

```bash
Write LBA from file (100%)
Rockusb>
```

</TabItem>
<TabItem value="command_mode" label="命令行模式">

对应命令为：

```bash
sudo ./upgrade_tool wl 0 <image file name>
```

输出如下：

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool wl 0 rock-5a_debian_bullseye_kde_b17.img
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
Write LBA from file (2%)
```

进度刷写到 100% 并返回终端命令行即成功刷入：

```bash
Write LBA from file (100%)
➜  Linux_Upgrade_Tool
```

</TabItem>
</Tabs>

3. 重启设备

可通过 upgrade_tool 提供的 RD 命令在刷写完镜像后重启设备

<Tabs>
<TabItem value="tool_mode" label="工具模式">

```bash
Rockusb>rd
Reset Device OK.
```

</TabItem>
<TabItem value="command_mode" label="命令行模式">

```bash
➜  Linux_Upgrade_Tool sudo ./upgrade_tool rd
Using /home/rock/Linux_Upgrade_Tool/config.ini
Program Log will save in the /root/upgrade_tool/log/
Reset Device OK.
```

</TabItem>
</Tabs>

### 多设备烧录

多设备烧录仅可通过工具模式实现，具体方法为：

1. 在首个终端进入工具模式时，注意有几个设备连接，每多一个设备便多打开一个终端

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

此处连接了三个设备，便额外打开两个终端

2. 在每个终端选择不同的设备进行入工具模式

:::caution 注意
请注意每个设备对应的 LocationID，在选择设备号时不要选到相同的 LocationID。
:::

终端 1：

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

终端 2：

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

终端 3：

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

3. 按照工具模式的烧录步骤同时操作多个终端对多个终端进行烧录操作
