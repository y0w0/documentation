---
sidebar_label: '8/10 inch Display Screen Tutorial'
sidebar_position: 3
---

# 8/10 inch Display Screen Tutorial

![Panel Connection](/img/rock5b/rock5b-display-8hd-FPC.webp)  
![Panel Connection](/img/rock5b/rock5b-display-8hd-connected.webp)  

- Prepare Radxa Display 8HD or Radxa Display 10HD, and connect to ROCK5B through FPC cable.
- After startup, add a line to the end of the file /boot/config.txt
```
dtoverlay=rock-5b-radxa-display-8hd
# or
dtoverlay=rock-5b-radxa-display-10hd
```
- Execute the command with root authority, and then restart the device.
```
$ sudo su
# update_extlinux.sh
# reboot
```
