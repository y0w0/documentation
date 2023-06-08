---
sidebar_label: 'ROCK 5A GPIO'
sidebar_position: 50
---

# ROCK 5A GPIO

## GPIO 电压

| GPIO       | 电压 | 最高 |
| ---------- | ------------- | --------- |
| 所有的GPIO   | 3.3V          | 3.63V     |
| SARADC_IN5 | 3.3V          | 3.3V     |  

## GPIO接口

ROCK 5A提供了一个40pin针脚的GPIO座子，与市场上大多数的SBC配件兼容。

**_提示:_ 实际兼容情况以使用为准。**

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


- Rockchip RK3588的GPIO有5个库，GPIO0到GPIO4，每个库有32个引脚，命名如下。

```
GPIO0_A0 ~ A7 
GPIO0_B0 ~ B7
GPIO0_C0 ~ C7
GPIO0_D0 ~ D7
   
GPIO1_A0 ~ A7
....
GPIO1_D0 ~ D7
```
```
GPIO2_A0 ~ A7
....
GPIO2_D0 ~ D7
```
```
GPIO3_A0 ~ A7
....
GPIO3_D0 ~ D7
```
```
GPIO4_A0 ~ A7
....
GPIO4_D0 ~ D7
```

- 对于Rockchip 5.10 kernel，GPIO number 的计算方式如下，以GPIO4_D5 为例：

```
GPIO4_D5 = 32*4 + 8*3 + 5 = 157
(A=0, B=1, C=2, D=3)
```

![GPIO_numbew](/zh/img/accessories/Gpio_number.png)

- 设置GPIO4_D5输出
```bash
# cd /sys/class/gpio
# echo 157 > export
# cd gpio157
# echo out > direction
# echo 1 > value     # output high
# echo 0 > value     # output low
```