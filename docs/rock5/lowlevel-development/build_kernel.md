---
sidebar_label: "构建 Kernel"
sidebar_position: 60
---

# 构建 Kernel

## 准备

- 一台可运行 Linux 系统的 PC 或 SBC

## 安装 Docker 与跨架构支持

```bash
sudo apt update

# Podman (推荐)
sudo apt install -y podman

# Docker
#sudo apt install docker.io

# 次要功能的可选依赖项
sudo apt install -y systemd-container
```

## 获取 Radxa bsp 构建框架源代码

```bash
git clone --recurse-submodules https://github.com/radxa-repo/bsp.git
```

## 查看 Radxa bsp 帮助

```bash
rock@rock-5b:~/bsp$ ./bsp -h
Radxa BSP Build Tool
usage: bsp [options] <linux|u-boot> <profile> [product]

When building u-boot, you can also provide 'product' argument,
which will only build for that specific image.

Supported package generation options:
    -r, --revision [num]    Specify custom revision number, default=1
    -c, --clean             Run 'make clean' before building
    -C, --distclean         Run 'make distclean' before building
    --no-prepare-source     Allow building against locally modified repos
    --no-config             Do not load defconfig or apply kconfig
    --no-container-update   Do not update the container image
                            Suppress --local-container
    --dirty                 Build without modifying the source tree.
                            Equals --no-prepare-source --no-config --no-container-update
    --no-build              Prepare the source tree but do not build.
                            Inverse of --dirty
    -p                      Pause after applying patches from each folder
    -n, --native-build      Build without using container
    -l, --local-container   Using locally built container image
    -s, --container-shell   Start a shell inside the container instead of the build
    -d, --debug             Build debug package as well
    --long-version          Add Git commit hash to the end of the version number
    --dtb                   Build dtb only <only valid for linux build>
    -b, --backend [backend] Manually specify container backend. supported values are:
                            docker, podman
    --no-submodule-check    Do not check for submodules
    -h, --help              Show this help message

Alternative commands
    json <catagory>         Print supported options in json format
                            Available catagories: edition linux edition u-boot
    export <profile>        Export profile
    import <profile>        Import profile
    install <disk> [file]   Install built artifact to specified disk
                            Root partition will be determined based on the layout
                            When file is
                            Supported file types: deb, dtb, dtbo

Supported Linux profile:
    amlogic
    latest
    rk3328
    rk356x
    rockchip
    stable

Supported U-Boot profile:
    latest
    rk3588
    rknext
```

:::info
根据帮助提示我们可以选择 amlogic latest rk3328 rk356x rockchip stable 这六种 Radxa bsp Linux 内核配置。  
Radxa bsp Linux 内核配置对应的仓库分支与板型可查看 bsp/linux 文件夹下 Radxa bsp Linux 内核配置同名文件夹下的fork.conf文件内容，我们以 Radxa 5B 为例选择 rockchip 。
:::

## 修改内核配置文件(可选)

```bash
vim linux/Radxa bsp Linux 内核配置/kconfig.conf  #该文件采用与 defconfig 相同格式。
```

## 构建 Kernel

```bash
cd bsp/
./bsp -b podman linux rockchip  #根据安装的容器管理软件输入对应的 -b 选项
```

:::info
Radxa bsp 可以将内核、设备树、模块和固件打包成 Debian 包。  
这使得在 SBC 上安装更容易，生成的包位于 bsp 根目录。
:::

```bash
ls *rock-5b*.deb *rockchip*.deb

#linux-headers-5.10.110-1-rockchip_5.10.110-1_arm64.deb
#linux-headers-rockchip_5.10.110-1_all.deb
#linux-image-5.10.110-1-rockchip_5.10.110-1_arm64.deb
#linux-image-rock-5b_5.10.110-1_all.deb
#linux-image-rockchip_5.10.110-1_all.deb
#linux-libc-dev-5.10.110-1-rockchip_5.10.110-1_arm64.deb
#linux-libc-dev-rock-5b_5.10.110-1_all.deb
#linux-libc-dev-rockchip_5.10.110-1_all.deb
```

## 安装Linux内核及其相关包

```bash
sudo dpkg -i --force-overwrite *rock-5b*.deb *rockchip*.deb
```

:::info
你会发现在 /boot 目录下生成了一些文件。  
检查**配置文件 /boot/extlinux/extlinux.conf。**是否有对应内核版本字样
重启设备之后，检查内核版本
:::

```bash
uname -a

#Linux rock-5b 5.10.110-1-rockchip #1 SMP Fri Sep 15 16:40:30 UTC 2023 aarch64 GNU/Linux
```
