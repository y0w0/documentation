---
sidebar_label: 'rsetup工具介绍'
sidebar_position: 0
---

# 简介

`rsetup` 是瑞莎团队开发的瑞莎系统设置工具。要进入配置工具，在终端键入以下内容：  

```
rsetup  
```

输入正确密码后，可进入rsetup主页面：  

```
┌──────────────────────────────────┤ RSETUP ├──────────────────────────────────┐
│ Please select an option below:                                               │
│                                                                              │
│                             System Maintaince                                │
│                             Hardware                                         │
│                             Overlays                                         │
│                             Connectivity                                     │
│                             User Settings                                    │
│                             Localization                                     │
│                             About                                            │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                     <Ok>                         <Cancel>                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**注意：不同的产品显示的菜单可能略有不同。**  

使用 `up` (方向上)或 `down` (方向下)键来选择对应的设置项，选中的项会高亮。

使用 `right` (方向右)或 `left` (方向左)键将从选项菜单移到 `<Ok>` 和 `<Cancel>` 选项。

或者，你可以使用 `Tab` 键在这些之间切换。

使用 `Enter` 键转到相应的选项。

使用`Esc`键回到前一个菜单。

## System Maintaince选项

你可以在这个选项上更新**System**和**Bootloader**。  
***警告： 升级Bootloader可能带来无法启动的风险，除非必要，否则不要升级。*** 

## Hardware选项

在这个菜单上可以修改一些外围设备，下面是对它们的介绍。 

```
┌──────────────────────────────────┤ RSETUP ├──────────────────────────────────┐
│ Manage on-board hardware                                                     │
│                                                                              │
│                      Video capture devices                                   │
│                      GPIO LEDs                                               │
│                      Thermal governor                                        │
│                      Configure DSI display mirroring                         │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                     <Ok>                         <Cancel>                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Video capture devices选项

如果你有连接一个视频设备，这个选项可以帮助你测试该设备。 

### GPIO LEDs选项

在这个选项上，你可以改变板子上的电源LED和用户LED的状态（有时只有一个）。 
详细情况请参考[LED设置](led)。 

### Thermal governor选项

该模块用于调整风扇和其他温度选项。 
一般来说，当使用直流风扇或不使用风扇时，选择`power_allcator`，当使用PWM风扇时，选择`step_wise`。  
**注意：如果你将风扇直接连接到GPIO的5V和GND引脚上，它将不受控制且一直工作。**

### Configure DSI display mirroring选项

如果在同时使用HDMI显示器和DSI显示器时，DSI显示器有一些问题，启用这个选项会有所帮助。 

## Overlays选项

该选项用于配置设备树Overlays，请查看[设备树配置](devicetree)获取更多信息。

## Connectivity选项

该选项与[网络设置](../network)类似。

## User Settings选项

可以在这个选项上更改当前登录账户的 `Password` 和设备的 `Hostname`。 

## Localization选项

在这个选项中, 你可以改变 `Timezone` `Locale` `Keybaed layout` `Wi-Fi Country`.  

## About选项

这里是 `rsetup `的相关信息。
