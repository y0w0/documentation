---
sidebar_label: 'ROCK 3C GPIO'
sidebar_position: 50
---

# ROCK 3C GPIO

## GPIO 电压

| GPIO       | 电压 | 最高 |
| ---------- | ------------- | --------- |
| 所有的 GPIO   | 3.3V          | 3.63V     |
| SARADC_IN5 | 3.3V          | 3.3V     |  

## GPIO 接口

ROCK 3C 提供了一个40 pin 针脚的 GPIO 座子，与市场上大多数的 SBC 配件兼容。

**_提示:_ 实际兼容情况以使用情况为准。**

硬件版本 V1.1/V1.2 ：  

|GPIO number| Function5 |  Function4 |  Function3 | Function2 | Function1 | Pin# | Pin# |  Function1  | Function2 |  Function3 |  Function4 | Function5 |GPIO number|
|-----------|-----------|:----------:|:----------:|:---------:|:---------:|:----:|:----:|:-----------:|:---------:|:----------:|:----------:|-----------|-----------|
|           |           |            |            |           | +3.3V     | 1    | 2    | +5.0V       |           |            |            |           |           |
|     32    |           | CAN1_RX_M0 |I2C3_SDA_M0 |UART3_RX_M0| GPIO1_A0  | 3    | 4    | +5.0V       |           |            |            |           |           |
|     33    |           | CAN1_TX_M0 | I2C3_SCL_M0|UART3_TX_M0| GPIO1_A1  | 5    | 6    | GND         |           |            |            |           |           |
|    116    |           | PWM14_M0   |			  |			  | GPIO3_C4  | 7    | 8    | GPIO0_D1    |UART2_TX_M0|            |            |           |     25    |
|           |           |            |            |           | GND       | 9    | 10   | GPIO0_D0    |UART2_RX_M0|			   |		    |           |     24    |
|     97    |           |            |            |           | GPIO3_A1  | 11   | 12   | GPIO3_A3    |			  |			   |		    |I2S3_SCLK_M0|    99    |
|     98    |           |I2S3_MCLK_M0|            |           | GPIO3_A2  | 13   | 14   | GND         |           |            |            |           |           |
|    104    |           |            |            |           | GPIO3_B0  | 15   | 16   | GPIO3_B1    |UART4_RX_M1| PWM8_M0    |            |           |    105    |
|           |           |            |            |           | +3.3V     | 17   | 18   | GPIO3_B2    |UART4_TX_M1| PWM9_M0    |	        |           |    106    |
|    147    |           |PWM15_IR_M1 |I2S3_SCLK_M1|SPI3_MOSI_M1| GPIO4_C3  | 19   | 20   | GND        |           |            |            |           |           |
|    149    |UART9_TX_M1|  PWM12_M1  |I2S3_SDO_M1 |SPI3_MISO_M1| GPIO4_C5  | 21   | 22   | GPIO3_C1   |			  |			   |            |I2S1_SDO2_M2|   113    |
|    146    |           |  PWM14_M1  |I2S3_MCLK_M1|SPI3_CLK_M1| GPIO4_C2  | 23   | 24   | GPIO4_C6    |SPI3_CS0_M1| PWM13_M1   |UART9_RX_M1 |I2S3_SDI_M1 |   150    |
|           |           |            |            |           | GND       | 25   | 26   | NC          |           |            |            |           |           |  
|    138    |           |I2C4_SDA_M0 | I2S2_SDI_M1|           | GPIO4_B2  | 27   | 28   | GPIO4_B3    |			  |			   |I2C4_SCL_M0 |I2S2_SDO_M1|	 139    |
|    107    |           |            |            |           | GPIO3_B3  | 29   | 30   | GND         |           |            |            |           |           | 
|    108    |           |            |            |           | GPIO3_B4  | 31   | 32   | GPIO3_C2    |UART5_TX_M1|			   |		    |I2S1_SDO3_M2|   114    |  
|    115    |UART5_RX_M1|            |I2S1_SCLK_RX_M2|        | GPIO3_C3  | 33   | 34   | GND         |           |            |            |           |           |
|    100    |           |            |I2S3_LRCK_M0|           | GPIO3_A4  | 35   | 36   | GPIO3_A7    |			  |			   |            |           |    103    |
|     36    |           |            |I2S1_SCLK_RX_M0|        | GPIO1_A4  | 37   | 38   | GPIO3_A6    |			  |			   |		    |I2S3_SDI_M0|    102    | 
|           |           |            |            |           | GND       | 39   | 40   | GPIO3_A5    |			  |			   |		    |I2S3_SDO_M0|	101     |


[**wiringX GPIO 映射**](https://github.com/nascs/wiringX/blob/rock3/docs/source/platforms/radxa/rock3c.rst)


- Rockchip RK3566 的 GPIO 有5个库，GPIO0 到 GPIO4，每个库有32个引脚，命名如下。

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

- 对于Rockchip 4.19 kernel，GPIO number 的计算方式如下，以 GPIO4_D5 为例：

```
GPIO4_D5 = 32*4 + 8*3 + 5 = 157
(A=0, B=1, C=2, D=3)
```

![GPIO_numbew](/img/configuration/gpio-number.webp)

- 设置 GPIO4_D5 输出
```bash
# cd /sys/class/gpio
# echo 157 > export
# cd gpio157
# echo out > direction
# echo 1 > value     # output high
# echo 0 > value     # output low
```