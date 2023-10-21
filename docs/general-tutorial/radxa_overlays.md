---
sidebar_label: "使用 radxa/overlays 官方设备树插件教程"
sidebar_position: 10
---

# 使用 radxa/overlays 官方设备树插件教程

:::info
radxa/overlays 的预编译文件可以[从此下载](https://github.com/radxa/overlays/actions)，然后跳转到[将 dtbo 文件复制到系统默认文件夹](/general-tutorial/radxa_overlays#将-dtbo-文件复制到系统默认文件夹)继续操作
:::

## 下载编译依赖

```bash
#linux-headers-* 需要根据目标设备不同更换包名
sudo apt install linux-headers-rock-5b build-essential device-tree-compiler
```

## 获取 radxa/overlays 源码并编译

```bash
git clone https://github.com/radxa/overlays.git
cd overlays
make -j$(nproc)
```

## 将 DTBO 文件复制到系统默认文件夹

```bash
#需要根据目标设备的 SOC 厂商替换 cp 命令源路径中的 rockchip 为对应厂商
sudo cp -a arch/arm64/boot/dts/rockchip/overlays/*.dtbo /boot/dtbo/
```

## 修改 u-boot-update 配置文件

```bash
sudo nano /etc/default/u-boot
```

### 根据下图取消 `U_BOOT_FDT_OVERLAYS` 注释，并在引号内添加你需要添加的 DTBO 文件名，如有多个 DTBO 文件以空格相互间隔

![radxa_overlays](/img/general-tutorial/radxa_overlays.webp)

## 运行 u-boot-update 更新 Linux 内核启动参数，并重启

```bash
sudo u-boot-update
#可以使用 cat /boot/extlinux/extlinux.conf 检查参数
sudo reboot
```
