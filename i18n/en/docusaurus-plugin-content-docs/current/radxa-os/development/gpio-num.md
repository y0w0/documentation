---
sidebar_label: "GPIO Number Introduction"
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

## GPIO Number Acquisition Method

The available GPIO pins are labelled by default in the system. This can be viewed via `gpioinfo`:

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

You can also query by using the `gpiofind` command:

```bash
radxa@radxa-zero2:~$ sudo gpiofind PIN_27
[sudo] password for radxa:
gpiochip0 0
```
