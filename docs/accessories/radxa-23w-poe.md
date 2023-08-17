---
sidebar_label: 'Radxa 23W PoE HAT'
sidebar_position: 33
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Radxa 23W PoE HAT

Radxa 23W PoE HAT 是专为树莓派、Radxa ROCK 3 和 4 系列以及 Jetson Nano 设计的 HAT 配件。 
通过 23W PoE HAT，您可以使用支持以太网供电的网络为树莓派、ROCK 3 和 4 系列或 Jetson Nano 供电； 
要使用该产品，所连接的网络需要安装电源设备。

<Tabs>
<TabItem value="Introduction" label="简介">

## 实物图

![Radxa 23W PoE HAT](/img/accessories/poe-hat/23w-poe.webp)

## 产品支持

|型号|支持的产品|
|:-:|-|
|F3|Raspberry Pi 3B+, Raspberry Pi 4, ROCK Pi X, ROCK 3A, ROCK 3C, ROCK 4C+, Jetson Nano|
|F3L|支持产品与 F3 相同， 导出 40 PIN GPIO 功能|
|F4|ROCK Pi 4A / 4B / 4A+ / 4B+ / 4SE|
|F4L|支持产品与 F4 相同， 导出 40 PIN GPIO 功能|

F3 和 F4 的区别在于：  
F3 和 F4 使用不同的 GPIO 控制风扇。F4 使用 ADC 进行温度检测，而 F3 使用 DS18B20。 
F3 和 F4 使用不同的 PoE 引脚。如下图所示：  
![Difference between F3 and F4](/img/accessories/poe-hat/23w-poe-f3f4.webp)

Fx 和 FxL 的区别：  
FxL 有 40 引脚 GPIO 引脚输出，您也可以使用 40 引脚 GPIO，但使用 Fx 时则不行。如下图所示：  
![Fx and FxL](/img/accessories/poe-hat/23w-poe-l.webp)

## 特性

- 802.3at 功率高达 23W（5V/4.6A）
- PWM 控制风扇，最高可达 12000RPM
- 温度传感器 DS18B20
- 可选支持 40 PIN GPIO 接口的型号
- 与 Radxa ROCK、Raspberry Pi 3B+ 和 Raspberry Pi 4 兼容
- 设计简洁，将风扇和大变压器隐藏在内部
- 用于识别 HAT 和驱动器探针的 EEPROM

</TabItem>

<!--

<TabItem value="tutorial" label="Tutorial">

## Necessary Accessories

An Ethernet cable  
Power-sourcing equipment for an 802.3af or 802.3at Power over Ethernet network

## Fan Control

We provide an install script to help you get the PoE fan control tool that works both in Raspberry Pi 3B+/4B and ROCK 4 series.  
Run the following command to get the script:

```bash
curl -sL https://rock.sh/get-rockpi-poe | sudo -E bash -
```

Turn the fan on or off by systemctl:

```bash
sudo systemctl start rockpi-poe.service
sudo systemctl stop rockpi-poe.service
```

Edit `/etc/rockpi-poe.conf` to set up the temperature of the fan speed level, take it to effect by below command:

```bash
sudo systemctl restart rockpi-poe.service
```

## Manual installation

If you have trouble installing software using our script, try the manual installation.

1. Enable hardware resources

For speed control and temperature detection, we need to ensure that some hardware resources are available, such as PWM and ADC. Since ROCK Pi and Raspberry Pi use different resources, they will be explained below.

1.1 ROCK Pi

If you are using the official system, please edit /boot/hw_intfc.conf to change intfc:pwm0=off and intfc:pwm1=off into intfc:pwm0=on and intfc:pwm1=on. If you are using another system, please refer to the distribution documentation to open PWM0 and PWM1.

1.2 Raspberry Pi

If you are using Raspbian, you can open 1-Wire with raspi-config and the path is Interfacing Options -> 1-Wire. Raspbian turns on PWM1 by default. If you are using another system, please refer to the distribution documentation to open 1-Wire and PWM1.

2. Install GPIO control library

2.1 ROCKP Pi

If you are using the official system, please install libmraa-rockpi4 from testing repo of Radxa APT. If you are using another system, please download mraa and build.

2.2 ROCKP Pi

If you are using Raspbian, you can install python3-rpi.gpio via apt. If you are using another system, please download raspberry-gpio-python and build.

3. Download package and install

3.1 ROCK Pi

```bash
wget https://cos.setq.me/rockpi/deb/rockpi-poe-0.13.deb
```

If you are using a debian based system, you can install it through dpkg. If you are using another system, extract the file to the root directory.

3.2 Raspberry Pi

```bash
wget https://cos.setq.me/rockpi/deb/raspi-poe-0.13.deb
```

If you are using a debian based system, you can install it through dpkg. If you are using another system, extract the file to the root directory.

4. Enable service

```bash
   sudo systemctl enable rockpi-poe.service
```

That's all the installation script (https://rock.sh/get-rockpi-poe) do.

</TabItem>

-->

<TabItem value="hardware" label="Hareware Information">

## F3/F3L Pin Out

用于 Raspberry Pi 3B+/4/Jetson Nano ROCK 3A 3C 和 4C+ 的 PoE HAT。

<div className='gpio_style'>

|Description|Function|Pin#|Pin#|Function|Description|
|-|-|-|-|-|-|
|||1 |2 |||
|||3 |4 |||
|||5 |6 |||
|get data from DS18B20|BCM4|7 |8 |||
|||9 |10|||
|||11|12|||
|||13|14|||
|enable/disable fan motor driver chip|BCM22|15|16|||
|||17|18|||
|||19|20|||
|||21|22|||
|||23|24|||
|||25|26|ADC_IN0|Get ADC value to get the temperature value|
|connect to EEPROM SDA pin|I2C0_SDA|27|28|I2C0_SCL|connect to EEPROM SCL pin|
|||29|30|||
|||31|32|||
|control fan speed|PWM1|33|34|||
|||35|36|||
|||37|38|||
|||39|40|||

</div>

## F4/F4L Pin Out

用于 ROCK 4 系列的 PoE HAT。 

<div className='gpio_style'>

|Description|Function|Pin#|Pin#|Function|Description|
|-|-|-|-|-|-|
|||1 |2 |||
|||3 |4 |||
|||5 |6 |||
||GPIO2_B3|7 |8 |||
|||9 |10|||
|||11|12|||
|control fan speed|PWM1|13|14|||
||GPIO4_C5|15|16|GPIO4_D2|enable/disable fan motor driver|
|||17|18|||
|||19|20|||
|||21|22|||
|||23|24|||
|||25|26|ADC_IN0|Get ADC value to get the temperature value|
|connect to EEPROM SDA pin|I2C2_SDA|27|28|I2C2_SCL|connect to EEPROM SCL pin|
|||29|30|||
|||31|32|||
|||33|34|||
|||35|36|||
|||37|38|||
|||39|40|||

</div>

## 2D 文件

您可以在 [Radxa 23W PoE HAT 2D 文件](https://dl.radxa.com/accessories/poe-hat/rockpi_poe_hat_V1.2_20190521.dwg) 上下载 2D 文件（.dwg 格式）。

</TabItem>
</Tabs>
