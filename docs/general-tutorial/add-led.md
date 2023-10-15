---
sidebar_label: "添加 LED（使用 rsetup 加载第三方设备树覆写文件（DTBO））"
sidebar_position: 10
---

# 添加 LED（使用 rsetup 加载第三方设备树）

:::info
Radxa 发售的单板计算机或者计算模块一般默认情况下拥有两个 LED：  
一颗电源灯（软件不可修改）  
一颗系统心跳灯  
是否想拥有像 PC 一样的硬盘状态灯或者网口状态灯，那就跟着教程来做吧！  
以 Radxa 5B 为例，需要根据使用的 GPIO 修改设备树覆写文件（DTBO）
:::

## 硬件连接

```
GPIO3_C1(PIN11)(3.3V) <----> 电阻 (根据 LED 的数据手册选择大小) <----> LED正极 <----> LED负极 <----> GND(PIN9)
```

## 编写设备树覆写文件（DTBO）

```bash
sudo vim /boot/user_led3.dts
```

### 以下为文件内容：

```
/dts-v1/;
/plugin/;

#include <dt-bindings/gpio/gpio.h>
#include <dt-bindings/pinctrl/rockchip.h>

/ {
    fragment@0 {
        target-path = "/gpio-leds";                                     #要修改的主 dts 节点
        __overlay__ {                                                   #再次花括号内添加或修改内容
            user-led3 {                                                 #添加 user-led3 节点
                gpios = <&gpio3 RK_PC1 GPIO_ACTIVE_HIGH>;               #将 GPIO3_C1 注册为 user-led3 的使能引脚，默认使能为电平拉高。
                            linux,default-trigger = "disk-activity";    #设置默认触发器为 disk-activity
                            default-state = "on";                       #默认使能
            };
        };
    };
};
```

## 进入 rsetup，并加载设备树覆写文件（DTBO）

```bash
sudo rsetup

# 按照一下选项进入加载设备树覆写文件（DTBO）界面
# Overlays -> Install 3rd party overlay
```

## 选择 user_led3.dts

![enable-user_led3](/img/general-tutorial/enable-user-led3.webp)

## 重启

```bash
sudo reboot
```

### 重启后即可看见 LED 灯会跟着硬盘状态闪动
