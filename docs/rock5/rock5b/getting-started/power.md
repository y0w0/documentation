---
sidebar_label: 'Power off'
sidebar_position: 50
---

# Power control of ROCK 5B

There are two ways for you to control the power of ROCK 5B, software and hardware. Here is a introduction about it. 

## Software control

Due to long time development of developers, there are many [third party operating systems](../download/3rd-images) available for ROCK 5B, everyone is difficult with others.  
**Take the debian system with KDE Desktop as an example here.**

### Desktop

1. Click on the icon in the lower left corner and select the **Leave** option. 
2. You will be able to see the System function options.
3. You can select the function you need: **(Sleep, Reboot, Shutdown)**.  
![GUI leave](/img/rock5b/KDE-GUI-leave.webp)
4. After clicking the power function, the system would give you a interface to let you confirm or cancel your selection.  
![ROCK5B Power](/img/rock5b/KDE-power-status.webp)


### Command Line

At first, you need to press 'Ctrl + Alt + T' or find 'Terminal' on the Desktop to open the terminal.

**Restart**  
Enter the following command and press Enter.
It will reboot the system if the password is correct. 
If wrong, please re-enter the correct password.

```
sudo reboot
```

**Shutdown**  
Enter the following command and press Enter.
It will shutdown the system if the password is correct. 
If wrong, please re-enter the correct password.

```
sudo shutdown now
```

There is also another command works:

```
sudo poweroff
```

## Hardware

Hardware control is always the powerful control method. 

### Power key

Take attention to distinguish between the power button and the recovery button:  

![ROCK5b Power](/img/rock5b/ROCK5B-TOP.webp)  

You can boot your device by short pressing the power button with electricity on.  

If you are not logged in, short press the power button will let the board shutdown.  

If you had logged in, when you short press the power button, you would see a interface that remind you to confirm your operation.  
![ROCK5B Power](/img/rock5b/KDE-power-status.webp)  

If you want to force a shutdown, long press the power button, it's not recommended because of that you may lose your work which unsaved.

### Power supply

The easiest way to switch on and off is to switch the power on and off.  
The first time plugging in the power cable, the device would boot automatically.
Unplug the power cord to power off the device may also let you lose your work which unsaved.  
Remember to save your work before you try to unplug the power cord!
