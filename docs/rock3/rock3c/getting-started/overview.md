---
sidebar_label: '概览'
sidebar_position: 3
---

# ROCK 3C 简介

ROCK 3C 是一款基于 RK3566 SoC 开发的SBC。 
搭载了四核 Cortex-A55 ARM 处理器，板载 32 位 3200Mb/s LPDDR4，支持 HDMI 2.0，
MIPI DSI，MIPI CSI，支持麦克风的 3.5 毫米音频插孔，USB 端口，GbE LAN，PCIe 2.0，40 针 IO 扩展头。

![3C top view](/img/rock3/Rock3C-top-800px.webp)![3C bottom view](/img/rock3/Rock3C-bottom-800px.webp)  

**提示：主板外观可能因为硬件版本不同而有细微的差别。**

## 主要参数

|型号|ROCK 3 MODEL C|
|-|:-|
|SoC<br/><br/>CPU<br/>GPU<br/>NPU|**RK3566**<br/><br/>四核 A55 核心，频率 1.6 GHz<br/>Mail G52<br/>0.8 TOPS NPU|
|运行内存|1/2/4GB LPDDR4 2112MT/s|
|存储介质|eMMC<br/>micro SD 卡：最高支持 128 GB<br/>M.2 2230 SSD：最高支持 1TB NVME 固态|
|显示输出|HDMI 2.0 最高支持 1920x1080@60<br/>2 lanes MIPI 显示<br/>*注意：HDMI 与 MIPI 不能同时显示*|
|音频|支持麦克风的 3.5 毫米音频接口<br/>支持最高 24 位 / 96 KHz  声音解码|
|相机|支持 2-lanes MIPI 相机，最高支持 800MP 的相机|
|无线连接|板载 WiFi 蓝牙芯片支持 802.11 ac WiFi 5/蓝牙 5.0|
|USB|USB OTG 接口x1，位于中间座子的上方接口，硬件切换 host/device 模式<br/>USB 3.0 接口x1<br/>USB 2.0 接口x2|
|以太网|支持以太网供电（PoE）的 GbE 局域网，不过需要额外的 HAT 来为 PoE 供电|
|IO 接口|40 pin 扩展<br/>5 x UART<br/>1 x SPI 总线<br/>2 x I2C 总线<br/>6 x PWM<br/>1 x ADC<br/>6 x GPIO<br/>2 x 5V DC 输出<br/>1 x 3.3V DC 输出|
|其他|RTC：选装 RTC 电池座子|
|电源|支持 Type-C 5V 输入，在使用 SSD 时建议使用 5V/5A 电源输入，未使用 SSD 时建议使用5V3A电源输入|
|主板尺寸|85mm x 56 mm|
