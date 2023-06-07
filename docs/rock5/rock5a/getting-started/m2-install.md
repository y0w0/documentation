---
sidebar_label: '在 M.2 NVME SSD 上安装操作系统'
sidebar_position: 33
---

# 在 M.2 NVME SSD 上安装操作系统

## 使用 NVME 转 USB 3.0 读卡器或带 NVME 插槽的PC 主机刷写镜像

### 1. 准备

- ROCK 5A
- 良好的电源适配器
- M.2 NVME SSD
- **NVME 转 USB 3.0 读卡器或带 NVME 插槽的 PC 主机**

### 2. 下载必要的工具和镜像

Etcher 就是我们用来写镜像的工具。从[下载](https://www.balena.io/etcher#download-etcher)页面为您的 PC 下载合适的 Etcher 并安装它。

查看 [Etcher 网站](https://www.balena.io/etcher)以获取有关 Etcher 的更多信息。

从 ROCK 5A [下载](../../official-images)页面选择您要安装的映像。

### 3. 将映像写入 M.2 NVME SSD

将 M.2 NVME SSD 插入 M.2 NVME SSD 转 USB 3.0 读卡器，连接主机。

运行应用程序。例如在 Ubuntu 20.04 上双击 balenaEtcher-1.5.116-x64.AppImage：

在 etcher 窗口中，我们单击`Flash from file`按钮。
![rock-5b-etcher-01](/zh/img/rock5b/rock-5b-etcher-01.png)

在 etcher 窗口中，我们单击`Select target`按钮。
![rock-5b-etcher-02](/zh/img/rock5b/rock-5b-etcher-02.png)

在 etcher 窗口中，我们单击`Flash!`按钮。
![rock-5b-etcher-03](/zh/img/rock5b/rock-5b-etcher-03.png)

在 etcher 窗口中，会显示`Flash Complete
!`![rock-5b-etcher-04](/zh/img/rock5b/rock-5b-etcher-04.png)

完毕！现在您已成功在 M.2 NVME SSD 上安装操作系统映像。

## 在 ROCK 5A 上写入 NVMe SSD

### 1. 按照[在 eMMC 模块上安装操作系统](../getting-started/emmc-install)或[在 Micro SD Card 上安装操作系统](../getting-started/sdcard-install)烧录镜像到 eMMC 模块或 Micro SD card

### 2. 将 NVMe SSD 装入 ROCK 5A，插入带有镜像的 eMMC 模块和 Micro SD card 。上电启动。

### 3. 可以通过 SCP、wget 等工具，将 ROCK 5A 镜像复制或下载到 ROCK5A 中。

### 4. 检查 NVMe SSD 是否存在
```bash
sudo fdisk -l
```
你可以看到以下类似信息：
```bash
Disk /dev/nvme0n1: 232.9 GiB, 250059350016 bytes, 488397168 sectors             
    #The '/dev/nvme0n1' is your NVME SSD device path
Units: sectors of 1 * 512 = 512 bytes                                           
Sector size (logical/physical): 512 bytes / 512 bytes                           
I/O size (minimum/optimal): 512 bytes / 512 bytes 
```

5. 使用 ROCK 5A 烧录镜像到 NVMe SSD 中
```bash
sudo sudo xzcat 'your compressed image path' | dd of='your NVME SSD device path' bs=1M status=progress            
#such as: sudo xzcat rock-5a-debian-bullseye-xfce4-arm64-20220906-0626-gpt.img.xz  | dd of=/dev/nvme0n1 bs=1M status=progress
```

## 擦除 M.2 NVMe SSD

如果之前 M.2 NVMe SSD 烧录了 Android（或Linux）image，现在改成 Linux（或 Android）。建议您先擦除 M.2 NVMe SSD。然后写入目标 image。

## 从NVMe SSD启动

将映像写入 NVMe SSD 后，要从 NVMe SSD 启动，您需要将 bootloader 写入 SPI Flash。
请看[安装 bootloader 到 SPI Flash](../../lowlevel-development/bootloader_spi_flash)
