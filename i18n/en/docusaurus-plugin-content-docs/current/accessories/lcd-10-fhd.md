---
sidebar_label: "Radxa Display 10 FHD"
sidebar_position: 4
---

# Radxa Display 10 FHD

![Radxa Display 10 FHD](/img/accessories/display-10-fhd.webp)

## Overview

Radxa Display 10 FHD's Display mode is a color active matrix thin film transistor (TFT) liquid crystal display (LCD) that uses amorphous silicon TFT as a switching device.This model is composed of a TFT LCD panel and a driving circuit.This TFT LCD has a 10.1(16:10) inch diagonally measured active display area with (1200 horizontal by 1920 vertical pixel) resolution. It has the following features:

- Panel Size: 10.1 inch
- Compatible with NTSC & PAL system
- Image Reversion: UP/DOWN and LEFT/RIGHT
- ROHS design
- Outline Dimension: 155(H) x 246.16(V) x 5.95(D) mm
- Display area: 135.36(H) x 216.58 (V) mm
- Number of Pixel: 1200RGB (H) x 1920 (V) pixels
- Pixel pitch: 0.0564 (H) x 0.1692(V)s mm
- Pixel arrangement: RGB Vertical stripe
- Display mode: Normally Black
- Color Filter Array: RGB vertical stripes
- Backlight: White LED
- Electrical Interface: MIPI
- Built-in Gravity Sensor for rotation

## Touch

The Radxa Display 10 FHD touch panel is powered by GT9271, a new‑generation 10‑point capacitive touch solution designed for 7” to 10.1” panels.

The GT9271 provides a standard I2C communication interface, facilitating communication with the main CPU through the SCL and SDA lines. Within the system, GT9271 consistently operates as a slave device, with all communication actions being initiated by the primary CPU. To ensure the stability of communication, it is advisable to configure the communication speed at 400Kbps or lower. GT9271 offers two sets of I2C slave addresses, namely **0xBA/0xBB** and **0x28/0x29**, which can be chosen as needed.

## Gravity Sensor

The Radxa Display 10 FHD incorporates an SC7A20 chip, which serves as a high-precision 12-bit digital three-axis accelerometer. This chip demonstrates remarkable performance in measurement capabilities, not only enhancing measurement accuracy but also embedding additional functionalities. Furthermore, its attributes of low power consumption and compact size confer distinct advantages in practical applications.

Employing the I2C communication protocol, the SC7A20 establishes connections with other devices, facilitating efficient data transmission through an interrupt mechanism. This mechanism streamlines data acquisition and processing. Regarding hardware connectivity, the SC7A20 utilizes the 4th and 6th pins of the MIPI DSI 40-Pin interface to implement interrupt functionality, ensuring the effective propagation of sensor interrupt signals and delivering instantaneous event response capabilities to the system.

The I2C addresses of the SC7A20 are 0x18 and 0x19, and it utilizes the 27th and 28th pins of the MIPI DSI 40-Pin interface to transmit signals.

## Pinout

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

## Mechanical Specification

![Radxa Display 8 HD](/img/accessories/display_10_fhd_01.webp)
