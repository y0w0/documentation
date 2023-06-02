---
sidebar_label: '概览'
sidebar_position: 3
---

# ROCK 3C简介

ROCK 3C是一款基于RK3566 SoC开发的SBC。 
搭载了四核Cortex-A55 ARM处理器，板载32位3200Mb/s LPDDR4，支持HDMI 2.0，
MIPI DSI，MIPI CSI，支持麦克风的3.5毫米音频插孔，USB端口，GbE LAN，PCIe 2.0，40针IO扩展头。

![3C top view](/img/rock3/Rock3C-top-800px.webp)![3C bottom view](/img/rock3/Rock3C-bottom-800px.webp)  

**提示：主板外观可能因为硬件版本不同而有细微的差别。**

## 主要参数

|型号|ROCK 3 MODUL 3|
|-|:-|
|SoC<br/><br/>CPU<br/>GPU<br/>NPU|**RK3566**<br/><br/>四核A55核心，频率1.6GHz<br/>Mail G52<br/>0.8 TOPS NPU|
|运行内存|1/2/4/8GB LPDDR4 2112MT/s|
|存储介质|eMMC<br/>micro SD卡：最高支持128GB<br/>M.2 2230 SSD：最高支持1TB NVME固态|
|显示输出|HDMI 2.0最高支持1920x1080@60<br/>2 lanes MIPI显示<br/>*注意：HDMI与MIPI不能同时显示*|
|音频|支持麦克风的3.5毫米音频接口<br/>支持最高24位/96KHz声音解码|
|相机|支持2 lanes MIPI相机，最高支持800MP的相机|
|无线连接|板载WiFi蓝牙芯片支持802.11 ac WiFi 5/蓝牙 5.0|
|USB|USB OTG接口x1，位于中间座子的上方接口，硬件切换host/device模式<br/>USB 3.0接口x1<br/>USB 2.0接口x2|
|以太网|支持以太网供电（PoE）的GbE局域网，不过需要额外的HAT来为PoE供电|
|IO接口|40 pin扩展<br/>5 x UART<br/>1 x SPI总线<br/>2 x I2C总线<br/>6 x PWM<br/>1 x ADC<br/>6 x GPIO<br/>2 x 5V DC输出<br/>1 x 3.3V DC输出|
|其他|RTC：选装RTC电池座子|
|电源|支持Type-C 5V输入，在使用SSD时建议使用5V/5A电源输入，未使用SSD时建议使用5V3A电源输入|
|主板尺寸|85mm x 56 mm|
