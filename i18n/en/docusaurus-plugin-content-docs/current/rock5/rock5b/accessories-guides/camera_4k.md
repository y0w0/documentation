---
sidebar_label: 'Using Camera 4K on ROCK 5B'
sidebar_position: 4
---

# Using Camera 4K on ROCK 5B

![4K Camera Installation](/img/rock5b/rock5b-with-4k-camera-FPC.webp)  
![4K Camera Installation](/img/rock5b/rock5b-4k-camera-connected.webp)  
![4K Camera Installation](/img/rock5b/rock5b-4k-camera.webp)  
- Prepare Radxa Camera 4K and connect to ROCK5B through FPC cable.
- After startup, add the following command to the end of the file /boot/config.txt
```
dtoverlay=rock-5ab-camera-imx415
```
- Execute commands with root privileges, and then restart the device.
```
$ sudo su
# update_extlinux.sh
# reboot
```

- After restarting the device, you will check /dev/video0 to /dev/video19.
- Detection camera topology
```
media-ctl -p
```
- Enable rkaiq camera preview

- To execute the script, root privileges are required
```
$ sudo su
# test_camera_rkaiq.sh
```

- test_camera_rkaiq script code
```
# cat /usr/local/bin/test_camera_rkaiq.sh
#!/bin/bash

#export GST_DEBUG=*:5
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/lib/aarch64-linux-gnu/gstreamer-1.0
echo "Start RKAIQ Camera Preview!"

# Example: Radxa Camera 4K on ROCK 5B
gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
