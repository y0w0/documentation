---
sidebar_label: '8/10 inch Display Screen Tutorial'
sidebar_position: 3
---

# 8/10 inch Display Screen Tutorial

![Panel Connection](/img/rock5b/rock5b-display-8hd-FPC.webp)  
![Panel Connection](/img/rock5b/rock5b-display-8hd-connected.webp)  

- Prepare Radxa Display 8HD or Radxa Display 10HD, and connect to ROCK5B through FPC cable.
 
- Simultaneously press `Ctrl + Alt + T` to open a terminal and run the `rsetup` command as follows:

```bash
radxa@rock-5b:~$ rsetup
```

Enter the password and select `Overlays` to access the `rsetup` utility screen.  

```bash
Configure Device Tree Overlay
        Manage overlays
        View overlay info
        Install overlay from source
        Reset overlays
        <Ok>             <Cancel>
```

Then, select `Manage overlays`.

```bash
Configure Device Tree Overlay  
        Manage overlays  
        View overlay info  
        Install overlay from source  
        Reset overlays  
       

      <Ok>            <Cancel>
```

Next, go to the management interface of the device, which may vary from product to product.

```bash
Please select overlays: 
        [ ] Enable 1-Wire on GPIO4_B1
        [ ] Enable FIQ Debugger on UART4-M2
        [ ] Enable FIQ Debugger on UART6-M1
        [ ] Enable FIQ Debugger on UART7-M2
        [ ] Enable FIQ Debugger on UART8-M0
        [ ] Enable I2C1-M0
        [ ] Enable I2C2-M4
        [ ] Enable I2C4-M3
        [ ] Enable I2C6-M0
        [ ] Enable I2C6-M3
        [ ] Enable I2C7-M3
        [ ] Enable PWM0-M2
        [ ] Enable PWM1-M2
        [ ] Enable PWM11-M1
        [ ] Enable PWM14-M1
        [ ] Enable PWM14-M2 
        [ ] Enable PWM15-M1
        [ ] Enable PWM15-M3 
        [ ] Enable PWM6-M0
        [ ] Enable PWM7-M0
        [ ] Enable Radxa Camera 4K
        [ ] Enable Radxa Display 10HD 
        [ ] Enable Radxa Display 8HD
        [ ] Enable Raspberry Pi Camera V2
        [ ] Enable UART2-M0
        [ ] Enable UART2-M2
        [ ] Enable UART3-M1
        [ ] Enable UART4-M2
        [ ] Enable UART6-M1
        [ ] Enable UART7-M1
        [ ] Enable UART7-M1 with Hardware Flow Control
        [ ] Enable UART7-M2
        [ ] Enable UART8-M0
        [ ] Enable spidev on SPI0-M1 over CS0
        [ ] Enable spidev on SPI0-M2 over CS0
        [ ] Enable spidev on SPI4-M2 over CS0
        [ ] Set OTG port to Host modeq
        [ ] Set OTG port to Peripheral mode
        <Ok>                   <Cancel>
```

Press the spacebar to enable the 8HD screen `Enable Radxa Display 8HD`

```bash
[*] Enable Radxa Display 8 HD
```

Finally, reboot and it's ready to use.

```bash
radxa@rock-5b:~$ sudo reboot
```
