---
sidebar_label: '烧录BootLoader到SPI Flash'
sidebar_position: 20
---


# 烧录BootLoader到SPI Nor Flash



SPI Nor Flash存储bootloader文件。比如idbloader.img和u-boot.itb。
而PCIe NVME SSD 存储所有system img。

## 介绍

ROCK 5A上附带一个SPI Flash（SPI闪存）模块，它包含用于备份引导的bootloader，并支持引导其他介质（比如 NVMe、SATA、USB 3），这些介质SoC本身的maskrom模式不直接支持。

以下介绍两个刷写SPI的方式：
1. 初级方法：通过ROCK 5A自身烧录SPI
2. 高级方法：通过PC和Maskrom模式烧录SPI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="初级方法" label="初级方法" default>


## 初级方法

### 准备
    - ROCK 5A
    - 良好的电源适配器
    - 用于ROCK 5A的Linux镜像，不支持Android镜像
    - Micro SD卡或eMMC模块

### 步骤

1. 从Micro SD card或eMMC启动Linux系统

   详细教程请查看入门使用教程中的[在eMMC模块上安装操作系统](../getting-started/emmc-install)或[在Micro SD Card上安装操作系统](../getting-started/sdcard-install)烧录镜像到eMMC模块或Micro SD card

2. 在ROCK 5A上下载必要的文件

   你可以通过wget下载到ROCK 5A,前提是ROCK 5A连接网络。
   - 下载clear the spi文件
    ```bash
    wget https://dl.radxa.com/rock5/sw/images/others/zero.img.gz
    ```

   - 下载最新版本spi bootloader
    推荐除Armbian用户之外的用户使用通用版本，注意这个img已经关闭u-boot串行控制台
    ```bash
    wget https://dl.radxa.com/rock5/sw/images/loader/rock-5b/release/rock-5b-spi-image-g49da44e116d.img
    ```

   如果您想从M.2 NVME SSD启动armbian，请使用此镜像
    ```bash
    wget https://github.com/huazi-yg/ROCK 5A/releases/download/ROCK 5A/rkspi_loader.img
    ```

   针对高级用户的bootloader，已启动u-boot串行控制台。
    ```bash
    wget https://dl.radxa.com/rock5/sw/images/loader/rock-5b/debug/rock-5b-spi-image-g3caf61a44c2-debug.img
    ```

3. 检查下载文件的完整性：
    ```bash
    md5sum zero.img.gz 
    ```

   正确显示如下：
    ```bash
    ac581b250fda7a10d07ad11884a16834  zero.img.gz
    ```

4. 解压缩之前下载的clear the spi文件
    ```bash
    gzip -d zero.img.gz
    md5sum zero.img
    ```
   正确显示如下：
    ```bash
    2c7ab85a893283e98c931e9511add182  zero.img
    ```

5. 检查你想要的bootloader image
    ```bash
    md5sum rock-5b-spi-image-g49da44e116d.img
    ```

   显示正确结果如下：
    ```bash
    46de85de37b8e670883e6f6a8bb95776  rock-5b-spi-image-g49da44e116d.img
    958cbdb6cf9b2e0841fd76c26930db8f  rock-5b-spi-image-g3caf61a44c2-debug.img
    1b83982a5979008b4407552152732156  rkspi_loader.img
    ```

6. 烧录SPI Flash
   - 确保SPI Flash是可以使用的
    ```bash
    ls /dev/mtdblock*
    # 返回
    /dev/mtdblock0
    ```
   - 清理SPI Flash，这过程需要5分钟以上。
    ```bash
    sudo dd if=zero.img of=/dev/mtdblock0
    ```
   - 检查是否被清除成功
    ```bash
    sudo md5sum /dev/mtdblock0 zero.img
    # 正确返回
    2c7ab85a893283e98c931e9511add182  /dev/mtdblock0
    2c7ab85a893283e98c931e9511add182  zero.img
    ```
   - 烧录你下载的bootloader到SPI Flash，例如 rock-5b-spi-image-g49da44e116d.img
    ```bash
    sudo dd if=rock-5b-spi-image-g49da44e116d.img of=/dev/mtdblock0
    sync
    # 检查是否成功烧录
    sudo md5sum /dev/mtdblock0 rock-5b-spi-image-g49da44e116d.img
    ```
   返回的结果是相同的才是正确的。如果不是，请重新烧录一遍bootloader。

7. 重启生效

现在，您已经完成了刷新支持NVMe引导的引导加载程序。
- 如果您没有刷写NVMe SSD，请查看[安装镜像到NVME](../getting-started/m2-install)以进行烧录。
- 如果你已刷写NVMe SSD，请关闭ROCK 5的电源，取出Micro SD卡或eMMC模块并重新通电。现在应该从NVMe启动


</TabItem>
<TabItem value="高级方法" label="高级方法">


## 高级方法

### 准备
- ROCK 5A
- 良好的电源适配器
- Linux镜像，不支持Android
- Micro SD卡或eMMC模块
- USB Type C线材
- 主机PC（Windows/linux/macOS ）

### 步骤

1. 安装驱动和工具
- 请查看工具教程，安装[RockChip Flash tools](./rkdevtool)在Windows/Linux/MacOS PC.
- 我们通过将ROCK5A设置为Maskrom模式，与RockChip工具通信，Linux/macOS上的rkdevelopool和Windows PC上的RkDevtool。

2. 获取RK3588 loader和U-boot images
- 下载[loader images](https://dl.radxa.com/rock5/sw/images/loader/rock-5b/rk3588_spl_loader_v1.08.111.bin)

- 下载最新SPI镜像
   - [正式版本](https://dl.radxa.com/rock5/sw/images/loader/rock-5b/release/rock-5b-spi-image-g49da44e116d.img)，u-boot串口控制台关闭
   - [Debug版本](https://dl.radxa.com/rock5/sw/images/loader/rock-5b/debug/rock-5b-spi-image-g3caf61a44c2-debug.img)，u-boot串口控制台启动
   <!-- armbian官方暂未支持Radxa Rock 5A -->
   <!-- - [Armbian版本](https://github.com/huazi-yg/ROCK 5A/releases/download/ROCK 5A/rkspi_loader.img)，需要安装armbian Image到M.2 NVME SSD时使用 -->

3. ROCK 5A进入Maskrom模式

- 把板子启动到Maskrom模式：
ROCK 5A进入maskrom模式的步骤：
1. 拔掉板子的电源。
2. 将eMMC或其他存储介质取下。
3. 把USB-A转USB-A线一端插入ROCK 5A**上方的** [USB 3.0端口](../getting-started/overview)(8号标注)， 另一端接入电脑USB 3.0端口。  
4. 插电启动板子：  
![ROCK 5A power on](/img/rock5a/rock5a_power.webp)  
5. 装上eMMC模块或其他安装介质。

另一种方法是在开机前把两个[maskrom针脚](../getting-started/overview)(23号标注)短接，这种方式不需要把eMMC模块和其他存储器拿下来。  

1. 将u-boot镜像写入SPI NOR flash或擦除SPI NOR flash

- 选择1. 使用Linux PC/Mac 烧录
  在linux 或 Mac上，运行rkdeveloptool
```bash
sudo rkdeveloptool ld
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=106 Maskrom
```
此命令操作：加载loader（）到ROCK 5A上运行并初始化内存并准备烧录环境等。
```bash
sudo rkdeveloptool db /path/to/rk3588_spl_loader_v1.08.111.bin  
Downloading bootloader succeeded.
```
接下来，将SPI images从PC/Mac写入ROCK 5A SPI flash
使用Step 2的images
```bash
sudo  rkdeveloptool wl 0 rock-5b-spi-image-g49da44e116d.img
Write LBA from file (100%)
```

重启设备
```bash
rkdeveloptool rd
```
现在设备在SPI Nor Flash上启动, 蓝色指示灯亮起。

- 选择2. 使用Windows PC烧录

打开RKDevTool.exe会看到如下界面：

![RKDevTool-01](/zh/img/ROCK 5A/rock-5b-spi-flash-01.png)

第1步：确认ROCK 5A处于maskrom模式
如果你的ROCK 5A处于maskrom模式并连接PC，你可以看到程序检测到它，如图圆圈2
Found One MASKROM Device

第2步：加载配置文件
在列表框中右击选择Load Config，圆圈3，然后选择资源管理文件夹下的配置文件（配置文件和RKDevTool同目录）

![RKDevTool-02](/zh/img/ROCK 5A/rock-5b-spi-flash-02.png)

第3步：选择loader
接下来，单击“Loader”行中右侧的最后一列以选择 rk3588_spl_loader_v1.08.111.bin。图中圆圈4

第4步：选择SPI image
单击“spi”行中右侧的最后一列以选择spi-image。

第5步：执行Run
最后点击“执行”按钮，当进度达到100%时，下载完成。

![RKDevTool-03](/zh/img/ROCK 5A/rock-5b-spi-flash-03.png)

## 擦除SPI Nor Flash

选择1：在ROCK 5A上操作
- 使用在Micro SD卡或eMMC模块上运行的Linux启动您的ROCK5A：
- 确保SPI闪存可用：
```bash
ls /dev/mtdblock*
# 输出以下内容
/dev/mtdblock0
```
- 执行以下命令即可
```bash
sudo dd if=/dev/zero of=/dev/mtdblock0
sync
```

选择2：在主机Linux PC/Mac上擦除

在擦除之前，请确保ROCK 5A进入Maskrom模式

- 打开RKDevTool，选择Adavanced Function。
- 在Boot上选择rk3588_spl_loader_v1.08.111.bin，然后点击下载按钮。
- 进度完成后，点击EraseALL按钮
- 结束后重启设备ResetDevice

![RKDevTool-04](/zh/img/ROCK 5A/rock-5b-spi-flash-04.png)


</TabItem>
</Tabs>

