---
sidebar_label: '认识 ROCK 5A'
sidebar_position: 10
---

# 简介

Radxa ROCK 5 Model A (简称 ROCK 5A)是一款外形紧凑、具有各种领先的功能特性且扩展性极佳的单板机 (SBC)。
ROCK 5A 对于创客、物联网玩家、业余爱好者、游戏玩家以及个人电脑用户等需要一个指定的高性能高可靠性的平台的人来说是一个理想的选择。 
Radxa 为 ROCK 5A 搭载了以下容量的 LPDDR4X 内存选项：4GB / 8GB / 16GB  

![ROCK5A Interface](/img/rock5a/rock5a_interfaces.webp)

**_提示:_ 实际的电路布局和元器件位置可能因为版本不同而产生变化，但是主要元件的类型和位置基本不会发生改变。**

# 尺寸规格

![ROCK5A Dimension Top](/img/rock5a/rock5a-dimension-top.webp)
![ROCK5A Dimension Bottom](/img/rock5a/rock5a-dimension-bottom.webp)

## 需求电源

ROCK 5A 支持包括固定电压和智能协议电压的各种电源技术：  

- USB Type-C™ PD 2.0协议： 9V/2A, 12V/2A, 15V/2A, 20V/2A.
- 骁龙® QC™ 2.0 QC 3.0/2.0 协议： 9V/2A, 12V/2A
- USB Type-C接口的 5.2V 至 20V 电压
- GPIO 2 & 4 针脚支持5V电压输出

在使用 SSD 的情况下推荐至少能输出 30 W 的适配器，不使用SSD时推荐适配器至少输出 24 W 。

## ROCK 5A 使用eMMC教程  
当你收到 ROCK 5A 时，ROCK 5A 安装了 SPI Flash，你需要把 SPI Flash 取下来之后才可以安装 eMMC。eMMC 采用的是 B2B 连接器，与 ROCK 5A 的 B2B 连接接口对准安装就可以。如图所示：

![ROCK5A Using eMMC](/img/rock5a/rock5a-use-emmc.webp)

## 工作环境

ROCK 5A 的设计工作温度为 0°C 到 50°C。  

这一温度范围是根据 Arm big.LITTLE 技术对特定任务自动选择处理器内核的使用情况来确定的，其结果是发热和用户操作体验的最优组合。  

ROCK 5A 基于一套能长时间稳定运行且以效率为核心的高性能移动芯片组而设计。 其发热量随着性能释放以及工作负荷的增加而增加， 
在浏览网页、编辑文本及听音乐等低负荷使用场景时，SoC 将会自动选择最少的处理器核心或硬件加速器来减少发热， 以便于在需要时有新任务需求时能释放足够的性能。 

为保证可靠性，本 SoC(Rk3588S) 在标准频率下的最高工作温度预设为 80°C，如果需要 ROCK 5A 持续高负荷工作，就需要使用外部辅助散热，如风扇、散热器，在温度不超过峰值的情况下，处理器可以以标准频率持续运行。  
