---
sidebar_position: 3
---

# ROCK 3C 简介

ROCK 3C 是一款基于 RK3566 SoC 开发的SBC。
搭载了四核 Cortex-A55 ARM 处理器，板载 32 位 LPDDR4 内存，支持 1920x1080@60 HDMI，
MIPI DSI，MIPI CSI，支持麦克风的 3.5 毫米音频插孔，USB 端口，千兆以太网，PCIe 2.0，40 针 IO 扩展头。

![3C top view](/img/rock3/Rock3C-top-800px.webp)![3C bottom view](/img/rock3/Rock3C-bottom-800px.webp)

**提示：主板外观可能因为硬件版本不同而有细微的差别。**

## 主要参数

| 型号                             | ROCK 3 MODEL C                                                                               |
| -------------------------------- | :------------------------------------------------------------------------------------------- |
| SoC<br/><br/>CPU<br/>GPU<br/>NPU | **RK3566**<br/><br/>四核 A55 核心，频率 1.6 GHz<br/>Mail G52                                 |
| 运行内存                         | 1/2/4GB LPDDR4 2112MT/s                                                                      |
| 存储介质                         | eMMC<br/>microSD：最大 128 GB<br/>M.2 2230 NVMe 固态硬盘：最大 1 TB                          |
| 显示输出                         | HDMI：最大分辨率 1920x1080@60<br/>_或_<br/>2-lane MIPI 显示                                  |
| 音频                             | 支持麦克风的 3.5 毫米音频接口<br/>支持最高 24 位 / 96 KHz 声音解码                           |
| 相机                             | 支持 2-lane MIPI 相机，最高支持 8 百万像素的相机                                             |
| 无线连接                         | 板载无线芯片，支持 Wi-Fi 5 (802.11ac) 及蓝牙 5.0                                             |
| USB                              | USB 3.0 接口 x1<br/>USB 2.0 接口 x2<br/>USB 2.0 OTG 接口 x1                                  |
| 以太网                           | 支持千兆以太网。可通过额外购买的 HAT 支持以太网供电（PoE）                                   |
| IO 接口                          | [40 pin GPIO](../hardware/rock3c-gpio)                                                       |
| 电源                             | 支持 Type-C 5V 输入，在使用 SSD 时建议使用 5V/5A 电源输入，未使用 SSD 时建议使用5V3A电源输入 |
| 主板尺寸                         | 85mm x 56 mm                                                                                 |
