---
sidebar_label: 'Overview'
sidebar_position: 10
---

# Introduction

The Radxa ROCK 5 Model A (ROCK 5A) is a Single Board Computer (SBC) in a compact form factor packed with a wide range of class-leading functionality, features and expansion options. The ROCK 5A is an ideal choice for makers, IoT enthusiasts, hobbyists, gamers, PC users and everyone who need an extremely highly specified platform with outstanding performance and reliability. Radxa offers the ROCK 5A board in various LPDDR4x RAM memory options:

4GB  
8GB  
16GB  

![ROCK5A Interface](/img/rock5a/rock5a_interfaces.webp)

**_Note:_ The actual board layout or components location may change during the time but the main connectors type and location will remain the same**

# Mechanical Specification

![ROCK5A Dimension Top](/img/rock5a/rock5a-dimension-top.webp)
![ROCK5A Dimension Bottom](/img/rock5a/rock5a-dimension-bottom.webp)

# Electrical Specification

## Power Requirements

The ROCK 5A supports various power supply technologies including smart power adapter as well as fixed voltage:

- USB Type-C™ PD Version 2.0 with 9V/2A, 12V/2A, 15V/2A and 20V/2A.
- Qualcomm® Quick Charge™ 2.0 QC 3.0/2.0 adapter, 9V/2A, 12V/2A
- Power adapter with fixed voltage in 5.2V to 20V range on the USB Type-C port
- 5V Power applied to the GPIO PIN 2 & 4

The recommended power source should be able to produce, at least, 24W without a M.2 SSD or 30W with a M.2 SSD.

### GPIO Voltage

| GPIO       | Voltage Level | Tolerance |
| ---------- | ------------- | --------- |
| All GPIO   | 3.3V          | 3.63V     |
| SARADC_IN5 | 3.3V          | 3.3V     |

## Operating Conditions

The ROCK 5A has been designed to operate between 0°C to 50°C.

This temperature range was defined based on typical usage where the efficient use of Arm big.LITTLE technology can automatically select which processor core to utilise for a given task, the result of which is minimal heat generation and responsive user experience.

The ROCK 5A is built on a high‑performance mobile chipset which is designed to operate for extended durations on batteries with efficiency at its core. As with all electronic devices heat is a by‑product of operation which increases with performance and workload; during basic use cases such as web browsing, editing text or listening to music the SoC will automatically select the smallest processors available or dedicated hardware accelerators to reduce heat generation thus reserving the higher performance processors and thermal window for demanding tasks as and when required.

The SoC (RK3588S) is specified to limit its maximum internal temperature to 80°C before throttling the clock speeds to maintain reliability within the allowed temperature range. If the ROCK 5A is intended to be used continuously in high performance applications, it may be necessary to use external cooling methods (for example, heat sink, fan, etc.) which will allow the SoC to continue running at maximum clock speed indefinitely below its predefined 80°C peak temperature limiter.

# Peripherals

## GPIO Interface

The ROCK 5A offers a 40 pin GPIO expansion header which provides extensive compatibility with a wide range of accessories developed for the SBC market.

## GPIO Alternate Functions

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

