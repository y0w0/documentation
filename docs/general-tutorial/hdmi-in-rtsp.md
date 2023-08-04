---
sidebar_label: 'RTSP远程推流'
sidebar_position: 20
---

# RTSP远程推流

## 准备
### 安装好官方 Debian 系统的 ROCK 5B
### Micro HDMI 线缆或普通 HDMI 线缆+Micro HDMI to HDMI 转换器
### HDMI 输入设备

## 使用 HDMI 线缆连接 HDMI 输入设备与 ROCK 5B 的 HDMI-IN接口(位于电源灯与 GPIO 之间)

## 安装依赖
```shell
sudo apt-get install libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev build-essential meson libcgroup-dev gobject-introspection libgirepository1.0-dev
```

## 下载并解压 gst-rtsp-server 源码
```shell
wget https://gstreamer.freedesktop.org/src/gst-rtsp-server/gst-rtsp-server-1.18.6.tar.xz
tar -xvf gst-rtsp-server-1.18.6.tar.xz
```
## 编译 gst-rtsp-server
```shell
cd gst-rtsp-server-1.18.6/
meson build
cd build
ninja
```

## 运行 gst-rtsp-server
```shell
cd examples/
./test-launch --gst-debug-level=3 "( v4l2src device=/dev/video0 ! queue ! mpph265enc bps=51200000 rc-mode=vbr !  rtph265pay name=pay0 pt=97 )"
```

## 运行 RTSP 客户端，查看画面
### 1. 前往 [VLC 官网下载 VLC](https://www.videolan.org/vlc/)
### 2. 安装并打开 VLC
![VLC-Main](/img/general-tutorial/VLC-Main.png)
### 3. 按下快捷键 Ctrl+N 打开网络串流界面，然后输入 Rock 5B 的 IP 地址与 RTSP 端口号与子地址(在运行推流命令后会显示,注意把 127.0.0.1 替换为能与 RTSP 客户端通讯的局域网 IP)
![VLC-Open-RTSP](/img/general-tutorial/VLC-Open-RTSP.png)
### 4. 点击播放后即可查看 RTSP 远程推流内容
![VLC-View-RTSP](/img/general-tutorial/VLC-View-RTSP.png)

# 注意事项
### 因目前 gst-mppenc 暂不支持 NV24(YCbCr444) 与 RBG 输入(好消息是已经看到更新 NV24 的支持了)，所以需要 HDMI 输入端切换颜色格式为 NV12(YCbCr420) 或 NV16(YCbCr422)