---
sidebar_label: '安装镜像到M.2 NVME SSD'
sidebar_position: 33
---

# 安装镜像到M.2 NVME SSD

## 使用NVME转USB3.0读卡器或带NVME插槽的PC主机刷写镜像

### 1. 准备

- ROCK 5B
- 良好的电源适配器
- M.2 NVME SSD
- **NVME转USB3.0读卡器或带NVME插槽的PC主机**

### 2. 下载必要的工具和镜像

Etcher就是我们用来写镜像的工具。从[下载](https://www.balena.io/etcher#download-etcher)页面为您的PC下载合适的Etcher并安装它。

查看[Etcher 网站](https://www.balena.io/etcher)以获取有关 Etcher 的更多信息。

从ROCK 5B[下载](../../official-images)页面选择您要安装的映像。
这里我们使用以下镜像进行刷写。
```bash
rock-5b-debian-bullseye-xfce4-arm64-20220906-0626-gpt.img.xz
```

### 3. 将映像写入M.2 NVME SSD

将M.2 NVME SSD插入M.2 NVME SSD转USB3.0读卡器，连接主机。

运行应用程序。例如在 Ubuntu 20.04 上双击 balenaEtcher-1.5.116-x64.AppImage：

在etcher窗口中，我们单击`Flash from file`按钮。
![rock-5b-etcher-01](/zh/img/rock5b/rock-5b-etcher-01.png)

在etcher窗口中，我们单击`Select target`按钮。
![rock-5b-etcher-02](/zh/img/rock5b/rock-5b-etcher-02.png)

在etcher窗口中，我们单击`Flash!`按钮。
![rock-5b-etcher-03](/zh/img/rock5b/rock-5b-etcher-03.png)

在etcher窗口中，会显示`Flash Complete
!`![rock-5b-etcher-04](/zh/img/rock5b/rock-5b-etcher-04.png)

完毕！现在您已成功在M.2 NVME SSD上安装操作系统映像。

## 在ROCK 5B上写入NVMe SSD

### 1. 按照[烧录方式](getting_started#flash)和[入门教程](getting_started)烧录镜像到eMMC 模块和 Micro SD card

### 2. 将NVMe SSD装入ROCK 5B， 插入带有镜像的eMMC模块和Micro SD card。上电启动。

### 3. 可以通过SCP、wget等工具,下载ROCK 5B镜像到 ROCK5B中。

### 4. 检查NVMe SSD是否存在
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

### 5. 使用ROCK 5B烧录镜像到NVMe SSD中
```bash
sudo sudo xzcat 'your compressed image path' | dd of='your NVME SSD device path' bs=1M status=progress            
#such as: sudo xzcat rock-5b-debian-bullseye-xfce4-arm64-20220906-0626-gpt.img.xz  | dd of=/dev/nvme0n1 bs=1M status=progress
```

## 擦除 M.2 NVMe SSD

之前M.2 NVMe SSD是用Android（或Linux）image写的，现在改成Linux（或Android）。建议您先擦除 M.2 NVMe SSD。然后写入目标image。

## 从NVMe SSD启动

将映像写入NVMe SSD后，要从NVMe SSD启动，您需要将bootloader写入SPI Flash。
请看[安装bootloader到SPI Flash](../../lowlevel-development/bootloader_spi_flash)
