---
sidebar_label: '认识 ROCK 5A'
sidebar_position: 10
---

# 简介

Radxa ROCK 5 Model A (简称ROCK 5A)是一款外形紧凑、具有各种领先的功能特性且扩展性极佳的单板机(SBC)。
ROCK 5A对于创客、物联网玩家、业余爱好者、游戏玩家以及个人电脑用户等需要一个指定的高性能高可靠性的平台的人来说是一个理想的选择。 
Radxa为ROCK 5A搭载了以下容量的LPDDR4X内存选项：4GB / 8GB / 16GB  

![ROCK5A Interface](/img/rock5a/rock5a_interfaces.webp)

**_提示:_ 实际的电路布局和元器件位置可能因为版本不同而产生变化，但是主要元件的类型和位置基本不会发生改变。**

# 尺寸规格

![ROCK5A Dimension Top](/img/rock5a/rock5a-dimension-top.webp)
![ROCK5A Dimension Bottom](/img/rock5a/rock5a-dimension-bottom.webp)

## 需求电源

ROCK 5A支持包括固定电压和智能协议电压的各种电源技术：  

- USB Type-C™ PD 2.0协议： 9V/2A, 12V/2A, 15V/2A, 20V/2A.
- 骁龙® QC™ 2.0 QC 3.0/2.0 协议： 9V/2A, 12V/2A
- USB Type-C接口的 5.2V 至 20V 电压
- GPIO 2 & 4 针脚支持5V电压输出

在使用SSD的情况下推荐至少能输出30W的适配器，不使用SSD时推荐适配器至少输出24W。

## 工作环境

ROCK 5A的设计工作温度为0°C到50°C。  

这一温度范围是根据Arm big.LITTLE技术对特定任务自动选择处理器内核的使用情况来确定的，其结果是发热和用户操作体验的最优组合。  

ROCK 5A基于一套能长时间稳定运行且以效率为核心的高性能移动芯片组而设计。 其发热量随着性能释放以及工作负荷的增加而增加， 
在浏览网页、编辑文本及听音乐等低负荷使用场景时，SoC将会自动选择最少的处理器核心或硬件加速器来减少发热， 以便于在需要时有新任务需求时能释放足够的性能。 

为保证可靠性，本SoC(Rk3588S)在标准频率下的最高工作温度预设为80°C，如果需要ROCK 5A持续高负荷工作，就需要使用外部辅助散热，如风扇、散热器，在温度不超过峰值的情况下，处理器可以以标准频率持续运行。  
