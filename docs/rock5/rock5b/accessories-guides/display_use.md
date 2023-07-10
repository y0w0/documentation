---
sidebar_label: 'Radxa Display 8 HD使用教程'
sidebar_position: 3
---


# Radxa Display 8 HD使用教程

![显示屏安装-01](/img/rock5b/rock5b-display-8hd-FPC.webp)  
![显示屏安装-02](/img/rock5b/rock5b-display-8hd-connected.webp)  
- 准备好Radxa Display 8HD 或者Radxa Display 10HD，通过FPC线接上ROCK5B。
- 启动后，添加一行到文件/boot/config.txt末尾
```
dtoverlay=rock-5b-radxa-display-8hd
# 或者
dtoverlay=rock-5b-radxa-display-10hd
```
- root权限执行命令，然后重启设备即可。
```
$ sudo su
# update_extlinux.sh
# reboot
```
