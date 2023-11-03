---
sidebar_position: 40
---

# Maskrom Mode

The OTG interface of ROCK 3A is located on the upper USB 3.0 port, and can be used to communicate with the host computer and the board in Maskrom via the USB-A to USB-A cable.
In Maskrom mode, you can use [Rockchip Development Kit](/general-tutorial/rksdk) to write and erase your product.

## Enter the Maskrom mode

Steps for the ROCK 3A to enter Maskrom mode:

1. Shutdown and disconnect the power supply.
2. Short-circuit the SPI pins as shown in the attached figure, which are the two pins near the outside of the 3-pin row of pins next to the power button.
   ![ROCK 3A SPI](/img/rock3/3a/rock3a-spi.webp)

3. Remove the eMMC and microSD card etc, or you can connect the Maskrom pin, which is located next to the 40 pin GPIO connector.
   ![ROCK 3A Maskrom](/img/rock3/3a/rock3a-maskrom.webp)
4. Plug in the power cable and power up, if the power green light is always on, then the ROCK 3A has successfully entered the Maskrom mode.
5. If enter the Maskrom mode, you can disconnect the Maskrom pins and SPI pins.
6. Connect the OTG port of the board to the USB port of the host PC via the USB-A to USB-A cable.
7. Use [Rockchip Development Kit](/general-tutorial/rksdk) for Maskrom mode operation
