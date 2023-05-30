---
sidebar_label: 'Using Radxa Heatsink 2513 on ROCK 5A'
sidebar_position: 20
---

# Using Radxa Heatsink 2513 on ROCK 5A

## Install on ROCK 5A

Stick the cooling silicone on the cooling fan, and then stick it on the chip.

![Use Heatsink on ROCK 5A](/img/rock5a/heatsink-1.webp)

Connect the power cable of the cooling fan to the fan power supply port of ROCK 5A, as shown in the figure:

![Use Heatsink on ROCK 5A](/img/rock5a/heatsink-2.webp)



Stick the heat dissipation silicone on the heat dissipation fan, and then stick it on the chip. Connect the power cable of the cooling fan to the fan power supply port of ROCK 5A, as shown in the figure:

## Configuration

Press "Ctrl + Alt + T" simultaneously to open a terminal, run `rsetup` command as below:

```
radxa@rock-5a:~$ rsetup
```

Typing the password and select `Hardware` to rsetup tool interface.  
Select `Hardware`:

```
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

Then, select `Thermal governor` to enable `user_space`.
```
Manage on-board hardware: 
        Video capture devices
        GPIO LEDs       
        Thermal governor
        Configure DSI display mirroring
        <Ok>            <Cancel>       
```
After starting `user_space`, press `Esc` to exit the device settings.

Find the node of the fan device `pwm-fan`:

```
cat /sys/class/thermal/cooling_device*/type
```

For example, the node of the pwm fan is `cooling_device1`: 
```
radxa@rock-5a: cat /sys/class/thermal/cooling_device1/type
pwm-fan
```

**Note: The following operations take `cooling_device1` as an example.**

Directly open the highest speed:
```
radxa@rock-5a:~$ sudo cp /sys/class/thermal/cooling_device1/max_state /sys/class/thermal/cooling_device1/cur_state
```

You can check how many speeds the cooling fan supports through the following:
```
radxa@rock-5a:~$ cat /sys/class/thermal/cooling_device1/max_state
4
```

If you want to select the third speed, follow the instructions below:  
```
echo 3 | sudo tee /sys/class/thermal/cooling_device1/cur_state
```

If you want to use another speed gear, you just need to change the number. If you want to turn off the cooling fan, just select 0 for the speed gear.
```
echo 0 | sudo tee /sys/class/thermal/cooling_device1/cur_state
```