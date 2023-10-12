---
sidebar_label: "eMMC烧录Android镜像"
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 如何将 Android 安装到 RADXA ZERO2 PRO eMMC

本指南介绍如何将 Android 安装到 RADXA ZERO2 PRO eMMC。目前有两种安卓镜像可在 RADXA ZERO2 PRO 上刷新：一种是安卓 OTA 镜像，它是一个压缩包，里面有多个较小的 img 文件；另一种是 aml-update 镜像，它只有一个大的 img 文件。安卓 OTA 映像是一种标准的映像格式，可使用 fastboot 工具闪存，而 aml-update 映像是一种专有格式，需要使用 aml-flash 工具。

# 烧录准备

必需要以下设备和工具

- RADXA ZERO2 PRO
- 运行 Windows、Linux 或 macOS 的个人电脑/笔记本电脑
- USB-A 转 USB-C 转接线，或 USB-C 转 USB-C转接线，取决于您的主机
- Android9 image. 例如：radxa-zero2-fastboot-flashall-xxxxxx.zip, radxa_zero2_xxxxxx_aml_upgrade_package.img

<Tabs queryString="host_os">
<TabItem value="Windows">

## 烧录 AMlogic 打包镜像

### 环境准备

radxa_zero2_xxxxxx_aml_upgrade_package.img 镜像是一种专有格式，需要下载、安装 USB_Burning_Tool_v2.1.7.0.zip 烧录工具.

下载并安装 [Zagdig](https://zadig.akeo.ie/) USB 驱动,确保展示的信息为 `GX-CHIP`，USB ID 为 `1B8E:C003`，选择 `libusb-win32`，然后点击 `Install Driver` 安装驱动程序。

![Zagdig libusb](/img/zero/zero2pro/Zagdig-libusb.webp)

### 烧录步骤

- 打开 USB_Burning_Tool.exe
- 按住 RADXA ZERO2 PRO 的 Maskrom 按键并用 USB 转接线连接您的 Windows 电脑。
- 点击文件按钮，导入 Android9 image：radxa_zero2_xxxxxx_aml_upgrade_package.img
- 点击开始按钮，等待烧录成功。

## 烧录 Android OTA 镜像

### 环境准备

radxa-zero2-fastboot-flashall-xxxxxx.zip 是一种是安卓 OTA 镜像，它是一个压缩包，里面有多个较小的 img 文件。
解压缩，您会在文件夹中找到类似这样的文件：

```bash
android-info.txt  dtbo.img       flash-all.sh  product.img   vbmeta.img
boot.img          dt.img         logo.img      recovery.img  vendor.img
bootloader.img    flash-all.bat  odm.img       system.img
```

您的Windows电脑需要下载并安装 [Zagdig](https://zadig.akeo.ie/) USB 驱动。

您还需要 Google 提供的[SDK 平台工具](https://developer.android.com/tools/releases/platform-tools?hl=zh-cn) 和[Android 驱动程序](https://dl.google.com/android/repository/usb_driver_r13-windows.zip)，以及一款由 Radxa 制作的 Windows 工具，用于 maskrom 通信的[RZ USB Boot Helper](https://dl.radxa.com/zero/tools/windows/RZ_USB_Boot_Helper_V1.0.0.zip)。

### 烧录步骤

- 按住 RADXA ZERO2 PRO 的 Maskrom 按键并用 USB 转接线连接您的 Windows 电脑。
- 打开由 Radxa 制作的 ‘RZ USB Boot Helper‘，该工具会在其界面上列出当前模式。现在我们使用的是 Maskrom 模式：

![Rz maskrom](/img/zero/zero2pro/Rz-usb-helper-maskrom.webp)

- 点击 `Select` 按钮来选择 Loader 文件：radxa-zero2-fastboot-flashall-xxxxxx.zip 解压后的 bootloader.img。
- 点击 `Run` 按钮进行加载。

![Rz fastboot](/img/zero/zero2pro/Rz-usb-helper-fastboot.webp)

- 加载完成后，在 radxa-zero2-fastboot-flashall-xxxxxx.zip 解压缩的文件夹中双击 flash-all.bat,等待烧录成功。

:::tip
如果您的 RADXA ZERO2 PRO 已经烧录了固件，那么必需先擦除 eMMC 固件，再执行以上步骤。
:::

</TabItem>
<TabItem value="Linux/MacOS">

## 烧录 Android OTA 镜像

### 环境准备

radxa-zero2-fastboot-flashall-xxxxxx.zip 是一种是安卓 OTA 镜像，它是一个压缩包，里面有多个较小的 img 文件。
解压缩，您会在文件夹中找到类似这样的文件：

```bash
android-info.txt  dtbo.img       flash-all.sh  product.img   vbmeta.img
boot.img          dt.img         logo.img      recovery.img  vendor.img
bootloader.img    flash-all.bat  odm.img       system.img
```

在这类平台上，我们可以使用 Amlogic boot tool 来加载二进制文件。首先确认已安装 [python](https://www.python.org/) 环境，在终端中运行以下命令：

<Tabs>
<TabItem value="MacOS">

```bash
brew install python lsusb libusb
pip3 install pyamlboot
```

然后可以在终端中运行以下命令，使用 nexus-tools 安装 fastboot。

```bash
bash <(curl -s https://raw.githubusercontent.com/corbindavenport/nexus-tools/master/install.sh)
```

</TabItem>
<TabItem value="Linux(Ubuntu)">

```bash
sudo apt update
sudo apt install python3-pip
sudo pip3 install pyamlboot
```

然后可以在终端中运行以下命令，使用 nexus-tools 安装 fastboot。

```bash
bash <(curl -s https://raw.githubusercontent.com/corbindavenport/nexus-tools/master/install.sh)
```

</TabItem>
</Tabs>

### 烧录步骤

- 按住 RADXA ZERO2 PRO 的 Maskrom 按键并用 USB 转接线连接您的 MacOS 或 Linux 电脑。
- 打开终端，运行以下命令：

```bash
$ boot-g12.py bootloader.img
$ sh flash-all.sh
```

:::tip
如果您的 RADXA ZERO2 PRO 已经烧录了镜像，那么必需先擦除 eMMC 镜像，再执行以上步骤。
:::
</TabItem>
</Tabs>

## 擦除 eMMC 镜像

您的电脑要有烧录环境，按住 RADXA ZERO2 PRO 的 Maskrom按键并用 USB 转接线连接您的 Windows、MacOS 或 Linux 电脑。

<Tabs queryString="host_os">
<TabItem value="Windows">
您可以使用由 Radxa 制作的 ‘RZ USB Boot Helper‘工具，一旦工具检测到maskrom模式，你就可以用选择按钮选择radxa-zero2-pro-erase-emmc.bin文件，然后用运行按钮进行eMMC擦除。

</TabItem>
<TabItem value="Linux/MacOS">
您可以在新终端使用命令：

```bash
$ boot-g12.py radxa-zero2-pro-erase-emmc.bin
```

</TabItem>
</Tabs>

### Loader 文件

- [radxa-zero2-pro-erase-emmc.bin](https://dl.radxa.com/zero2/images/loader/radxa-zero-2pro-erase-emmc.bin)：自动擦除 eMMC，然后将 eMMC 作为 USB 存储设备显示。
