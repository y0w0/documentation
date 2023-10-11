---
sidebar_label: "Getting Started"
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

This guide is written for Radxa ZERO 2 PRO beginners to help you understand the basic preparation and setup of Radxa ZERO 2 PRO.
When you get a Radxa ZERO 2 PRO motherboard, it is recommended that you first check the model number and hardware version printed on the board.
We will cover as much information as possible.

## Required items

- Radxa ZERO 2 PRO

- microSD card with a capacity of at least 8GB (if your ZERO 2 PRO is equipped with on-board eMMC, you can flash your system directly onto it).

- Power supply:  
  The Radxa ZERO 2 PRO is powered by a Type-C connector and only supports 5V input.

  :::tip
  Radxa recommends the [Radxa Power PD30W](/accessories/pd_30w).
  :::

- Type-C splitter and USB keyboard and mouse  
  The ZERO 2 PRO has two Type-C connectors, one for power supply and the other can be used as a Type-C splitter to extend a keyboard, mouse or other peripherals.

- Display and micro HDMI cable  
  The ZERO 2 PRO is equipped with a micro HDMI connector. It is recommended to use an HDMI-enabled monitor that supports resolutions up to 1920 x 1080.

- microSD card reader  
  Flashes the image to a microSD card.

## Optional

- USB-A to USB-C cable:  
  Used for `fastboot`/`adb` command and maskrom mode communication, this accessory is required for wire brushing.

- USB to TTL serial cable.  
  Used for [serial debugging](/general-tutorial/serial).

- Audio cable  
  Audio can be played through speakers or headphones with a standard 3.5 mm jack.

## System Installation

First, select the [official image](/zero/official-images) you want to use and download it.

Then, refer to the [OS Installation Guide](/general-tutorial/os-installation) to flash the image to the microSD card.

Finally, insert the microSD card into the socket on the motherboard and boot up powered by the Type-C power adapter.

### Wire Brush

If you need to flash the system into the onboard eMMC, you need to use a USB-A to USB-C cable to do a wire-flash flash.

#### nvironment Preparation

<Tabs queryString="host_os">
<TabItem value="Windows">

1. Connect Radxa ZERO 2 PRO to PC in [Maskrom mode](#maskrom-mode).

2. Download and install the [Zagdig](https://zadig.akeo.ie/) USB driver.

   Make sure the information displayed is `GX-CHIP`, the USB ID is `1B8E:C003`, select `libusb-win32` and click `Install Driver` to install the driver.

   ! [Zagdig libusb](/img/zero/zero2pro/Zagdig-libusb.webp)

   Alternatively, you can install fastboot using nexus-tools by running the following command in PowerShell:

   :::tip
   fastboot is used to install Android or manually clear the eMMC bootloader. If you don't need these, you can skip this step.
   :::

   ```bash
   iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/corbindavenport/nexus-tools/master/install.ps1'))
   ```

   You will also need the [Android driver](https://dl.google.com/android/repository/usb_driver_r13-windows.zip) provided by Google.

   Unzip it and right click on the .inf file to install the driver.

   ![Android driver](/img/zero/zero2pro/Install-win-android-driver.webp)

   [RZ USB Boot Helper](https://dl.radxa.com/zero/tools/windows/RZ_USB_Boot_Helper_V1.0.0.zip) is a Windows utility made by Radxa for maskrom communication.

   The tool will list the current mode on its interface. Right now we are using Maskrom mode:

   ![Rz maskrom](/img/zero/zero2pro/Rz-usb-helper-maskrom.webp)

</TabItem>
<TabItem value="Linux/MacOS">

On such platforms, we can use the Amlogic boot tool to load the binaries. First make sure that the [python](https://www.python.org/) environment is installed, then run the following command in a new terminal:

<Tabs>
<TabItem value="MacOS">

```bash
brew install python lsusb libusb
pip3 install pyamlboot
```

</TabItem>
<TabItem value="Linux">

```bash
sudo apt update
sudo apt install python3-pip
sudo pip3 install pyamlboot
```

</TabItem>
</Tabs>

Similar to the Windows platform, you can also install fastboot using nexus-tools by running the following commands in the terminal, or skip this step if you don't need these:

```bash
bash <(curl -s https://raw.githubusercontent.com/corbindavenport/nexus-tools/master/install.sh)
```

</TabItem>
</Tabs>

#### Flash images

<Tabs>
<TabItem value="Windows">

Once the tool detects the Maskrom mode, you can click the `Select` button to select the image file and then click the `Run` button to flash it:

![Rz fastboot](/img/zero/zero2pro/Rz-usb-helper-fastboot.webp)

The result of running is shown above.

</TabItem>
<TabItem value="Linux/MacOS">

Under those platforms, you can use the boot-g12.py utility.

Run the following command to flash:

```bash
  boot-g12.py loader.bin
```

On Linux platforms, you will also need to add `sudo` for permissions:

```bash
  sudo boot-g12.py .bin
```

Where `loader.bin` is replaced with the firmware you need to flash, you can get the download link below.

</TabItem>
</Tabs>

### Loader file

### Maskrom Mode

To enter Maskrom mode, please follow the steps below:

1. Press and hold the Maskrom button
2. Connect the USB-A port of the USB-A to USB-C cable to the PC, and the USB-C connector to the OTG port of the ZERO 2 PRO.
3. Release the Maskrom button

![ZERO 2 PRO Maskrom](/img/zero/zero2pro/zero2pro-maskrom.webp)
