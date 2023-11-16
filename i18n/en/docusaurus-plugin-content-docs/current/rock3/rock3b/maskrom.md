---
sidebar_label: "Maskrom Mode"
sidebar_position: 40
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Maskrom Mode

The OTG interface of ROCK 3B is located on the upper USB 3.0 interface. If you need to enter Maskrom mode, you should first adjust the switch under the USB 3.0 socket to the device side.
In Maskrom mode, you can connect the host via a USB-A to USB-A cable and use the [Rockchip Development Kit](/general-tutorial/rksdk) to perform operations such as erasing and USB flashing your product.

## How to Enter Maskrom Mode

Follow these steps to enter Maskrom mode:

1. Turn the switch under the USB 3.0 socket to the device side

![device](/img/rock3/3b/rock3b-otg.webp)

2. Use a USB-A to USB-A cable to connect to the PC host from the OTG port
3. Short-circuit the Maskrom pin, which is located between the USB 3.0 socket and Ethernet, as shown in the attached picture

![Maskrom](/img/rock3/3b/rock3b-maskrom.webp)

4. Plug in the power cord and power up. If the green light on the power supply is always on, you have successfully entered Maskrom mode.
5. Insert the eMMC or microSD card that needs to be operated
6. Use [Rockchip Development Kit](/general-tutorial/rksdk) for Maskrom mode operation
