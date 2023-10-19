---
sidebar_label: "User Manual"
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ROCK 3A Overview

ROCK 3A features a quad core Cortex-A55 ARM processor, 32bit 3200Mb/s LPDDR4,
up to 4K@60 HDMI, MIPI DSI, MIPI CSI, 3.5mm jack with mic, USB Port, GbE LAN,
PCIe 3.0, PCIe 2.0, 40-pin color expansion header, RTC. Also, ROCK 3A supports USB PD and QC powering.

## Annotation Diagram

![ROCK 3A Overview](/img/rock3/rock3a-interfaces.webp)

<details>

<summary>Maskrom Mode</summary>

The OTG interface of ROCK 3A is located on the upper USB 3.0 port, and can be used to communicate with the host computer and the board in Maskrom via the USB-A to USB-A cable.
In Maskrom mode, you can use [Rockchip Development Kit](/general-tutorial/rksdk) to operate your product.

The following are the steps for the ROCK 3A to enter Maskrom mode:

1. Shutdown and disconnect the power supply.
2. Connect the Maskrom pin, which is located next to the 40 pin GPIO connector.
3. Plug in the power cable and power up, if the power green light is always on, then the ROCK 3A has successfully entered the Maskrom mode.
4. Connect the OTG port of the board to the USB port of the host PC via the USB-A to USB-A cable to achieve communication.

</details>

## Features

|            Model            | ROCK 3 Model A                                                                                                                                                                                                                |
| :-------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoC<br/>CPU<br/>GPU<br/>NPU | **RK3568**<br/>Quad-core Cortex-A55, freqency 2Ghz<br/>Mali G52<br/>0.8TOPS NPU                                                                                                                                               |
|           Memory            | 2/4/8GB LPDDR4 3200MT/s, up to 1560MHz                                                                                                                                                                                        |
|           Storage           | eMMC<br/>microSD card (microSD slot supports up to 128 GB microSD card)<br/>M.2 SSD (M.2 connector supports up to 8TB M2 NVME SSD)                                                                                            |
|           Display           | HDMI 2.0 up to 4k\*2k@60                                                                                                                                                                                                      |
|            MIPI             | DSI 2 lanes via FPC connector<br/>Any two of HDMI, MIPI DSI can work at the same time, support mirror mode or extend mode                                                                                                     |
|            Audio            | 3.5mm jack with mic<br/>HD codec that supports up to 24-bit/96KHz audio                                                                                                                                                       |
|           Camera            | MIPI CSI 2 lanes via FPC connector, support up to 8 MP camera                                                                                                                                                                 |
|          Wireless           | None on board. Optional [Radxa Wireless Module A8](/accessories/wireless-a8)                                                                                                                                                  |
|             USB             | USB 3.0 OTG X1, hardware switch for host/device switch, upper one<br/>USB 3.0 HOST X1<br/>USB 2.0 HOST X2                                                                                                                     |
|          Ethernet           | GbE LAN with Power over Ethernet (PoE) support<br/>additional HAT is required for powering from PoE                                                                                                                           |
|             IO              | 40-pin expansion header                                                                                                                                                                                                       |
|            Power            | USB PD, support USB Type-C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A<br/>Qualcomm® Quick ChargeTM: Supports QC 3.0/2.0 adapter, 9V/2A, 12V/1.5A<br/>Power adapter with fixed voltage in 6V to 24V range on the USB Type‑C® port |
|            Size             | 85mm x 56mm                                                                                                                                                                                                                   |

## Start-up guide

### Preparation items

- ROCK 3A
- One of the following storage media:  
   microSD card with a capacity of not less than 16GB  
   [eMMC module](/accessories/emmc_module) with a capacity of not less than 16GB
- Power adapter, recommended [Radxa Power PD 30W](/accessories/pd_30w):  
   ROCK 3A is powered by Type-C connector and supports PD power input.
- USB keyboard and mouse
- HDMI monitor and HDMI cable  
   The ROCK 3A is equipped with a full-size HDMI connector. HDMI-enabled monitors are recommended. Supports up to 4K@60 display.
- microSD card reader or eMMC card reader  
   For mirroring microSD cards or eMMC modules.

### System Installation

1. Select the [Official Image](/rock3/official-images) you want to use and download it. 2.

2. Refer to the [Operating System Installation Guide](/general-tutorial/os-installation) to overwrite the image to the storage media.

3. Insert the system storage media: microSD card or eMMC module into the socket on the board and boot your product powered by the Type-C power adapter.

4. Connect the peripherals and start using [Radxa OS](/radxa-os).

If you already know the product well enough, you can also use the wire-flush method to flash the device.

## ROCK 3A GPIO Definition

### GPIO Voltage

| Type | Voltage | Tolerance |
| ---- | ------- | --------- |
| GPIO | 3.3V    | 3.63V     |
| ADC  | 1.8V    | 1.98V     |

### GPIO Interface

ROCK 3A provides a 40pin GPIO socket, which is compatible with most sensor applications on the market.

**Tips: The actual compatibility is subject to usage.**

<Tabs>
<TabItem value="v1_3" label="v1.3+">

<div className='gpio_style'>

| GPIO number |  Function4  |  Function3   |  Function2  |  Function1  |               Pin#               |              Pin#               | Function1 |                 Function2                 |  Function3  |  Function4  | GPIO number |
| ----------- | :---------: | :----------: | :---------: | :---------: | :------------------------------: | :-----------------------------: | :-------: | :---------------------------------------: | :---------: | :---------: | ----------- |
|             |             |              |             |    +3.3V    | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |                                           |             |             |             |
| 32          | CAN1_RX_M0  | UART3_RX_M0  | I2C3_SDA_M0 |  GPIO1_A0   |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |                                           |             |             |             |
| 33          | CAN1_TX_M0  | UART3_TX_M0  | I2C3_SCL_M0 |  GPIO1_A1   |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |                                           |             |             |             |
| 13          |             |   PWM1_M1    | I2C2_SCL_M0 |  GPIO0_B5   |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_D1  | <div className='orange'>UART2_TX_M0</div> |             |             | 25          |
|             |             |              |             |     GND     |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_D0  | <div className='orange'>UART2_RX_M0</div> |             |             | 24          |
| 116         |             | UART7_TX_M1  |  PWM14_M0   |   GIO3_C4   | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO3_A3  |                                           |             |             | 99          |
| 117         |             | UART7_RX_M1  | PWM15_IR_M0 |  GPIO3_C5   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |                                           |             |             |             |
| 16          |             |   UART0_RX   |   PWM1_M0   |   GIO0_C0   | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO0_B6  |                I2C2_SDA_M0                |   PWM2_M1   |             | 105         |
|             |             |              |             |    +3.3V    | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO3_B2  |                UART4_TX_M1                |   PWM9_M0   |             | 106         |
| 147         | CAN1_TX_M1  | SPI3_MOSI_M1 | PWM15_IR_M1 |  GPIO4_C3   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |                                           |             |             |             |
| 149         | UART9_TX_M1 | SPI3_MISO_M1 |  PWM12_M1   |   GPO4_C5   | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO0_C1  |                  PWM2_M0                  |  UART0_TX   |             | 113         |
| 146         | CAN1_RX_M1  | SPI3_CLK_M1  |  PWM14_M1   |   GIO4_C2   | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO4_C6  |                 PWM13_M1                  | SPI3_CS0_M1 | UART9_RX_M1 | 150         |
|             |             |              |             |     GND     | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO4_D1  |                SPI3_CS1_M1                |             |             |             |
| 12          |   USB_DP    |  CAN0_RX_M0  |  I2C1_SDA   |   GIO0_B4   |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO0_B3  |                 I2C1_SCL                  | CAN0_TX_M0  |   USB_DM    | 139         |
| 95          |             |              | UART8_TX_M1 |  GPIO2_D7   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |                                           |             |             |             |
| 96          |             |              | UART8_RX_M1 |  GPIO3_A0   | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C2  |                UART5_TX_M1                |             |             | 114         |
| 115         |             | UART5_RX_M1  | SPI1_CLK_M1 |  GPIO3_C3   | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |                                           |             |             |             |
| 100         |             |              |             |  GPIO3_A4   | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO3_A2  |                                           |             |             | 103         |
|             |             |              |             | SARADC_VIN5 | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO3_A6  |                                           |             |             | 102         |
|             |             |              |             |     GND     | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO3_A5  |                                           |             |             | 101         |

</div>

#### More details about 40-pin Header In V1.3+

- Pins marked with color orange are designed for debug console.
- PWM: x7, PWM1 / PWM2 / PWM9 / PWM12 / PWM13 / PWM14 / PWM15
- SPI: x1, SPI3
- I2C: x3, I2C1 / I2C2 / I2C3
- UART: x6, UART0 / UART3 / UART5 / UART7 / UART8 / UART9
- ADC: x1, SARADC_VIN5
- CAN: x2, CAN0 / CAN1
- USB 2.0: x1, USB_DP(PIN#27) + USB_DM(PIN#28)
  - When we select this USB function, you need to modify the hardware like this:
  - -> Remove R90526 R90527
  - -> Add R90536 R90537

</TabItem>
<TabItem value="v1_2" label="v1.2">

<div className='gpio_style'>

| GPIO number |  Function4  |  Function3   |  Function2  |  Function1  |               Pin#               |              Pin#               | Function1 |                 Function2                 |  Function3  |  Function4  | GPIO number |
| ----------- | :---------: | :----------: | :---------: | :---------: | :------------------------------: | :-----------------------------: | :-------: | :---------------------------------------: | :---------: | :---------: | ----------- |
|             |             |              |             |    +3.3V    | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |   +5.0V   |                                           |             |             |             |
| 32          | CAN1_RX_M0  | UART3_RX_M0  | I2C3_SDA_M0 |  GPIO1_A0   |  <div className='green'>3</div>  |  <div className='red'>4</div>   |   +5.0V   |                                           |             |             |             |
| 33          | CAN1_TX_M0  | UART3_TX_M0  | I2C3_SCL_M0 |  GPIO1_A1   |  <div className='green'>5</div>  | <div className='black'>6</div>  |    GND    |                                           |             |             |             |
| 13          |             |   PWM1_M1    | I2C2_SCL_M0 |  GPIO0_B5   |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO0_D1  | <div className='orange'>UART2_TX_M0</div> |             |             | 25          |
|             |             |              |             |     GND     |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO0_D0  | <div className='orange'>UART2_RX_M0</div> |             |             | 24          |
| 116         |             | UART7_TX_M1  |  PWM14_M0   |   GIO3_C4   | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO3_A3  |                                           |             |             | 99          |
| 117         |             | UART7_RX_M1  | PWM15_IR_M0 |  GPIO3_C5   | <div className='green'>13</div>  | <div className='black'>14</div> |    GND    |                                           |             |             |             |
| 16          |             |   UART0_RX   |   PWM1_M0   |   GIO0_C0   | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO0_B6  |                I2C2_SDA_M0                |   PWM2_M1   |             | 105         |
|             |             |              |             |    +3.3V    | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO3_B2  |                UART4_TX_M1                |   PWM9_M0   |             | 106         |
| 147         | CAN1_TX_M1  | SPI3_MOSI_M1 | PWM15_IR_M1 |  GPIO4_C3   | <div className='green'>19</div>  | <div className='black'>20</div> |    GND    |                                           |             |             |             |
| 149         | UART9_TX_M1 | SPI3_MISO_M1 |  PWM12_M1   |   GPO4_C5   | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO0_C1  |                  PWM2_M0                  |  UART0_TX   |             | 113         |
| 146         | CAN1_RX_M1  | SPI3_CLK_M1  |  PWM14_M1   |   GIO4_C2   | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO4_C6  |                 PWM13_M1                  | SPI3_CS0_M1 | UART9_RX_M1 | 150         |
|             |             |              |             |     GND     | <div className='black'>25</div>  | <div className='green'>26</div> | GPIO4_D1  |                SPI3_CS1_M1                |             |             |             |
| 12          |   USB_DP    |  CAN0_RX_M0  |  I2C1_SDA   |   GIO0_B4   |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO0_B3  |                 I2C1_SCL                  | CAN0_TX_M0  |   USB_DM    | 139         |
| 95          |             |              | UART8_TX_M1 |  GPIO2_D7   | <div className='green'>29</div>  | <div className='black'>30</div> |    GND    |                                           |             |             |             |
| 96          |             |              | UART8_RX_M1 |  GPIO3_A0   | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C2  |                UART5_TX_M1                |             |             | 114         |
| 115         |             | UART5_RX_M1  | SPI1_CLK_M1 |  GPIO3_C3   | <div className='green'>33</div>  | <div className='black'>34</div> |    GND    |                                           |             |             |             |
| 100         |             |              |             |  GPIO3_A4   | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO3_A2  |                                           |             |             | 103         |
|             |             |              |             | SARADC_VIN5 | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO3_A6  |                                           |             |             | 102         |
|             |             |              |             |     GND     | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO3_A5  |                                           |             |             | 101         |

</div>

#### More details about 40-pin Header In V1.2

- Pins marked with color orange are designed for debug console.
- PWM: x7, PWM1 / PWM2 / PWM9 / PWM12 / PWM13 / PWM14 / PWM15
- SPI: x1, SPI3
- I2C: x2, I2C2 / I2C3
- UART: x6, UART0 / UART3 / UART5 / UART7 / UART8 / UART9
- ADC: x1, ADC_IN5
- CAN: x1, CAN1
- USB 2.0: x1, USB_DP(PIN#27) + USB_DM(PIN#28)
  - When we select this USB function, you need to modify the hardware like this:
  - -> Remove R90526 R90527
  - -> Add R90536 R90537

</TabItem>
</Tabs>

### GPIO Number

If you want to get the GPIO number,please check [GPIO Number Introduction](/general-tutorial/gpio-num).

## Hardware Documentations

[v1.3 schematic pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SCH.pdf) - Download schematic of ROCK 3A

[v1.3 2D Top&Bottom dxf](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_2d_dxf.zip) - Download 2D CAD of ROCK 3A

[v1.3 3D](https://dl.radxa.com/rock3/docs/hw/3a/rock3a_v1.3_3d_emn_emp.zip) - Download 3D CAD of ROCK 3A (.emn/.emp format)

[v1.3 CAM pdf](https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SMD.pdf) - Download components position reference of ROCK 3A
