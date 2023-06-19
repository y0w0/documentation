---
sidebar_label: '串口设置教程'
sidebar_position: 5
---


# USB 转 TTL 线缆使用教程

- 瑞莎将 GPIO 座子上的第 8 (TX)、第 10 (RX) pin 脚默认设为 UART 串口通信接口，以提供串口调试作为初级的调试工具，**该设置适用于瑞莎所有主板**。

## 必要准备

- 瑞莎 ROCK 系列主板
- USB Type C 口电源适配器和 USB Type C 转 USB Type C 线材
- 主机PC（Windows 或者 Linux 系统）

- USB 转 TTL 串口线材
- ![USB to TTL](/img/accessories/600px-Usb2ttl-cable-definition.webp)  

***注意： 这里演示使用的电源适配器配件是官方[Radxa Power PD 30W](../../../accessories/pd_30w) 和 官方的 USB to TTL Cable（如上图所示）***

***注意： 瑞莎 ROCK 系列主板默认波特率为 1500000(1.5Mbps)，请检查您的 USB 转 TTL 线是否支持 1.5Mbps 波特率。 [CP210X](https://www.silabs.com/interface/usb-bridges) 和 [PL2303x](https://www.prolific.com.tw/US/index.aspx) 部分型号有波特率限制，FT232RL 有一些[电源问题](https://forum.radxa.com/t/u-boot-cant-boot-with-serial-console-attached/7684)，请查看指定型号。 我们还测试了一些电缆不能正常工作。 确保选择高质量的。 以下说明使用基于 [CH340_series](http://wch-ic.com/products/CH340.html) 的电缆。***


## 串口连接

- 如下所示连接 USB 转 TTL 串行电缆。 **不需要连接红色供电线**，如图所示。

| ROCK SBC  | 连接    | USB to TTL cable |
|------------|-------|------------------|
| RX(pin 10) | <---> | 绿色线       |
| TX(pin 8)  | <---> | 白色线       |
| GND(pin 6) | <---> | 黑色线       |

- ![USB to TTL connected](/img/accessories/1000px-Serial-connection.webp) 

## 主机串口连接主板

瑞莎 ROCK 系列主板 u-boot 和内核控制台的默认串行设置是：

```bash
baudrate: 1500000
data bit: 8
stop bit: 1
parity  : none
flow control: none
```

### minicom

***支持 Linux***

1. 将串口 USB 端插入主机 PC 后，TTL 端正确插入主板后。请先确定找到串口设备，输入以下命令，查看是否有输出。

```bash
ls /dev/ttyUSB0
```

***注意： 这里串口存在无权限读取的情况.***

***临时处理: 通过 chmod 命令***

```bash
sudo chmod 777 /dev/ttyUSB0
```

***永久处理： 通过将当前用户加入 dialout 组***

```bash
sudo usermod -aG dialout 当前用户名
``` 

2. minicom 是支持宽范围波特率的串口工具。 安装 minicom ：

```bash
sudo apt-get update
sudo apt-get install minicom
```

3. 设置 minicom。首先将当前非 root 或者不使用 sudo 的用户加入 plugdev 组

```bash
sudo usermod -aG plugdev 当前用户名
``` 

4. 编辑 ~/.bashrc，添加一下参数，打开新的终端后即可生效。

```bash
alias minicom='minicom -w -t xterm -l -R UTF-8'
```

5. 创建并且编辑文件 ~/.minirc.radxa，添加下列内容，该处目的是设置 radxa 的配置。

```bash
pu port             /dev/ttyUSB0
pu baudrate         1500000
pu bits             8
pu parity           N
pu stopbits         1
pu rtscts           No
```

6. 现在运行以下命令，即可连接瑞莎主板。 参数 radxa 是为了使用上面的配置。

```bash
minicom radxa
```

***注意***
- 按照上面的正确线序接入 USB 转 TTL 线，然后将 USB 一端插入主机后。命令行输入```dmesg | tail```会输出以下信息：

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

其中，**/dev/ttyUSB0** 即是我们的板子。

### Putty

***支持 Windows***

[Putty](https://www.putty.org/) 是一个很棒的串口工具，支持宽范围的波特率。

1. 将 USB 转 TTL 线材的 USB 一端插入 Windows PC。 查看**设备管理器**，您可以找到 COM 编号。 这里是 COM3。

2. 在 Windows PC 上启动应用程序 Putty。 并按如下方式进行设置：
	- 在左边栏目中选择Session，将串行线路设置为 COM3，波特率设置 1500000，连接类型为 Serial。
	- 在 Saved Sessions 列中写入 radxa，然后按 Save。
	- ![Putty](/img/configuration/Putty-setting-session.webp)  

3. 在左边栏目选择最底下的 Serial，如图设置：
	- ![Putty](/img/configuration/Putty-setting-serial.webp) 

4. 一旦设置完成，点击 Open 打开串口，确保TTL端正确接入之后，接通主板的电源即可。


### Tabby

***支持 Windows、Linux、MacOS***

[Tabby](https://tabby.sh/) 也是一个很棒的串口工具，支持宽范围的波特率。 

1. 打开 Tabby 后，点击图中红色方框，如图所示：
- ![Tabby-Setting-01](/img/configuration/rock-5b-tabby-01.webp)

2. 下拉找到自动识别的串口设备，点击打开即可，如图所示：
- ![Tabby-Setting-02](/img/configuration/rock-5b-tabby-02.webp)

3. 选择波特率 1500000，如图所示：
- ![Tabby-Setting-03](/img/configuration/rock-5b-tabby-03.webp)

4. 显示串口打开即可。 这里存在 Linux 无权限读取串口，请查看该页面下 minicom 的串口权限设置方法。
- ![Tabby-Setting-04](/img/configuration/rock-5b-tabby-04.webp)

### Picocom

***支持 MacOS***

1. 安装 picocom
```bash
% brew install --build-from-source radxa/picocom/picocom
```

2. 开启 picocom
```bash
% picocom -b 1500000 -d 8 /dev/tty.usbserial-2130
```

## FAQs

1. 使用调试控制台时，屏幕上有系统启动信息，但无法使用键盘输入文字？

- 原因之一可能是串口工具设置错误，比如 Hardware Flow Control 等，这里我们应该关闭 Hardware Flow Control。

