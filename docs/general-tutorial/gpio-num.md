---
sidebar_label: 'GPIO 编号介绍'
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

## GPIO 编号获取方式

我们在系统中默认对可用的 GPIO 引脚进行了标注。可通过 `gpioinfo` 查看：

```bash
radxa@radxa-zero2:~$ sudo gpioinfo
[sudo] password for radxa: 
gpiochip0 - 85 lines:
        line   0:     "PIN_27"       unused   input  active-high 
        line   1:     "PIN_28"       unused   input  active-high 
        line   2:      "PIN_7"       unused   input  active-high 
        line   3:     "PIN_11"       unused   input  active-high 
        line   4:     "PIN_13"       unused   input  active-high 
        line   5:     "PIN_15"       unused   input  active-high 
        line   6:     "PIN_18"       unused   input  active-high 
        line   7:     "PIN_40"       unused   input  active-high 
        line   8:      unnamed       unused   input  active-high 
        line   9:      unnamed       unused   input  active-high
        ......
```

你也可以通过 `gpiofind` 命令进行查询：

```bash
radxa@radxa-zero2:~$ sudo gpiofind PIN_27
[sudo] password for radxa: 
gpiochip0 0
```
