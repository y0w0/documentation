---
sidebar_label: "OS Installation Guides"
sidebar_position: 17
---

# Operating System Installation Guides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip
The default account/password for the official images is **radxa**/**radxa**
:::

This tutorial applies to all official images of Radxa products.
There are two main methods of installing the operating system

1. Burning the system image to a MicroSD card, eMMC Module or SSD via a card reader. (**Recommended**)
2. Burning the system image directly to eMMC, Nand Flash via USB cable

## Method I

<Tabs queryString="target">
  <TabItem value="microSD" label="microSD">

### Flash OS image to microSD card

#### Preparations

1. Prepare a microSD card
2. Prepare an SD card reader
3. Download [corresponding product](/productlist) of the official Ubuntu / Debian system image
4. Insert the SD card into the SD card reader, then insert the SD card reader into the USB port of the computer

#### Flash OS image to microSD card via Etcher

1. [Download](https://etcher.balena.io/) flash tool `Etcher`
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. Open the Etcher and flash the prepared OS image to the microSD card. In the Etcher window
3. click `Flash from file` to select the OS image you have just downloaded.
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

4. In the Etcher window, click on `Select target`.  
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

5. In the Etcher window, click on `Flash!` and wait for the progress bar to be painted.
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

6. In the Etcher window, `Flash Complete!` will be displayed when the swipe is successful
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**If the OS image is flashed incorrectly, please try again manually.**

#### Swipe OS image to microSD card via Win32DiskImager

<!--此处缺少 Win32DiskImager 英文界面的图-->

1. [Download](https://win32diskimager.org/) flash tool `Win32DiskImager`

2. Open Win32DiskImager

3. Click on the folder icon button and select the image to be flashed

4. Once you have done so, click the `Write` button to start writing the image and wait for the write to complete

<!-- end of the list -->

  </TabItem>
  <TabItem value="eMMC Module" label="eMMC Module">

### Flash OS image to EMMC Module

#### Preparations

- Prepare an eMMC module and a [Radxa eMMC reader](../accessories/emmc_reader).

:::caution Notice
This tutorial is only applicable to write removable eMMC modules, onboard eMMCs need to be flashed using [rkdevtool](rksdk/rkdevtool).
:::

![Radxa eMMC](/img/accessories/emmc_related_01.webp)

- Download the [corresponding product](/productlist) for the official Ubuntu / Debian system image.
- [Download](https://etcher.balena.io/) flash tool `Etcher`.
  ![ROCK5A via Etcher](/img/rock5a/rock5a-etcher.webp)

#### Flash image

1. Insert the eMMC module into the Radxa eMMC USB card reader and then plug the Radxa eMMC USB card reader into the USB port of your computer.

:::caution Notice
When inserting the eMMC module into the Radxa eMMC reader, align port A1 with port A2, then insert port B1 into port B2.
:::

![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.webp)
![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.webp)

- Open the Etcher and flash the prepared OS image to the eMMC module. In the Etcher window, click `Flash from file` to select the OS image you have just downloaded.

  ![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.webp)

- In the Etcher window, click on `Select target`.

  ![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.webp)

- In the Etcher window, click on `Flash!` and wait for the progress bar to be refreshed.

  ![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.webp)

- In the Etcher window, `Flash Complete!` will be displayed when the swipe is successful.
  ![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.webp)

<!-- end of the list -->

  </TabItem>
  <TabItem value="NVMe_SSD" label="NVMe SSD">

### Flash OS image to NVME_SSD

#### Preparation

- Suitable power adapter
- M.2 NVMe SSD
- **NVMe to USB 3.0 card reader or PC host with NVMe slot**

#### Download the necessary tools and images

Etcher is the tool we use to write images. Download the appropriate Etcher for your PC from the [Downloads](https://www.balena.io/etcher#download-etcher) page and install it.

Check out the [Etcher website](https://www.balena.io/etcher) for more information about Etcher.

Download the image of your corresponding product.

#### Writing images to M.2 NVMe SSDs

Insert the M.2 NVMe SSD into the M.2 NVMe SSD to USB 3.0 reader and connect to the host computer.

Run the application. For example, on Ubuntu 20.04 double-click balenaEtcher-1.5.116-x64.AppImage:

In the etcher window, we click on the `Flash from file` button.
![rock-5b-etcher-01](/img/rock5a/rock5a-etcher-1.webp)

In the etcher window, we click on the `Select target` button.
![rock-5b-etcher-02](/img/rock5a/rock5a-etcher-2.webp)

In the etcher window we click on the `Flash!` button.
![rock-5b-etcher-03](/img/rock5a/rock5a-etcher-3.webp)

In the etcher window, it will display `Flash Complete!  
![rock-5b-etcher-04](/img/rock5a/rock5a-etcher-4.webp)

Done! You have now successfully installed the OS image on your M.2 NVMe SSD.

#### Erase M.2 NVMe SSDs

If the M.2 NVMe SSD was previously burned with an Android (or Linux) image,
it is recommended that you erase the M.2 NVMe SSD before re-burning and then write the target image.

#### Boot from NVMe SSD

After writing the image to the NVMe SSD, to boot from the NVMe SSD you need to write the bootloader to the SPI Flash.
For more information, please check [Installing the bootloader to SPI Flash](rksdk/rkdevtool) for details

  </TabItem>
</Tabs>

## Method II

If your device uses a Rockchip chip, refer to the following tutorial:

### My computer is Windows

&emsp;[rkdevtool](/general-tutorial/rksdk/rkdevtool)

### My computer is Linux / macOS

&emsp;[rkdeveloptool](/general-tutorial/rksdk/rkdeveloptool)

&emsp;[upgrade_tool](general-tutorial/rksdk/upgrade_tool)（Multiple devices can be burned at the same time）
