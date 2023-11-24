---
sidebar_position: 17
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 操作系统安装教程

:::tip
官方镜像的默认账号/密码为**radxa**/**radxa**。
:::

本教程适用于所有 Radxa 产品的官方镜像.
安装操作系统主要使用以下两种方法

1. 通过读卡器将系统镜像烧写到MicroSD 卡、eMMC Module 或 SSD上. （**推荐**）
2. 使用USB线将系统镜像直接刷写到 eMMC、Nand Flash上.

## 方法一

<Tabs queryString="target">
  <TabItem value="microSD" label="microSD">

### 准备

1. 准备一个 microSD 卡
2. 准备一个 SD 卡读卡器
3. 下载[对应产品](/productlist)的官方 Ubuntu / Debian 系统镜像
4. 把 SD 卡插入 SD 读卡器, 然后把 SD 读卡器插入计算机的 USB 接口

### 刷入操作系统镜像到 microSD

#### 通过 Etcher 刷入操作系统镜像到 microSD

1. [下载](https://etcher.balena.io/)刷写工具 `Etcher`。  
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. 打开 Etcher，将准备的操作系统镜像刷写到 microSD 卡。在 Etcher 窗口中，单击 `Flash from file` 选择刚下载的操作系统镜像。  
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. 在 Etcher 窗口中，点击 `Select target`。  
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. 在 Etcher 窗口中，点击 `Flash!` 然后等待刷写进度条。  
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. 在 Etcher 窗口中，当刷写成功时将会显示 `Flash Complete!`  
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)

**如果刷写操作系统镜像错误, 请手动再试一次。**

#### 通过 Win32DiskImager 刷入操作系统镜像到 microSD

1. [下载](https://win32diskimager.org/)刷写工具 `Win32DiskImager`  
   ![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.webp)

2. 打开 Win32DiskImager  
   ![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.webp)

3. 点击文件夹图标按钮然后选择要刷写的镜像  
   ![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.webp)

4. 完成上述操作后，单击 `Write` 按钮开始刷写镜像，然后等待写入镜像完成。  
   ![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.webp)

<!-- end of the list -->

   </TabItem>
   <TabItem value="eMMC Module" label="eMMC Module">

### 准备

- 准备一个 eMMC 模块和一个[Radxa eMMC读卡器](../accessories/emmc_reader)。

:::caution 注意
此教程仅适用于刷写可移动 eMMC 模块，板载 eMMC 需使用[线刷](rksdk/rkdevtool)的方式。
:::

![Radxa eMMC](/img/accessories/emmc_related_01.webp)

- 下载[对应产品](/productlist)的官方系统镜像。
- [下载](https://etcher.balena.io/)刷写工具 `Etcher` 。
  ![ROCK5A via Etcher](/img/rock5a/rock5a-etcher.webp)

### 刷入操作系统镜像到 EMMC Module

1. 将 eMMC 模块插入 Radxa eMMC USB 读卡器，然后将 Radxa eMMC USB 读卡器插入计算机的 USB 接口。

:::caution 注意
将 eMMC 模块插入 Radxa eMMC 读卡器时，请将 A1 端口与 A2 端口对齐，然后将 B1 端口插入 B2 端口。
:::

![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.webp)
![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.webp)

- 打开 Etcher，将准备的操作系统镜像刷写到 eMMC 模块。在 Etcher 窗口中，单击 `Flash from file` 选择刚下载的操作系统镜像。

  ![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.webp)

- 在 Etcher 窗口中，点击 `Select target`。

  ![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.webp)

- 在 Etche r窗口中，点击 `Flash!` 然后等待刷写进度条。

  ![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.webp)

- 在 Etcher 窗口中，当刷写成功时将会显示 `Flash Complete!`

![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.webp)

  </TabItem>
  <TabItem value="NVMe_SSD" label="固态硬盘">

### 准备

- 支持 NVMe SSD 的 SBC，此处以 ROCK 5A 为例
- 良好的电源适配器
- M.2 NVMe SSD
- **NVMe 转 USB 3.0 读卡器或带 NVMe 插槽的 PC 主机**

- 下载必要的工具和镜像

Etcher 就是我们用来写镜像的工具。从[下载](https://etcher.balena.io/)页面为您的 PC 下载合适的 Etcher 并安装它。

查看 [Etcher 网站](https://etcher.balena.io/)以获取有关 Etcher 的更多信息。

- 下载您对应产品的镜像。

### 刷入操作系统镜像到 M.2 NVMe SSD

将 M.2 NVMe SSD 插入 M.2 NVMe SSD 转 USB 3.0 读卡器，连接主机。

运行应用程序。例如在 Ubuntu 20.04 上双击 balenaEtcher-1.5.116-x64.AppImage：

在 etcher 窗口中，我们单击 `Flash from file` 按钮。
![rock-5b-etcher-01](/img/rock5a/rock5a-etcher-1.webp)

在 etcher 窗口中，我们单击 `Select target` 按钮。
![rock-5b-etcher-02](/img/rock5a/rock5a-etcher-2.webp)

在 etcher 窗口中，我们单击 `Flash!` 按钮。
![rock-5b-etcher-03](/img/rock5a/rock5a-etcher-3.webp)

在 etcher 窗口中，会显示 `Flash Complete!`  
![rock-5b-etcher-04](/img/rock5a/rock5a-etcher-4.webp)

完毕！现在您已成功在 M.2 NVMe SSD 上安装操作系统镜像。

擦除 M.2 NVMe SSD
如果之前 M.2 NVMe SSD 烧录了 Android（或 Linux）镜像，在重新烧录前建议您先擦除 M.2 NVMe SSD，然后写入目标镜像。

从 NVMe SSD启动
将镜像写入 NVMe SSD 后，要从 NVMe SSD 启动，您需要将 bootloader 写入 SPI Flash。详情请查看安装 bootloader 到 SPI Flash

   </TabItem>
   </Tabs>

## 方法二

如果您的设备使用 Rockchip 芯片，可参考以下教程：

### 我的电脑是Windows

&emsp;[rkdevtool](/general-tutorial/rksdk/rkdevtool)

### 我是电脑是Linux / macOS

&emsp;[rkdeveloptool](/general-tutorial/rksdk/rkdeveloptool)

&emsp;[upgrade_tool](general-tutorial/rksdk/upgrade_tool)（可同时烧录多台设备）
