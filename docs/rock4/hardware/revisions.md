---
sidebar_label: '硬件修订信息'
sidebar_position: 20
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 修订详情

您可以在此查询 ROCK 4 系列主板不同硬件版本之间的差异。

<Tabs>
<TabItem value="ROCK_4SE" label="ROCK 4SE">

:::note
ROCK 4SE 以前的的乘车名称是 ROCK Pi B。
:::

- **V1.53:**  
更名为 ROCK 4SE。 
PD 协议芯片改为 12V 输出和 24K。 
删除 R1608。 
删除了 OTG 电路。 
更新了丝印至最新版本。

- **V1.52:**  
增加了 BOM_ID 电路。

- **V1.51:**  
为 CPU 和 GPU 电源电路添加了两个电阻和电容。 
为 EFUSE 添加了两个点，一个用于 EFUSE，另一个用于 1.8V。

</TabItem>
<TabItem value="ROCK_4C_Plus" label="ROCK 4C+">

- **V1.2:**  
初始版本。

- **V1.4:**  
移除 M.2 连接座。

</TabItem>
<TabItem value="ROCK_4AB_Plus" label="ROCK 4A/B+">

有两点需要澄清：  
&nbsp;&nbsp;&nbsp;&nbsp;ROCK 4A+ 和 4B+ 的版本号是在 ROCK 4A 和 4B 的基础上增加的。  
&nbsp;&nbsp;&nbsp;&nbsp;从 V1.6 开始，ROCK 4A+ 和 4B+ 共用同一块 PCB 设计（ROCK Pi 4 Plus），4A+ 上没有贴 wifi/bt 模块且 RJ45 没有 PoE 功能。 

- **V1.73:**  
优化耳机插孔的生产尺寸以便于生产。 
***<font color='red'>2022-08-05 之后生产的电路板将不贴 SPI。这包括未来的修订版。</font>***

- **V1.72:**  
以太网 phy 由 RTL8211E 更改为 RLT8211F（无需更改软件）。 
QC/PD 协议触发芯片更改为 CH224D。

- **V1.6:**  
通过 SoC ADC 增加 USB C 输入电压测量功能。  
增加 EEPROM（BL24C16A），用于存储 MAC 地址和序列号。  
eMMC 座子改为板载芯片。  
默认焊接三个按钮：*1: Maskrom 2: Reset 3: Recovery*  
![ROCK 4C+ Button](/img/rock4/rock4b+-button.webp)

</TabItem>
<TabItem value="ROCK_4AB" label="ROCK 4A/B">

ROCK 4A 和 4B 共用同一块 PCB 设计（ROCK Pi 4），4A 上没有预贴 WiFi/BT 模块且其 RJ45 没有 PoE 功能。 

- **V1.5:**  
以太网 phy 芯片从 RTL8211E 更改为 RLT8211F（无需更改软件）。  
更改耳机检测电路，默认使用 HP 插孔中的麦克风。  
QC/PD 协议触发芯片更改为 CH224D。 

- **V1.4:**  
将 USB 3.0 OTG 的 Device/Host 标签更改为简单的 L/H。  
增加外置 Wifi 天线选项，默认不焊接。  
将耳机脚位改为通孔脚位。  
将用户状态 LED 指示灯从红色改为蓝色。  
默认贴 4MB（32Mbit）SPI 闪存，以便将来支持 SPI 启动。

- **V1.3:**  
使用 Type-C 接口供电，增加了 QC&PD 触发 IC。  
LPDDR4 1/2/4GB内存。  
使用兼容 odroid 的 eMMC 插槽作为存储设备。  
板载 Wifi 天线。

</TabItem>
<TabItem value="ROCK_4C" label="ROCK 4C">

已停产，仅提供技术支持，其他 ROCK 4 系列产品可供选购。

- **V1.2:**  
改用更紧凑的 micro HDMI 接口。

</TabItem>
</Tabs>
