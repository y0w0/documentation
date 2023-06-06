---
sidebar_label: 'ROCK 5B Introduction'
sidebar_position: 1
---

# ROCK 5B Introduction

The Radxa ROCK 5B is an elegant single-board computer (SBC) based on the RK3588 chipset. With its compact size of 100 x 75mm, it incorporates almost all the features of the RK3588, offering exceptional flexibility and scalability. The ROCK 5B serves as a solid foundation for geeks, single-board computer enthusiasts, IoT enthusiasts, and university students to turn their ideas into reality. It finds wide-ranging applications in edge computing, artificial intelligence, cloud computing, smart surveillance, and other domains.

Application scenarios of ROCK 5B:

* Personal desktop computer  
* Personal private server  
* Android video player  
* Robot controller  
* Blockchain nodes  

Of course, you can also develop new application scenarios according to your own needs

ROCK 5B offers multiple memory options: 4GB, 8GB and 16GB LPDDR4x.

![rock5b_01](/zh/img/rock5b/rock-5b-01.png)

*** Note: Actual board layout or chip placement may change over time, but primary connector types and locations will remain the same. ***

# ROCK 5B Specifications

## Hardware

- SoC: RK3588 4-core Cortex-A76 main frequency is between 2.2~2.4Ghz, plus four small-core Cortex-A55 main frequency is 1.8Ghz
- GPU: Mali G610MP4 GPU, supports OpenGLES 1.1, 2.0 and 3.2, OpenCL up to 2.2 and Vulkan 1.2
- NPU: The built-in NPU supports INT4/INT8/INT16/FP16 mixed operations, and the computing power is up to 6TOPs
- Memory: 4GB/8GB/16GB 64-bit LPDDR4x
- Display interface: connect up to four display devices via two HDMI, one DP (type C), one MIPI DSI
- Resolution: Up to 3x 4K@60FPS + 1x 1080P@60FPS or 1x 8K@60FPS + 1x 4K@60FPS + 1x 1080P@60FPS
- Hardware codec:
  - H.265/VP9 (HEVC)/AVS2 hardware decoding (up to 8Kp60).
  - H.264 hardware decoding (up to 8Kp30)
  - H.265/H.264 hardware encoding (up to 8Kp30)


## Interface

- 1x Full Function USB C Port (Support USB PD Power, DP Display up to 4Kp60, USB 3.0)
- 1x MicroSD card slot
- 2x Standard HDMI output ports, one supports up to 8Kp60, one supports up to 4Kp60
- 1x Micro HDMI input port, support up to 4Kp60 display input
- 2x USB 2 ports
- 1x USB 3 HOST port, 1x USB3 OTG port
- 1x 2.5 Gigabit Ethernet port (supports PoE with additional PoE HAT)
- 1x M.2 M Key, supports PCIe 3.0 four lanes
- 1x M.2 E Key, supports PCIe 2.1 one channel, SATA, SDIO, UART
- 1x eMMC module connector to support eMMC 5.1
- 1x Camera port (quad MIPI CSI)
- 1x DisplayPort (Quad Lane MIPI DSI)
- 1x RTC battery connector
- 1x PWM fan header
- 1x Power button
- 1x Restore button
- 1x RGB tri-color light for power indicator / system status / user-defined function
- 2x Radiator mounting holes
- 40x User GPIOs support various interface options:
    * 1 x UART
    * 2 x SPI bus
    * 2 x I2C bus
    * 1 x PCM/I2S
    * 1 x SPDIF
    * 1 x PWM
    * 1 x ADC
    * 6 x GPIOs
    * 2 x 5V DC power input
    * 2 x 3.3V power supply pins


## Software

- ARMv8 instruction set
- Supports Debian and Ubuntu systems
- Support Android 12
- RKNN NPU software
- Provides hardware access and control libraries for Linux and Android

# Mechanical Specifications

![rock5b_02](/zh/img/rock5b/rock-5b-02.png)

![rock5b_03](/zh/img/rock5b/rock-5b-03.png)
