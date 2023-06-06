---
sidebar_label: 'UART串口使用教程'
sidebar_position: 1
---

# UART串口通信

瑞莎将GPIO座子上的8(TX)、10(RX)脚默认设为UART串口通信脚，它们可以作为初级的调试工具。

## USB转TTL串口线连接

通常使用USB转TTL线来连接PC和主板，以下是USB转TTL线的pin脚定义：  

![USB to TTL](/img/accessories/600px-Usb2ttl-cable-definition.webp)  

**其中，VCC脚不需要连接，白色RXD连接主板GPIO的第8pin(TX)脚，绿色TXD连接主板GPIO的第10pin(RX)脚，GND脚接主板GPIO的GND脚，通常接在第6脚。  
连接状态如图所示：**  

![USB to TTL connected](/img/accessories/1000px-Serial-connection.webp)  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows端" label="Windows端" default>

## Windows端

将USB转TTL线的USB端连接windows，在设备管理器中查看USB serial端口号。  

使用串口调试工具，如Putty、SecureCRTPortable和MobaXterm等，以下以Putty为例，其他工具的操作方式类似。

在启动Putty之后，在session选项卡的Serial line中选择在设备管理器中查询到的USB serial端口号，如COM3，速率(Speed)填入1500000， 
连接类型(connection type)选择serial：  

![Putty](/img/configuration/Putty-setting-session.webp)  

如果选择Connection-serial，只需填入速率(波特率)为1500000，如图：  

![Putty](/img/configuration/Putty-setting-serial.webp)  

设置完成后点击打开(open)，给主板通电即可看到串口输出。
</TabItem>
<TabItem value="Linux端" label="Linux端" default>

## Linux端

Linux端通常使用支持宽范围波特率的Minicom。  
安装Minicom：  

```bash
   sudo apt-get update
   sudo apt-get install minicom
```

在通过USB转TTL线连接电脑与主板并启动后，在kernel的`dmesg | tail`应该会展示像如下的信息：  

```bash
   [1036835.654076] usb 1-6.4.3: new full-speed USB device number 103 using xhci_hcd
   [1036835.755730] usb 1-6.4.3: New USB device found, idVendor=0403, idProduct=6001
   [1036835.755732] usb 1-6.4.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0
   [1036835.755733] usb 1-6.4.3: Product: USB <-> Serial
   [1036835.755734] usb 1-6.4.3: Manufacturer: FTDI
   [1036835.756728] ftdi_sio 1-6.4.3:1.0: FTDI USB Serial Device converter detected
   [1036835.756750] usb 1-6.4.3: Detected FT232BM
   [1036835.757195] usb 1-6.4.3: FTDI USB Serial Device converter now attached to ttyUSB0
```

其中，**/dev/ttyUSB0**即是我们的板子。

### Minicom设置

首先将当前用户添加到plugdev组，以便在没有sudo或root的情况下使用minicom。  

```bash
  sudo usermod -a -G plugdev $USER
```

编辑你的~/.bashrc，添加以下一行，并添加一些默认参数  

```bash
   alias minicom='minicom -w -t xterm -l -R UTF-8'
```

重新打开一个终端以启用设置。  

创建并编辑文件~/.minirc.radxa，添加以下内容：
```bash
   pu port             /dev/ttyUSB0
   pu baudrate         1500000
   pu bits             8
   pu parity           N
   pu stopbits         1
   pu rtscts           No
```

现在运行minicom radxa来使用上面的配置并连接到当前连接板子的串行控制台。
</TabItem>

<TabItem value="Mac端" label="Mac端" default>

## Mac端

1. 下载并安装[PL2303 Mac OS X Driver](http://www.prolific.com.tw/UserFiles/files/PL2303HXD_G_Mac%20Driver_v2_1_0_20210311.zip)  
2. 安装[CoolTerm](https://freeware.the-meiers.org/previous/CoolTermMacUniversal147.zip)  
3. 点击选项菜单，按如下方式设置：  
>
	Port: 选择 usbserial-xxx
	Baud rate: 选择 custom 并输入 1500000
	不用选择流量控制

![mac serial](/img/configuration/Coolterm-serialport-setting.webp)  

点击保存图标，将配置保存为radxa，并点击连接图标。  
启动连接的板子，你会看到串行控制台的输出：  
![mac serial output](/img/configuration/Coolterm-output.webp)  

</TabItem>

</Tabs>

## 常见问题

输出乱码：  
首先查看波特率是否设置为1500000，再查看串口线是否接触良好，可以通过更换串口线或板子来排查是哪一方的问题。  

无输出：  
通常是由于线序错误，再者可能是串口线接到高电压的pin脚被烧坏。
