---
sidebar_label: '开始前准备'
sidebar_position: 5
---

# 准备工作

本指南是为 ROCK 3C 初级使用者编写，可以帮助您了解 ROCK 3C 基本的准备和设置。
当您拿到一块 ROCK 3C 主板时，您首先需要知道印在电路板上面的型号和硬件版本。
我们将尽可能多地介绍板子的信息。

## 必要项

- ROCK 3C 主板

- 以下存储介质之一：  
micro SD 卡，容量大于8GB  
[eMMC 模块](/accessories/emmc_module)，容量大于8GB  

- 电源：  
ROCK 3C 采用 Type-C 接口供电，仅支持 5V 输入。不使用固态硬盘时，建议最低使用 5V/3A 电源适配器；使用固态硬盘时，建议使用 5V/5A 电源适配器。 
**官方推荐使用[ Radxa Power PD30W](/accessories/pd_30w)。**

- USB 键鼠  
ROCK 3C 有 4 个 USB-A 接口，因此可配备全尺寸键盘和鼠标。

- 显示器和 HDMI 线  
ROCK 3C 配备了全尺寸 HDMI 接口。建议使用具有 HDMI 功能的显示器。 
HDMI EDID 显示数据用于确定最佳显示分辨率。在支持 1080p（或 4K）的显示器和电视机上，将选择该分辨率。如果不支持 1080p，则将使用 EDID 报告的下一个可用分辨率。该选定模式适用于大多数显示器/电视机，但并非所有显示器/电视机。

- Micro SD 卡读卡器  
将镜像刷写到 micro SD 卡上。

## 可选项

- USB-A 转 USB-A 线：  
用于 fastboot/adb 命令和 maskrom 模式通信。

- USB 转 TTL 串口线:  
用于[串口调试](/general-tutorial/serial)。

- 以太网线  
ROCK 3C支持通过WIFI或以太网上网。 
以太网电缆用于将ROCK 3连接到本地网络和互联网。

- 摄像头  
ROCK 3C 支持摄像头功能。

- LCD 屏  
ROCK 3C 支持双通道 MIPI DSI 显示功能。 
**官方建议使用[ Radxa Display 8 HD ](/accessories/lcd-8-hd)或[ Radxa Display 10 HD ](/accessories/lcd-10-hd)**。

- 音频线  
可通过扬声器或标准 3.5 毫米插孔的耳机播放音频。

## 系统安装

首先，选择您要使用的[官方镜像](/rock3/official-images)并下载。 

然后，参考[操作系统安装指南](/general-tutorial/os-installation)将镜像刷写到存储介质中。

最后，将系统存储介质：micro SD 卡或 eMMC 模块插入主板上的插口，并通过 type-C 电源适配器供电启动 ROCK 3C。
