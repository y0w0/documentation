---
sidebar_label: "将 UART2_M0 接口配置为普通串口"
sidebar_position: 10
---

# 将 UART2_M0 接口配置为普通串口

:::info
默认情况下 UART2_M0 接口为 FIQ 调试串口，可输出 DDR Init、U-Boot、Linux Kernel 等日志用于调试。所以如非必要可以使用其他串口，不建议取消此配置。
:::

## 准备

- 一个可运行 Radxa 官方发行系统的 Radxa 单板计算机或者计算模块

## 启动 rsetup，并进入设备树管理界面

```bash
sudo rsetup
# 进入 rsetup 后，跟随以下选项进入设备树管理界面
# Overlays -> Manage overlays
```

## 配置 UART2_M0 为普通串口

### 勾选 `Enable UART2-M0`

![Enable UART2-M0](/img/general-tutorial/EnableUART2-M0.webp)

### 勾选后选择 OK ，然后退出 rsetup

## 修改 Linux 启动参数

```bash
# 此处的 nano 可以替换为你熟悉的文本编辑器，如：vim。
sudo nano /etc/kernel/cmdline && sudo u-boot-update

# 删除所有以 console 开头的参数，如 "console=ttyFIQ0,1500000n8"

```

## 重启

```bash
sudo reboot
```
