---
sidebar_label: 'Using Camera 4K on ROCK 5B'
sidebar_position: 4
---

# Using Camera 4K on ROCK 5B

![4K Camera Installation](/img/rock5b/rock5b-with-4k-camera-FPC.webp)  
![4K Camera Installation](/img/rock5b/rock5b-4k-camera-connected.webp)  
![4K Camera Installation](/img/rock5b/rock5b-4k-camera.webp)  
- Prepare Radxa Camera 4K and connect to ROCK5B through FPC cable.

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

Next, the tree of installed devices will be displayed, it may vary from product to product. At `Radxa Camera 4K` press the space bar

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

Use the spacebar to select the device you want to load.

```bash
[*] Enable Radxa Camera 4K
```

Overlay shows `*` at the beginning to indicate that it is enabled. It will work after a restart.

```bash
radxa@rock-5b:~$ sudo reboot
```

## Test Radxa Camera 4K

You can download **cheese** and use the camera with the following command.

```bash
radxa@rock-5b: sudo apt update
radxa@rock-5b: sudo apt install cheese
radxa@rock-5b: ./cheese
```

Also, you can open the camera preview using the terminal command.

```bash
gst-launch-1.0 v4l2src device=/dev/video11 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! xvimagesink;   
```

Take a picture using the following command.

```bash
gst-launch-1.0 v4l2src device=/dev/video11 io-mode=4 ! videoconvert ! video/x-raw,format=NV12,width=1920,height=1080 ! jpegenc ! multifilesink location=file.name.jpg;  
```

Use the following command to take a video.

```bash
gst-launch-1.0 v4l2src num-buffers=512 device=/dev/video11 io-mode=4 ! videoconvert ! video/x-raw, format=NV12, width=1920, height=1080, framerate=30/1 ! tee name=t ! queue ! mpph264enc ! queue ! h264parse ! mpegtsmux ! filesink location=/home/radxa/file.name.mp4
```
