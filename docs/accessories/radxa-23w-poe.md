---
sidebar_label: 'Radxa 23W PoE HAT'
sidebar_position: 33
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Radxa 23W PoE HAT

![Radxa 23W PoE HAT](/img/accessories/poe-hat/23w-poe.webp)

Radxa 23W PoE HAT 是专为树莓派、Radxa ROCK 3 和 4 系列以及 Jetson Nano 设计的 HAT 配件。  
通过 23W PoE HAT，您可以使用支持以太网供电的网络为树莓派、ROCK 3 和 4 系列或 Jetson Nano 供电； 
要使用该产品，所连接的网络需要安装电源设备。

<Tabs>
<TabItem value="specs" label="硬件介绍">

## 产品支持

|型号|支持的产品|
|:-:|-|
|F3|Raspberry Pi 3B+，Raspberry Pi 4，ROCK X，ROCK 3A，ROCK 3C，ROCK 4C+，Jetson Nano|
|F3L|支持产品与 F3 相同， 导出 40 PIN GPIO 功能|
|F4|ROCK 4A，ROCK 4B，ROCK 4A+，ROCK 4B+，ROCK 4SE|
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
