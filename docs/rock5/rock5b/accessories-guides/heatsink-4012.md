---
sidebar_label: 'Heatsink 4012 使用教程'
sidebar_position: 40
---

# Heatsink 4012 使用教程

## 安装

Heatsink 4012是专门为ROCK 5B量身定制的散热风扇，如图所示，先将散热硅胶贴在ROCK 5B，然后把散热硅胶涂在芯片上，如图将卡扣对准ROCK 5B的露铜区按压下去，连接电源线就完成了。

## 配置

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
您可以通过以下指令查看散热风扇支持多少速度挡位：
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

**注意：如果你安装的是安卓系统，CPU温度在50摄氏度以下散热风扇是不工作的。只要当CPU温度达到50℃以上，散热器才工作。**