---
sidebar_label: 'ROCK 5A使用Radxa Heatsink 2513教程'
sidebar_position: 20
---

# ROCK 5A使用Radxa Heatsink 2513教程

## 安装教程

将散热硅胶粘在散热风扇上，然后对准芯片粘上去。

![Use Heatsink on ROCK 5A](/img/rock5a/heatsink-1.webp)

将散热风扇的电源线接在ROCK 5A的风扇电源供电口上，如图所示：

![Use Heatsink on ROCK 5A](/img/rock5a/heatsink-2.webp)

## 配置

同时按“Ctrl + Alt + T”打开终端，运行“rsetup”命令如下：

```bash
radxa@rock-5a:~$ rsetup
```

输入密码并选择`Hardware` 进入硬件控制端界面:

```bash
Please select an option below:
        System Maintaince
        Hardware 
        Overlays
        Connectivity
        User Settings
        Localization
        About
        <Ok>            <Cancel>  
```

按然后进入 `Thermal governor` 去使能 `user_space`.
```bash
Manage on-board hardware: 
        Video capture devices
        GPIO LEDs       
        Thermal governor
        Configure DSI display mirroring
        <Ok>            <Cancel>       
```
启动 `user_space`完成之后请按`Esc`退出设备设置。

找到风扇设备节点 `pwm-fan`:

```bash
cat /sys/class/thermal/cooling_device*/type
```

举个例子，该散热风扇的挂载在 `cooling_device1`，你将会通过`cat /sys/class/thermal/cooling_device1/type`查看到`pwm-fan`: 
```bash
radxa@rock-5a: cat /sys/class/thermal/cooling_device1/type
pwm-fan
```

**注意：以下操作以`cooling_device1`为例**

直接打开散热风扇最高速度:
```
radxa@rock-5a:~$ sudo cp /sys/class/thermal/cooling_device1/max_state /sys/class/thermal/cooling_device1/cur_state
```
您可以通过以下指令查看散热风扇支持多少转速：
```
radxa@rock-5a:~$ cat /sys/class/thermal/cooling_device1/max_state
4
```

如果要选择第三档速度，请按照以下指令进行操作：
```
echo 3 | sudo tee /sys/class/thermal/cooling_device1/cur_state
```

如果您想使用其他速度档位，只需更改数字即可。 如果要关闭散热风扇，速度档选0即可。
```
echo 0 | sudo tee /sys/class/thermal/cooling_device1/cur_state
```