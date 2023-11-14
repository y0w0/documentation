---
sidebar_position: 1
---

# 系统烧录

## 烧录环境配置

[Linux 烧录环境配置](https://mediatek.gitlab.io/aiot/doc/aiot-dev-guide/master/sw/yocto/get-started/env-setup/flash-env-linux.html)  
[Windows 烧录环境配置](https://mediatek.gitlab.io/aiot/doc/aiot-dev-guide/master/sw/yocto/get-started/env-setup/flash-env-windows.html)

## 烧录步骤

:::tip
UFS 烧录之前需要 [格式化](https://www.ipi.wiki/pages/1200-docs?page=UfsFormat.html)。
:::

1. 下载镜像并解压,进入镜像文件夹

- 下载地址:https://github.com/radxa-build/radxa-nio-12l/releases

2. 执行 genio-flash

- 开启 overlay 可以添加 --load-dtbo 参数, 例如: genio-flash --load-dtbo palmshell-nio12-radxa-display-8hd.dtbo
  ![system-flash](/img/nio/nio_12l/system-flash1.webp)

3. 按住 download key ,使用 TYPE C 数据线连接 TYPE-C OTG 烧录口和你的 PC,开始烧录后可以松开 download key

:::tip
必须先执行步骤2,再执行步骤3
:::
