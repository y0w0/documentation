---
sidebar_label: "ROCK 5A GPIO Definition"
sidebar_position: 50
---

# ROCK 5A GPIO Definition

## GPIO Voltage

| GPIO       | Voltage | Max Voltage |
| ---------- | ------- | ----------- |
| All GPIOs  | 3.3V    | 3.63V       |
| SARADC_IN5 | 3.3V    | 3.3V        |

## GPIO Interface

ROCK 5A provides a 40pin GPIO socket, which is compatible with most sensor applications on the market.

<div className='gpio_style'>
**_Tips:_ The actual compatibility is subject to usage. **

| Function6 | Function5 | Function4 | Function3 | Function2 | Function1 |               Pin#               |              Pin#               |  Function1  |                 Function2                 | Function3 | Function4 | Function5 | Function6 | Function7 |
| --------- | --------- | :-------: | :-------: | :-------: | :-------: | :------------------------------: | :-----------------------------: | :---------: | :---------------------------------------: | :-------: | :-------: | --------- | --------- | --------- |
|           |           |           |           |           |   +3.3V   | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |    +5.0V    |                                           |           |           |           |           |           |
|           |           | UART6_RX  | SPI4_MISO | I2C2_SDA  | GPIO1_A0  |  <div className='green'>3</div>  |  <div className='red'>4</div>   |    +5.0V    |                                           |           |           |           |           |           |
|           |           | UART6_TX  | SPI4_MOSI | I2C2_SCL  | GPIO1_A1  |  <div className='green'>5</div>  | <div className='black'>6</div>  |     GND     |                                           |           |           |           |           |           |
|           |           | PDM1_CLK1 | UART4_TX  | SPI0_CLK  | GPIO1_B3  |  <div className='green'>7</div>  | <div className='green'>8</div>  |  GPIO0_B5   | <div className='orange'>UART2_TX_M0</div> | I2C1_SCL  | I2S1_MCLK |           |           |           |
|           |           |           |           |           |    GND    |  <div className='black'>9</div>  | <div className='green'>10</div> |  GPIO0_B6   | <div className='orange'>UART2_RX_M0</div> | I2C1_SDA  | I2S1_SCLK |           |           |           |
|           | PWM0      | UART6_RTS | SPI4_CLK  | I2C4_SDA  | GPIO1_A2  | <div className='green'>11</div>  | <div className='green'>12</div> |  GPIO4_A1   |                 SPI0_MOSI                 | UART9_CTS | I2S1_SCLK |           |           |           |
|           | PWM1      | UART6_CTS | SPI4_CS0  | I2C4_SCL  | GPIO1_A3  | <div className='green'>13</div>  | <div className='black'>14</div> |     GND     |                                           |           |           |           |           |           |
|           | I2S1_SDO3 | SPDIF0_TX |   PWM11   | UART9_TX  | GPIO4_B4  | <div className='green'>15</div>  | <div className='green'>16</div> |  GPIO1_D6   |                 I2C8_SCL                  | UART1_RTS |   PWM14   |           |           |           |
|           |           |           |           |           |   +3.3V   | <div className='yellow'>17</div> | <div className='green'>18</div> |  GPIO1_D7   |                 I2C8_SDA                  | UART1_CTS |   PWM15   |           |           |           |
|           |           |           |           | SPI2_MOSI | GPIO1_A5  | <div className='green'>19</div>  | <div className='black'>20</div> |     GND     |                                           |           |           |           |           |           |
|           |           |           |           | SPI2_MISO | GPIO1_A4  | <div className='green'>21</div>  | <div className='green'>22</div> |  GPIO1_B5   |                 SPI0_CS1                  | UART7_TX  |           |           |           |           |
|           |           |           |           | SPI2_CLK  | GPIO1_A6  | <div className='green'>23</div>  | <div className='green'>24</div> |  GPIO1_A7   |                 SPI2_CS0                  | PDM1_SDI0 |   PWM3    |           |           |           |
|           |           |           |           |           |    GND    | <div className='black'>25</div>  | <div className='green'>26</div> | SARADC_VIN5 |                                           |           |           |           |           |           |
| CAN1_TX   | I2S1_SDO2 |   PWM15   | UART8_CTS | I2C7_SDA  | GPIO4_B3  |  <div className='blue'>27</div>  | <div className='blue'>28</div>  |  GPIO4_B2   |                 I2C7_SCL                  | SPI0_CS0  | UART8_RTS | PWM14     | I2S1_SDO1 | CAN1_RX   |
|           |           | PDM1_SDI3 | UART4_RX  | SPI0_MOSI | GPIO1_B2  | <div className='green'>29</div>  | <div className='black'>30</div> |     GND     |                                           |           |           |           |           |           |
|           |           |           | PDM1_SDI2 | SPI0_MISO | GPIO1_B1  | <div className='green'>31</div>  | <div className='green'>32</div> |  GPIO4_B0   |                 I2C6_SDA                  | UART8_TX  | I2S1_SDI3 |           |           |           |
|           |           |           | PDM1_CLK0 | UART7_RX  | GPIO1_B4  | <div className='green'>33</div>  | <div className='black'>34</div> |     GND     |                                           |           |           |           |           |           |
|           |           | I2S1_MCLK | UART9_RTS | SPI0_MISO | GPIO4_A0  | <div className='green'>35</div>  | <div className='green'>36</div> |  GPIO4_A2   |                 SPI0_CLK                  | I2S1_LRCK |           |           |           |           |
|           |           |           | PDM1_SDI1 | SPI2_CS1  | GPIO1_B0  | <div className='green'>37</div>  | <div className='green'>38</div> |  GPIO4_A5   |                 I2C3_SDA                  | UART3_TX  | I2S1_SDI0 |           |           |           |
|           |           |           |           |           |    GND    | <div className='black'>39</div>  | <div className='green'>40</div> |  GPIO4_B1   |                 I2C6_SCL                  | SPI0_CS1  | UART8_RX  | SPDIF1_TX | I2S1_SDO0 |           |

</div>

Please refer to [`libgpiod`](/radxa-os/development/libgpiod.md) for how to control GPIO.
