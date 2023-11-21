---
sidebar_label: "Install System"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install System

## Flash OS image to microSD card

### Preparations

1. Prepare a microSD card
2. Prepare an SD card reader
3. Download corresponding product of the official Ubuntu / Debian system image
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

1. [Download](https://win32diskimager.org/) flash tool `Win32DiskImager`

2. Open Win32DiskImager

3. Click on the folder icon button and select the image to be flashed

4. Once you have done so, click the `Write` button to start writing the image and wait for the write to complete

## Flash OS image to EMMC Module

### Enter MASKROM mode

When there is no available boot device in the system, it will automatically enter MASKROM mode, so you only need to make the microSD eMMC SPI Flash unable to boot to enter MASKROM mode.

#### MASKROM mode steps

![Radxa CM3I](/img/cm3i/cm3i-overview.webp)

1. Remove the microSD card
2. Simultaneously press and hold the Maskrom Button SPI Flash and Maskrom Button eMMC buttons on the CM3I
3. Keep pressing the Maskrom button in step 2 and connect the power to enter the MASKROM mode

### Flash OS image

<Tabs queryString="environment">
<TabItem value="Linux">

#### rkdeveloptool

rkdeveloptool is a USB flashing software developed by Rockchip for Linux/macOS platforms.

rkdeveloptool can be thought of as [upgrade_tool](/general-tutorial/rksdk/upgrade_tool) for [open source version](https://opensource.rock-chips.com/wiki_Rkdeveloptool).

---

#### Installation for rkdeveloptool

If your operating system does not provide rkdeveloptool, you will need to compile and install it from source.

<Tabs queryString="host_os">
<TabItem value="Arch Linux">

The rkdeveloptool can be installed from [AUR](https://aur.archlinux.org/packages/rkdeveloptool).

</TabItem>
<TabItem value="Debian">

Execute the following command from the command line to install:

```bash
sudo apt-get update
sudo apt-get install -y libudev-dev libusb-1.0-0-dev dh-autoreconf pkg-config libusb-1.0 build-essential git wget
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/73.patch
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch
git am *.patch
autoreconf -i
./configure
make -j $(nproc)
sudo cp rkdeveloptool /usr/local/sbin/
```

</TabItem>
<TabItem value="macOS">

Please install [Homebrew](https://brew.sh/) first, then run the following command from the command line to install it:

```bash
brew install automake autoconf libusb pkg-config git wget
git clone https://github.com/rockchip-linux/rkdeveloptool
cd rkdeveloptool
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/73.patch
wget https://patch-diff.githubusercontent.com/raw/rockchip-linux/rkdeveloptool/pull/85.patch
git am *.patch
autoreconf -i
./configure
make -j $(nproc)
cp rkdeveloptool /opt/homebrew/bin/
```

</TabItem>
</Tabs>

---

#### Usage for rkdeveloptool

##### View connected Maskrom devices

```bash
rkdeveloptool ld
```

##### Write file

:::caution
rkdeveloptool does not automatically decompress compressed files when writing to them.

First extract the used files and specify the extracted files in rkdeveloptool.
:::

:::caution
rkdeveloptool does not support the selection of Maskrom devices, nor can it select the storage media to be written to.  
Normally when using rkdeveloptool, only a device and a storage medium are connected in hardware. This step cannot be controlled by software.

If you need to write to multiple devices at the same time, use [upgrade_tool](/general-tutorial/rksdk/upgrade_tool).
:::

```bash
sudo rkdeveloptool db <loader>
sudo rkdeveloptool wl 0 <image>
```

Links to download the Loader files used by some products can be found on the [Loader](/general-tutorial/rksdk/loader) page.

##### Reboot device

```bash
sudo rkdeveloptool rd
```

</TabItem>
<TabItem value="Windows">

#### RKDevTool

RKDevTool is a USB flashing software developed by Rockchip for Windows platforms.

---

#### Installation of RKDevTool

Please download and extract the following files to install RKDevTool:

- [RKDevTool v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96_zh.zip) (Includes Chinese documentation)
- [DriverAssitant v5.0](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

##### Installation of drivers

Download and unzip DriverAssitant, then execute DriverInstall.exe and click the `Install Driver` button to install the driver.  
If you have previously installed another version of driver, please click `Uninstall Driver` to uninstall the driver first and then reinstall it.

![RK Driver](/img/configuration/RK-Driver-Assistant-Install-Uninstall.webp)

---

#### Write file to device

##### Run RKDevTool

![RKDevTool zh](/img/configuration/rkdevtool-zh.webp)

##### Connect the product and enter Maskrom mode

:::info
Please refer to the instructions of the product for operation. The way to enter Maskrom mode varies slightly from product to product.
:::

If the operation is normal, RKDevTool will prompt `Found One MASKROM Device`:

![RKDevTool zh maskrom](/img/configuration/rkdevtool-zh-maskrom.webp)

:::caution
Although RKDevTool supports the selection of Maskrom devices, writing to multiple devices at the same time will result in a write failure for the device being written to.

If you need to write to multiple devices at the same time, use [upgrade_tool](/general-tutorial/rksdk/upgrade_tool).
:::

##### Configuring RKDevTool Write Parameters

:::caution
写入文件时，RKDevTool 不会自动对压缩文件进行解压缩。

请首先将使用到的文件进行解压缩，并在 RKDevTool 中指定解压缩后的文件。
:::

Click a blank cell to select the [Loader](/general-tutorial/rksdk/loader) and Image file to be used:

![RKDevTool zh choose](/img/configuration/rkdevtool-zh-choose.webp)

Select the target media in the `Storage` option:

<Tabs queryString="storage">
<TabItem value="eMMC">

![RKDevTool zh storage](/img/configuration/rkdevtool-zh-storage.webp)

</TabItem>
<TabItem value="SPINOR">

:::tip
SPI Flash can only be burned into the corresponding U-BOOT. Please do not burn the image into SPI Flash.
:::

![RKDevTool zh SPINOR](/img/configuration/rkdevtool-zh-spinor.webp)

</TabItem>
</Tabs>

Select `Write by Address` and click `run`:

![RKDevTool zh flashing](/img/configuration/rkdevtool-zh-flashing.webp)

Wait for the write to complete, after which the device will reboot automatically:

![RKDevTool zh complete](/img/configuration/rkdevtool-zh-complete.webp)

</TabItem>
</Tabs>

## FAQ

### Unable to enter MASKROM mode

If both SPI Flash and eMMC have boot images, you need to ensure that the Maskrom Button SPI Flash and Maskrom Button eMMC buttons are pressed and held before powering on. You can observe the serial port printing to see whether it has booted to the U-BOOT stage. If it has booted to the U-BOOT stage, The BOOT stage indicates that there is a normal boot medium during startup, and re-execute the above steps to enter MASKROM mode.

### Unable to enter the system after burning

1. Since there are two boot media, SPI Flash and eMMC, on CM3I, booting from SPI Flash is preferred by default. If the image in SPI Flash is damaged, the system will not start.
2. The image may be burned to SPI Flash due to operational issues when burning the image. You can press and hold the Maskrom button of another boot medium before starting burning. For example, if you want to burn an image in eMMC, press and hold the Maskrom Button SPI Flash button before clicking burn, click burn, and release the button when you observe that burning starts.
