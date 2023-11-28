---
sidebar_position: 1
---

# Getting Started

- Radxa ZERO 3W/3E is an ultra-small size high-performance single-board computer with compact appearance and rich interfaces
- Radxa ZERO 3W/3E is tailor-made for a diverse user base including manufacturers, IoT developers, hobbyists and PC DIY enthusiasts. It is an ultra-small size, multi-functional platform that can be used in various applications. Different applications, including IoT devices, machine learning edge computing, home automation, education and entertainment, etc.

## Annotation Diagram

- **ZERO 3W**
  ![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3w.webp)

- **ZERO 3E**
  ![ZERO 3W Overview](/img/zero/zero3w/radxa_zero_3e.webp)

## Features

<table>
    <tr>
        <td align="center" >Module</td>
        <td align="center">ZERO 3W</td>
        <td align="center">ZERO 3E</td>
    </tr>
    <tr>
        <td align="center">SoC</td>
        <td colspan="2" align="center">Rockchip RK3566</td>
    </tr>
    <tr>
        <td align="center">CPU</td>
        <td colspan="2" align="center">Quad‑core Arm® Cortex®‑A55 (ARMv8) 64‑bit @ 1.6GHz</td>
    </tr>
    <tr>
        <td align="center">GPU</td>
        <td colspan="2" align="center">Arm Mali™‑G52‑2EE, supports Arm Mali™‑G52‑2EE, OpenGL® ES1.1/2.0/3.2, Vulkan® 1.1, OpenCL™ 2.0</td>
    </tr>
    <tr>
        <td align="center">RAM</td>
        <td colspan="2" align="center">1/2/4/8 GB LPDDR4</td>
    </tr>
    <tr>
        <td align="center">Storage</td>
        <td align="center">Optional onboard eMMC：0/8/16/32/64 GB <br/> microSD card slot </td>
        <td align="center">microSD card slot </td>
    </tr>
    <tr>
        <td align="center">Display</td>
        <td colspan="2" align="center">Micro HDMI：supports 1080p60 display output</td>
    </tr>
    <tr>
        <td align="center">Ethernet</td>
        <td align="center">/</td>
        <td align="center">Supports Gigabit Ethernet powered by POE<br/>POE power supply requires the purchase of additional HAT</td>
    </tr>
    <tr>
        <td align="center">Wireless</td>
        <td align="center">Wi-Fi 4 (802.11 b/g/n) BT 5.0 with BLE</td>
        <td align="center">/</td>
    </tr>
    <tr>
        <td align="center">USB</td>
        <td colspan="2" align="center">USB 2.0 Type-C OTG X1 <br/> USB 3.0 Type-C HOST X1 </td>
    </tr>
    <tr>
        <td align="center">Camera</td>
        <td colspan="2" align="center">1x4 Lan MIPI CSI</td>
    </tr>
    <tr>
        <td align="center">Others</td>
        <td colspan="2" align="center">40x GPIO expansion interfaces</td>
    </tr>
    <tr>
        <td align="center">Power</td>
        <td colspan="2" align="center">Requires a 5V/2A power adapter </td>
    </tr>
    <tr>
        <td align="center">Size</td>
        <td colspan="2" align="center">65mm x 30mm</td>
    </tr>
</table>

## Before start

### Required items

- ZERO 3W/3E SBC

- The following storage media:  
  microSD card with a capacity of not less than 8GB.

- Power supply:  
  The ZERO 3W/3E is powered by Type-C connector and supports 5V input only. It is recommended to use a 5V/2A power adapter as a minimum.
  :::tip
  Radxa recommends using the [Radxa Power PD30W](/accessories/pd_30w).
  :::

- USB Keyboard and Type-C Hub  
  The ZERO 3W/3E has 2 USB-C ports and can be equipped with a full-size keyboard and mouse with the Type-C Hub when another is used for power supply.

- Monitor and Micro HDMI cable  
  The ZERO 3W/3E is equipped with a Micro HDMI connector. It is recommended to use a monitor with HDMI capability.
  The ZERO 3W/3E supports resolutions up to 1920 x 1080.

- microSD card reader  
  Flash the image to a microSD card.

### Optional

- USB to TTL serial cable.  
  For [Serial Debugging](/general-tutorial/serial).

- Camera  
  ZERO 3W/3E supports camera function.

### System Installation

1. select the [Official Image](/zero/images) you want to use and download it.

2. refer to the [Operating System Installation Guide](/general-tutorial/os-installation) to swipe the image to the storage media.

3. insert the system storage media: microSD card into the socket on the SBC and power up the ZERO 3W via the Type-C power adapter.

[Maskrom mode](/zero/zero3/maskrom)

## Hardware info

### GPIO

[GPIO Definition](/zero/zero3/hardware/zero3-gpio)

### Hardware Docs Download

#### ZERO 3W V1.11

[v1.11 2D dxf](https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_2d_dxf.zip) - 2D CAD file Download  
[v1.11 原理图 pdf](https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_v1110_schematic.pdf) - ZERO 3W Schematic file Download  
[v1.11 位号图 pdf](https://dl.radxa.com/zero3/docs/hw/3w/radxa_zero_3w_v1110_smb.zip) - Component location reference table Download
