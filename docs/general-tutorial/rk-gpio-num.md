---
sidebar_label: 'Rockchip GPIO 编号计算指导'
sidebar_position: 30
---

# 简介

Rockchip 通常会为 SoC 提供 5 个 GPIO 库，GPIO0 到 GPIO4，每个库有 32 个引脚，命名如下。

```
GPIO0_A0 ~ A7 
GPIO0_B0 ~ B7
GPIO0_C0 ~ C7
GPIO0_D0 ~ D7
   
GPIO1_A0 ~ A7
....
GPIO1_D0 ~ D7
```
```
GPIO2_A0 ~ A7
....
GPIO2_D0 ~ D7
```
```
GPIO3_A0 ~ A7
....
GPIO3_D0 ~ D7
```
```
GPIO4_A0 ~ A7
....
GPIO4_D0 ~ D7
```

## GPIO 编号计算方式

对于 Rockchip 4.19 和 5.10 内核，以 GPIO4_D5 为例，GPIO 编号的计算方法如下：

```
GPIO4_D5 = 32*4 + 8*3 + 5 = 157
(A=0, B=1, C=2, D=3)
```

![GPIO_numbew](/img/configuration/gpio-number.webp)

以设置 GPIO4_D5 输出为例，输入以下命令：

```bash
# cd /sys/class/gpio
# echo 157 > export
# cd gpio157
# echo out > direction
# echo 1 > value     # output high
# echo 0 > value     # output low
```
