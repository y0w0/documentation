---
sidebar_label: 'Rockchip GPIO Number Calculation Guide'
sidebar_position: 30
---

# Introduction

Rockchip usually provides 5 banks for the SoC, GPIO0 to GPIO4, each bank has 32pins, naming as below:

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

## GPIO Number Calculation Method

For Rockchip 4.19 kernel and 5.10 kernel, the GPIO number can be calculated as below, take GPIO4_D5 as an example:

```
GPIO4_D5 = 32*4 + 8*3 + 5 = 157
(A=0, B=1, C=2, D=3)
```

![GPIO_numbew](/img/configuration/gpio-number.webp)

For example, to set GPIO4_D5 output:

```bash
# cd /sys/class/gpio
# echo 157 > export
# cd gpio157
# echo out > direction
# echo 1 > value     # output high
# echo 0 > value     # output low
```
