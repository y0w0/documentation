---
sidebar_label: "Install Debian System"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install Debian System

There are two main startup ways for CM3I,boot from microSD and boot from eMMC, This page introduces how to install system image on these two medias.

- Install system image on microSD
- Install system image on eMMC

## Install System Image on microSD card

### Preparations

1. Prepare a microSD card
2. Prepare an SD card reader
3. Download corresponding product's [system image](/compute-module/images)
4. Insert the SD card into the SD card reader, then insert the reader into the PC's USB port

### Install System Image

There are two main tools to install image on microSD card, you can choose one of them base on the actual situation.

- Ethcher (Multi-platform)
- Win32DiskImager (windows)

#### Install System Image on microSD Card via Etcher

1. [Download](https://etcher.balena.io/) flash tool `Etcher`
   <img src="/img/rock5a/rock5a-etcher.webp" width = "700" alt="CM3I via Etcher 01"/>

2. Open Etcher, Click `Flash from file` to select the OS image you prepared.
   <img src="/img/rock5a/rock5a-etcher-1.webp" width = "700" alt="CM3I via Etcher 02"/>

3. In the Etcher window, click on `Select target`.  
   <img src="/img/rock5a/rock5a-etcher-2.webp" width = "700" alt="CM3I via Etcher 03"/>

4. In the Etcher window, click on `Flash!` and wait for the progress bar to be painted.
   <img src="/img/rock5a/rock5a-etcher-3.webp" width = "700" alt="CM3I via Etcher 04"/>

5. In the Etcher window, `Flash Complete!` will show when the flashing is completed.
   <img src="/img/rock5a/rock5a-etcher-4.webp" width = "700" alt="CM3I via Etcher 05"/>

**If Install failed, please try again**

#### Install System image on microSD Card via Win32DiskImager

1. [Download](https://win32diskimager.org/) flash tool `Win32DiskImager`.
   ![CM3I via Win32DiskImager 01](/img/rock5a/rock5a-win32.webp)

2. Open Win32DiskImager.
   ![CM3I via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.webp)

3. Click on the folder icon button and select the image to be flashed.
   ![CM3I via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.webp)

4. Once you have done so, click the `Write` button to start writing the image and wait for the writing to be completed.
   ![CM3I via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.webp)

## Install System image on eMMC

CM3I needs to Enter [Maskrom Mode ](/compute-module/cm3i/maskrom) before installing the system.

### Install System image

<Tabs queryString="environment">
<TabItem value="Linux">

#### rkdeveloptool

rkdeveloptool is a USB flashing software developed by Rockchip for Linux/macOS platforms.

#### Installation for rkdeveloptool

If rockchip doesn't provide the Precompiled rkdeveloptool tools on your Operating System, you will need to compile it from source and then install it.

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

<TabItem value="Ubuntu">

Execute the following command from the command line to install:

```bash
sudo apt-get update
sudo apt-get install rkdeveloptool
```

If the command above failed, please refer to the debian to compile the source.

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
If the image file is a compressed file (such as zip,xz,gz etc), please unzip it first.
:::

:::caution
rkdeveloptool can only flash one device at a time,

If needs to flash multiple devices at the same time, use [upgrade_tool](/general-tutorial/rksdk/upgrade_tool).
:::

```bash
sudo rkdeveloptool db <loader>
sudo rkdeveloptool wl 0 <image>
```

you can download [Loader](/general-tutorial/rksdk/loader) here.

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

- [RKDevTool v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96_zh.zip)(Includes Chinese documentation)
- [DriverAssistant v5.0](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

##### Installation of drivers

Download and unzip DriverAssistant, then execute DriverInstall.exe and click the `Install Driver` button to install the driver.
If you have previously installed another version of driver, please click `Uninstall Driver` to uninstall the driver first and then reinstall it.

![RK Driver](/img/configuration/RK-Driver-Assistant-Install-Uninstall.webp)

#### Write file to device

##### Run RKDevTool

![RKDevTool zh](/img/configuration/rkdevtool-zh.webp)

##### Connect the product and enter Maskrom mode

About how to enter Maskrom, please refer to [Maskrom Mode ](/compute-module/cm3i/maskrom)

If the operation is normal, RKDevTool will prompt `Found One MASKROM Device`:

![RKDevTool zh maskrom](/img/configuration/rkdevtool-zh-maskrom.webp)

:::caution
rkdeveloptool can only flash one device at a time,

If you need to write to multiple devices at the same time, use [upgrade_tool](/general-tutorial/rksdk/upgrade_tool).
:::

##### Configuring RKDevTool Write Parameters

:::caution
If the image file is a compressed file (such as zip,xz,gz etc), please unzip it first.
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

Wait for the write to complete, the device will reboot automatically when writing finished.

![RKDevTool zh complete](/img/configuration/rkdevtool-zh-complete.webp)

</TabItem>
</Tabs>

## FAQ

### Unable to enter MASKROM mode

If both SPI Flash and eMMC have boot images, you need to ensure that the Maskrom Button (SPI Flash) and Maskrom Button (eMMC) are both pressed and held before powering on.

### Unable to enter the system after flashing image

1. Since there are two boot medias, SPI Flash and eMMC on CM3I, booting from SPI Flash is preferred by default. If the image in SPI Flash is damaged, the system will not start.
2. The image may be flashed to SPI Flash by wrong operations when flashing the image. You can press and hold the Maskrom button of another boot medium before flashing. For example, if you want to flash an image to eMMC, press and hold the Maskrom Button (SPI Flash) before flashing, and release the button until the flashing begin.
