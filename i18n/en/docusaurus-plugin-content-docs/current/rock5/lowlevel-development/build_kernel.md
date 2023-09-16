---
sidebar_label: "Build Kernel"
sidebar_position: 60
---

# Build Kernel

## Prepare

- A PC or SBC running a Linux system

## Installing Docker and Cross-Architecture Support

```bash
sudo apt update

# Podman(Recommended)
sudo apt install -y podman

# Docker
#sudo apt install docker.io

# Optional dependencies for secondary functions
sudo apt install -y systemd-container
```

## Get the source code for the Radxa bsp build framework.

```bash
git clone --recurse-submodules https://github.com/radxa-repo/bsp.git
```

## Check out Radxa bsp help

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
Following the help prompts we can choose from six Radxa bsp Linux kernel configurations: amlogic latest rk3328 rk356x rockchip stable.  
Let's take the Radxa 5B as an example and choose rockchip.  
The rockchip kernel configuration for the corresponding repository branch and board type can be found in the fork.conf file in the bsp/linux/rockchip folder.
:::

## 修改内核配置文件(可选)

```bash
vim linux/rockchip/kconfig.conf # This file is using the same format as defconfig.
```

## 构建 Kernel

```bash
cd bsp/
./bsp -b podman linux rockchip  # Enter the value of the -b option according to the container management software you have installed.
```

:::info
Radxa bsp can package kernels, device trees, modules and firmware into Debian packages.  
This makes it easier to install on SBCs, and the generated packages are located in the bsp root directory.
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

## Installing the Linux kernel and its associated packages

```bash
sudo dpkg -i --force-overwrite *rock-5b*.deb *rockchip*.deb
```

:::info
You will find some files generated in the /boot directory.  
Check ** the configuration file /boot/extlinux/extlinux.conf. **  
if there is a kernel version corresponding to the words
After rebooting the device, check the kernel version.
:::

```bash
uname -a

#Linux rock-5b 5.10.110-1-rockchip #1 SMP Fri Sep 15 16:40:30 UTC 2023 aarch64 GNU/Linux
```
