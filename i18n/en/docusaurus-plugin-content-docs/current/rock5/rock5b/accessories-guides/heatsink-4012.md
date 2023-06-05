---
sidebar_label: 'Using Radxa Heatsink 4012 for ROCK 5B'
sidebar_position: 20
---

# Using Radxa Heatsink 4012 for ROCK 5B

Heatsink 4012 is a cooling fan specially tailored for ROCK 5B. The installation tutorial is shown in the figure:
- Paste the cooling silicone on the radiator;
- Apply thermal silica gel on the chip;
- Align the buckle with the exposed copper area of ROCK 5B and press down;
- Connect the power cord.

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