---
sidebar_label: 'Radxa Camera 4K 使用教程'
sidebar_position: 4
---


# Radxa Camera 4K 使用教程

![Camera-4K安装-01](/img/rock5b/rock5b-with-4k-camera-FPC.webp)  
![Camera-4K安装-02](/img/rock5b/rock5b-4k-camera-connected.webp)  
![Camera-4K安装-03](/img/rock5b/rock5b-4k-camera.webp)  
- 准备好Radxa Camera 4K，通过FPC线接上ROCK5B。
- 启动后，添加一行到文件/boot/config.txt末尾
```
dtoverlay=rock-5ab-camera-imx415
```
- root权限执行命令，然后重启设备即可。
```
$ sudo su
# update_extlinux.sh
# reboot
```

- 重启设备后，你将看到/dev/video0到/dev/video19。
- 检测摄像头拓扑图
```
media-ctl -p
```
- 开启rkaiq摄像头预览

- 执行脚本，需要root权限
```
$ sudo su
# test_camera_rkaiq.sh
```

- test_camera_rkaiq脚本代码
```
# cat /usr/local/bin/test_camera_rkaiq.sh
#!/bin/bash

#export GST_DEBUG=*:5
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/lib/aarch64-linux-gnu/gstreamer-1.0
echo "Start RKAIQ Camera Preview!"

# Example: Radxa Camera 4K on ROCK 5B
gst-launch-1.0 v4l2src device=/dev/video11 ! video/x-raw,format=NV12,width=3840,height=2160, framerate=30/1 ! xvimagesink
```
