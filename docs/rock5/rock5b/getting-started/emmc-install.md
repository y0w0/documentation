---
sidebar_label: '安装镜像到eMMC 模块'
sidebar_position: 31
---

# 在eMMC模块上安装操作系统

## 准备

- 准备一个eMMC模块和一个[Radxa eMMC读卡器](../../../accessories/emmc_reader)。
![Radxa eMMC](/img/accessories/emmc_related_01.webp)
- [下载](../downloads/official-images)官方的Ubuntu/Debian系统镜像。
- [下载](https://www.balena.io/etcher#download-etcher)刷写工具`Etcher`。
![ROCK5A via Etcher](/img/rock5a/rock5a-etcher.webp)

## 安装

1. 将eMMC模块插入Radxa eMMC USB读卡器，然后将Radxa eMMC USB 读卡器插入计算机的USB接口。
    **注意：将eMMC模块插入Radxa eMMC读卡器时，请将A1端口与A2端口对齐，然后将B1端口插入B2端口**
    
    ![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.webp)
    ![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.webp)

- 打开Etcher，将准备的操作系统镜像刷写到eMMC模块。在Etcher窗口中，单击`Flash from file`选择刚下载的操作系统镜像。
    
    ![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.webp)

- 在Etcher窗口中，点击`Select target`。

    ![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.webp)

- 在Etcher窗口中，点击`Flash!`然后等待刷写进度条。

    ![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.webp)

- 在Etcher窗口中，当刷写成功时将会显示`Flash Complete!`
    
    ![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.webp)
