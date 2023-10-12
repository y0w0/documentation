---
sidebar_label: "Radxa Display 10 FHD"
sidebar_position: 4
---

# Radxa Display 10 FHD

![Radxa Display 10 FHD](/img/accessories/display-10-fhd.webp)

## 概述

Radxa Display 10 FHD 支持 10 点触摸，并拥有 10.1 英寸（10:16）显示区域，分辨率为 1200 × 1920 像素。

其特点如下：

- 尺寸：10.1英寸
- 符合 RoHS 设计标准
- 外形尺寸：155毫米（高）x 246.16毫米（宽）x 5.95毫米（深）
- 显示区域：135.36毫米（宽）x 216.58毫米（高）
- 像素数量：1200（水平）x 1920（垂直）像素
- 像素间距：0.0564毫米（水平）x 0.1692毫米（垂直）
- 像素排列：RGB垂直条纹
- 颜色滤光阵列：RGB垂直条纹
- 背光：白色LED
- 接口：MIPI
- 内置重力感应器

## 触摸面板

Radxa Display 10 FHD 的触摸面板是通过 GT9271 实现，这是一种专为 10.1 英寸面板设计的新一代 10 点电容触摸 IC。

GT9271 提供标准的I2C通信接口，通过 SCL 和 SDA 线与主 CPU 进行通信。在系统内，GT9271 一直作为从设备运行，所有通信动作由主 CPU 发起。为确保通信的稳定性，建议将通信速度配置为 400Kbps 或更低。GT9271 提供两组 I2C 从地址，分别为 0xBA / 0xBB 和 0x28 / 0x29，可以根据需要选择其中之一。

## 重力传感器

Radxa Display 10 FHD 集成了 SC7A20 IC，这是一款高精度的 12 位数字三轴加速度计。该芯片在测量性能方面表现出色，不仅提高了测量精度，还嵌入了额外的功能。此外，其低功耗和紧凑的尺寸在实际应用中具有明显的优势。

SC7A20采用 I2C 通信协议，与其他设备建立连接，通过中断机制实现高效的数据传输。这个机制简化了数据采集和处理过程。在硬件连接方面，SC7A20 利用 MIPI DSI 40 引脚接口的第 4 和第 6 引脚来实现中断功能，确保传感器中断信号的有效传播，并向系统提供即时的事件响应能力。

SC7A20 的 I2C 地址分别为 0x18 和 0x19，它利用 MIPI DSI 40 引脚接口的第 27 和第 28 引脚来传输信号。

## 信号定义

| PIN | Name     | Description                                | PIN | Name     | Description                            |
| --- | -------- | ------------------------------------------ | --- | -------- | -------------------------------------- |
| 1   | NC       | No connection                              | 21  | MIPI_3P  | +MIPI differential data input          |
| 2   | VDD      | Power Voltage for digital circuit 3.3V     | 22  | GND      | Ground                                 |
| 3   | VCCIO    | Power Voltage for digital circuit 1.8V[^1] | 23  | GND      | Ground                                 |
| 4   | INT1     | INT 1                                      | 24  | TP_RESET | External interrupt to the Host Reset   |
| 5   | Reset    | Global Reset Pin 1.8V[^1]                  | 25  | TP_VCC   | Power Voltage for digital circuit 3.3V |
| 6   | INT2     | INT 2                                      | 26  | TP_INT   | External Low is active                 |
| 7   | GND      | Ground                                     | 27  | TP_SDA   | I2C data input and output              |
| 8   | MIPI_0N  | -MIPI differential data input              | 28  | TP_SCL   | I2C clock input                        |
| 9   | MIPI_0P  | +MIPI differential data input              | 29  | GND      | Ground                                 |
| 10  | GND      | Ground                                     | 30  | GND      | Ground                                 |
| 11  | MIPI_1N  | -MIPI differential data input              | 31  | VDD      | Power Voltage for digital circuit 3.3V |
| 12  | MIPI_1P  | +MIPI differential data input              | 32  | VDD      | Power Voltage for digital circuit 3.3V |
| 13  | GND      | Ground                                     | 33  | GND      | Ground                                 |
| 14  | MIPI_CKN | -MIPI differential clock input             | 34  | GND      | Ground                                 |
| 15  | MIPI_CKP | +MIPI differential clock input             | 35  | LED-     | Power for LED backlight (Cathode)      |
| 16  | GND      | Ground                                     | 36  | LED-     | Power for LED backlight (Cathode)      |
| 17  | MIPI_2N  | -MIPI differential data input              | 37  | NC       | No connection                          |
| 18  | MIPI_2P  | +MIPI differential data input              | 38  | NC       | No connection                          |
| 19  | GND      | Ground                                     | 39  | LED+     | Power for LED backlight (Anode)        |
| 20  | MIPI_3N  | -MIPI differential data input              | 40  | LED+     | Power for LED backlight (Anode)        |

[^1]: The 3 PIN and 5 PIN should be the same as 1.8v or 3.3v

## 机械规格

![Radxa Display 8 HD](/img/accessories/display_10_fhd_01.webp)
