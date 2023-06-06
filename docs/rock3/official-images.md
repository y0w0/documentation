---
sidebar_label: '官方系统镜像'
sidebar_position: 5
---

# ROCK 3 系列官方镜像

ROCK 3 系列的官方镜像也可通过以下途径下载： 

- **[Radxa 百度云盘](http://rock.sh/rockpi-baidupan)**
- **[ROCK 3 软件发布](https://github.com/radxa/debos-radxa/releases/latest)** - 最新发布的系统镜像。

用户名及密码：  
以下适用于Ubuntu服务端。
Lubuntu有两个默认用户：`root` 和 `rock`。用户名及密码如下：
```
user password
rock    rock
root    root
```

如果是自己编译的镜像，默认用户是 `linaro`：

```
user password
linaro linaro
```

## 烧写工具

|描述|Linux工具|MacOS工具|Windows工具|
|-|-|-|-|
|Etcher - 用户友好型烧写工具|[Linux 64bit](https://github.com/balena-io/etcher/releases/download/v1.4.9/balena-etcher-electron-1.4.9-linux-x64.zip) \| [Linux 32bit](https://github.com/balena-io/etcher/releases/download/v1.4.9/balena-etcher-electron-1.4.9-linux-ia32.zip)|[balenaEtcher-1.4.9.dmg](https://github.com/balena-io/etcher/releases/download/v1.4.9/balenaEtcher-1.4.9.dmg)|[balenaEtcher-Setup-1.4.9-x86.exe](https://github.com/balena-io/etcher/releases/download/v1.4.9/balenaEtcher-Setup-1.4.9-x86.exe)|

## 官方镜像

||![Debian](/img/Debian-logo.webp)|![Ubuntu](/img/Ubuntu-logo.webp)|![Android](/img/Android-Logo.webp)|
|:-:|-|-|-|
|系统信息|Debian Bullseye (11)<br/>[安装指南](https://wiki.radxa.com/Rock3/Debian)<br/>[CM3S IO Debian11 版本发布指南](https://forum.radxa.com/t/230331-system-release-notice-for-rock-3c/15678)<br/>[ROCK 3C Debian11 版本发布指南](https://forum.radxa.com/t/230428-system-release-notice-for-rock-3c/16282)<br/>瑞莎CM3核心板搭配树莓派CM4 IO板需要改变dtb文件，详细说明请查阅下载页。|Ubuntu Server 20.04<br/>[安装指南](https://wiki.radxa.com/Rock3/Ubuntu)<br/>瑞莎CM3核心板搭配树莓派CM4 IO板需要改变dtb文件，详细说明请查阅下载页。|版本：Android11-20220408_1204<br/>ROCK 3A/3B[安装指南](https://wiki.radxa.com/Rock3/install/usb-install)<br/>CM3 IO[安装教程](https://wiki.radxa.com/Rock3/installusb-install-radxa-cm3-io)|
|ROCK 3A|[点击跳转至下载页](https://github.com/radxa-build/rock-3a/releases/latest)|[点击跳转至下载页](https://github.com/radxa-build/rock-3a/releases/latest)|[点击立即下载](https://dl.radxa.com/rock3/images/android/rock3a-android11-20220408_1204-gpt.img.xz)|
|ROCK 3B|[点击跳转至下载页](https://github.com/radxa-build/rock-3b/releases/latest)|[点击跳转至下载页](https://github.com/radxa-build/rock-3b/releases/latest)|[点击立即下载](https://dl.radxa.com/rock3/images/android/rock3b-android11-20220408_1204-gpt.img.xz)|
|ROCK 3C|[点击立即下载](https://github.com/radxa-build/rock-3c/releases/download/b33/rock-3c_debian_bullseye_xfce_b33.img.xz)|[点击立即下载(Ubuntu Jammy)](https://github.com/radxa-build/rock-3c/releases/download/b33/rock-3c_ubuntu_jammy_cli_b33.img.xz)|-|
|CM3 IO|[点击跳转至下载页](https://github.com/radxa-build/radxa-cm3-io/releases/latest)<br/>[CM3核心板搭配树莓派CM4 IO板固件下载](https://github.com/radxa-build/radxa-cm3-io/releases/latest)|[点击跳转至下载页；](https://github.com/radxa-build/radxa-cm3-io/releases/latest)<br/>[CM3核心板搭配树莓派CM4 IO板固件下载](https://github.com/radxa-build/radxa-cm3-io/releases/latest)|[点击立即下载](https://dl.radxa.com/rock3/images/android/rock_cm3io-android11-20220408_1204-gpt.img.xz)|
|CM3 SODIMM|[点击立即下载](https://github.com/radxa-build/radxa-cm3-sodimm-io/releases/download/b24/radxa-cm3-sodimm-io_debian_bullseye_xfce_b24.img.xz)|[点击立即下载(Ubuntu Jammy) (用户名: radxa/radxa)](https://github.com/radxa-build/radxa-cm3-sodimm-io/releases/download/b24/radxa-cm3-sodimm-io_ubuntu_jammy_cli_b24.img.xz)|-|
|CM3 Industrial |敬请期待。|敬请期待。|敬请期待。|
|E23|[点击跳转至下载页](https://github.com/radxa-build/radxa-e23/releases/latest)|[点击跳转至下载页](https://github.com/radxa-build/radxa-e23/releases/latest)|-|
|E25|[点击立即下载](https://github.com/radxa/debos-radxa/releases/download/20221028-0344/radxa-e25-debian-bullseye-xfce4-arm64-20221028-0509-gpt.img.xz)|[点击立即下载](https://github.com/radxa/debos-radxa/releases/download/20221028-0344/radxa-e25-ubuntu-focal-server-arm64-20221028-0448-gpt.img.xz)|-|

## 第三方镜像

请查阅 [第三方镜像](./alternative-os/third-party-images)。
