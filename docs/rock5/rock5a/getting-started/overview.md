---
sidebar_label: '概览'
sidebar_position: 10
---

# 简介

Radxa ROCK 5 Model A (简称ROCK 5A)是一款外形紧凑、具有各种领先的功能特性且扩展性极佳的单板机(SBC)。
ROCK 5A对于创客、物联网玩家、业余爱好者、游戏玩家以及个人电脑用户等需要一个指定的高性能高可靠性的平台的人来说是一个理想的选择。 
Radxa为ROCK 5A搭载了以下容量的LPDDR4X内存选项：  
4GB  
8GB  
16GB  

![ROCK5A Interface](/img/rock5a/rock5a_interfaces.webp)

**_提示:_ 实际的电路布局和元器件位置可能因为版本不同而产生变化，但是主要元件的类型和位置基本不会发生改变。**

# 尺寸规格

![ROCK5A Dimension Top](/img/rock5a/rock5a-dimension-top.webp)
![ROCK5A Dimension Bottom](/img/rock5a/rock5a-dimension-bottom.webp)

# 电气规格

## 需求电源

ROCK 5A支持包括固定电压和智能协议电压的各种电源技术：  

- USB Type-C™ PD 2.0协议： 9V/2A, 12V/2A, 15V/2A, 20V/2A.
- 骁龙® QC™ 2.0 QC 3.0/2.0 协议： 9V/2A, 12V/2A
- USB Type-C接口的 5.2V 至 20V 电压
- GPIO 2 & 4 针脚支持5V电压输出

在使用SSD的情况下推荐至少能输出30W的适配器，不使用SSD时推荐适配器至少输出24W。

### GPIO 电压

| GPIO       | 电压 | 最高 |
| ---------- | ------------- | --------- |
| 所有的GPIO   | 3.3V          | 3.63V     |
| SARADC_IN5 | 3.3V          | 3.3V     |

## 工作环境

ROCK 5A的设计工作温度为0°C到50°C。  

这一温度范围是根据Arm big.LITTLE技术对特定任务自动选择处理器内核的使用情况来确定的，其结果是发热和用户操作体验的最优组合。  

ROCK 5A基于一套能长时间稳定运行且以效率为核心的高性能移动芯片组而设计。 其发热量随着性能释放以及工作负荷的增加而增加， 
在浏览网页、编辑文本及听音乐等低负荷使用场景时，SoC将会自动选择最少的处理器核心或硬件加速器来减少发热， 以便于在需要时有新任务需求时能释放足够的性能。 

为保证可靠性，本SoC(Rk3588S)在标准频率下的最高工作温度预设为80°C，如果需要ROCK 5A持续高负荷工作，就需要使用外部辅助散热，如风扇、散热器，在温度不超过峰值的情况下，处理器可以以标准频率持续运行。  

# 外设

## GPIO接口

ROCK 5A提供了一个40pin针脚的GPIO座子，与市场上大多数的SBC配件兼容。  
**_提示:_ 实际兼容情况以使用为准。**

## GPIO其他功能

| Function6 | Function5 |  Function4 |  Function3 | Function2 | Function1 | Pin# | Pin# |  Function1  | Function2 |  Function3 |  Function4 | Function5 | Function6 | Function7 |
|-----------|-----------|:----------:|:----------:|:---------:|:---------:|:----:|:----:|:-----------:|:---------:|:----------:|:----------:|-----------|-----------|-----------|
|           |           |            |            |           | +3.3V     | 1    | 2    | +5.0V       |           |            |            |           |           |           |
|           |           | UART6_RX   | SPI4_MISO  | I2C2_SDA  | GPIO1_A0  | 3    | 4    | +5.0V       |           |            |            |           |           |           |
|           |           | UART6_TX   | SPI4_MOSI  | I2C2_SCL  | GPIO1_A1  | 5    | 6    | GND         |           |            |            |           |           |           |
|           |           | PDM1_CLK1  | UART4_TX   | SPI0_CLK  | GPIO1_B3  | 7    | 8    | GPIO0_B5    | UART2_TX  | I2C1_SCL   | I2S1_MCLK  |           |           |           |
|           |           |            |            |           | GND       | 9    | 10   | GPIO0_B6    | UART2_RX  | I2C1_SDA   | I2S1_SCLK  |           |           |           |
|           | PWM0      | UART6_RTS  | SPI4_CLK   | I2C4_SDA  | GPIO1_A2  | 11   | 12   | GPIO4_A1    | SPI0_MOSI | UART9_CTS  | I2S1_SCLK  |           |           |           |
|           | PWM1      | UART6_CTS  | SPI4_CS0   | I2C4_SCL  | GPIO1_A3  | 13   | 14   | GND         |           |            |            |           |           |           |
|           | I2S1_SDO3 | SPDIF0_TX  | PWM11      | UART9_TX  | GPIO4_B4  | 15   | 16   | GPIO1_D6    | I2C8_SCL  | UART1_RTS  | PWM14      |           |           |           |
|           |           |            |            |           | +3.3V     | 17   | 18   | GPIO1_D7    | I2C8_SDA  | UART1_CTS  | PWM15      |           |           |           |
|           |           |            |            | SPI2_MOSI | GPIO1_A5  | 19   | 20   | GND         |           |            |            |           |           |           |
|           |           |            |            | SPI2_MISO | GPIO1_A4  | 21   | 22   | GPIO1_B5    | SPI0_CS1  | UART7_TX   |            |           |           |           |
|           |           |            |            | SPI2_CLK  | GPIO1_A6  | 23   | 24   | GPIO1_A7    | SPI2_CS0  | PDM1_SDI0  | PWM3       |           |           |           |
|           |           |            |            |           | GND       | 25   | 26   | SARADC_VIN5 |           |            |            |           |           |           |
| CAN1_TX   | I2S1_SDO2 | PWM15      | UART8_CTS  | I2C7_SDA  | GPIO4_B3  | 27   | 28   | GPIO4_B2    | I2C7_SCL  | SPI0_CS0   | UART8_RTS  | PWM14     | I2S1_SDO1 | CAN1_RX   |
|           |           | PDM1_SDI3  | UART4_RX   | SPI0_MOSI | GPIO1_B2  | 29   | 30   | GND         |           |            |            |           |           |           |
|           |           |            | PDM1_SDI2  | SPI0_MISO | GPIO1_B1  | 31   | 32   | GPIO4_B0    | I2C6_SDA  | UART8_TX   | I2S1_SDI3  |           |           |           |
|           |           |            | PDM1_CLK0  | UART7_RX  | GPIO1_B4  | 33   | 34   | GND         |           |            |            |           |           |           |
|           |           | I2S1_MCLK  | UART9_RTS  | SPI0_MISO | GPIO4_A0  | 35   | 36   | GPIO4_A2    | SPI0_CLK  | I2S1_LRCK  |            |           |           |           |
|           |           |            | PDM1_SDI1  | SPI2_CS1  | GPIO1_B0  | 37   | 38   | GPIO4_A5    | I2C3_SDA  | UART3_TX   | I2S1_SDI0  |           |           |           |
|           |           |            |            |           | GND       | 39   | 40   | GPIO4_B1    | I2C6_SCL  | SPI0_CS1   | UART8_RX   | SPDIF1_TX | I2S1_SDO0 |           |

