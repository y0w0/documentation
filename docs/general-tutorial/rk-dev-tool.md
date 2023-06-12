---
sidebar_label: 'RK开发工具安装'
sidebar_position: 1
---

# 简介

瑞莎 ROCK 系列单板机支持 Maskrom 模式，这是一种 CPU 等待 USB OTG 端口命令的特殊操作模式。
rkdeveloptool 和 RKDevTool 是我们在 Maskrom 模式下用来与 ROCK 主板通信的 PC 端烧录工具。在 Linux/MacOS 下使用的是 rkdeveloptool 工具，
而在 Windows 下使用的是 RKDevTool 工具。

## Windows

只需在 Windows 下安装开发工具以及 RK 驱动： 

RK 开发工具： [RKDevTool V2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96-20221121.rar)  
RK 官方驱动程序： [DriverAssitant V5.0](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)  

使用 RK 驱动助手工具来安装驱动。 
在此过程中，不需要连接您的 Rockchip 设备，只需下载压缩包并解压 DriverAssitant V5.0.zip。 
然后双击 DriverInstall.exe，启动工具并点击 Install Driver 安装驱动。 
如果你已经为其他 Rockchip 设备安装过 Rockchip USB 驱动，请先点击 "卸载驱动"。

![RK Driver](/img/configuration/RK-Driver-Assistant-Install-Uninstall.webp)

以下是安装完成后打开 RKDevTool 并连接进入 Maskrom 设备的示例：  

![RK Dev interface](/img/rock5a/on-maskrom.webp)

## Linux/MacOS

在 Linux/MacOS 上，我们从源代码来编译构建 rkdeveloptool 工具。 要在 Debian 的 Linux 发行版上编译 rkdeveloptool 工具，请按照以下说明操作。  

安装编译依赖:  

```bash
sudo apt-get install libudev-dev libusb-1.0-0-dev dh-autoreconf
```

克隆源码并编译:  

```bash
 git clone https://github.com/rockchip-linux/rkdeveloptool
 cd rkdeveloptool
 autoreconf -i
 ./configure
 make
```

现在你在当前目录下会有rkdeveloptool的可执行文件，并添加到系统工具中。

```bash
 sudo cp rkdeveloptool /usr/local/bin/
```

rkdeveloptool 提供了一系列命令来操作主板，选择合适的命令来完成你的需求:  

```bash
---------------------Tool Usage ---------------------
Help:                   -h or --help
Version:                -v or --version
ListDevice:             ld
DownloadBoot:           db <Loader>
UpgradeLoader:          ul <Loader>
ReadLBA:                rl  <BeginSec> <SectorLen> <File>
WriteLBA:               wl  <BeginSec> <File>
WriteLBA:               wlx  <PartitionName> <File>
WriteGPT:               gpt <gpt partition table>
WriteParameter:         prm <parameter>
PrintPartition:         ppt
EraseFlash:             ef
TestDevice:             td
ResetDevice:            rd [subcode]
ReadFlashID:            rid
ReadFlashInfo:          rfi
ReadChipInfo:           rci
ReadCapability:         rcb
PackBootLoader:         pack
UnpackBootLoader:       unpack <boot loader>
TagSPL:                 tagspl <tag> <U-Boot SPL>
-------------------------------------------------------
```

在连接 Maskrom 模式的主板后，通过`ld`命令可查询到像以下信息：  

```bash
radxa@rock-5a:~/rkdeveloptool$ ./rkdeveloptool ld
DevNo=1 Vid=0x2207,Pid=0x350b,LocationID=201    Maskrom
```


### 常见问题

编译错误 1：

```bash
    configure: error: in `/home/radxa/rkdeveloptool':
    configure: error: C++ preprocessor "/lib/cpp" fails sanity check

```

该报错为缺少必要的 C++ 库，可通过以下命令安装：  

```bash
    sudo apt-get install build-essential
    sudo apt-get install g++
```

编译错误 2：

```bash
   ./configure: line 4269: syntax error near unexpected token `LIBUSB1,libusb-1.0'
   ./configure: line 4269: `PKG_CHECK_MODULES(LIBUSB1,libusb-1.0)'
```

你可以安装 pkg-config libusb-1.0:  

```bash
   sudo apt-get install pkg-config libusb-1.0
```

然后重新执行以下操作：  

```bash
   autoreconf -i
   ./configure
   make
```

编译错误 3：  

```bash
make[1]: Entrando no diretório '/home/radxa/rkdeveloptool'
g++ -DHAVE_CONFIG_H -I. -I./cfg  -Wall -Werror -Wextra -Wreturn-type -fno-strict-aliasing -D_FILE_OFFSET_BITS=64 -D_LARGE_FILE -I/usr/include/libusb-1.0   -g -O2 -MT main.o -MD -MP -MF .deps/main.Tpo -c -o main.o main.cpp
main.cpp: In function ‘bool _Z9mergeBootv.part.0()’:
main.cpp:1493:43: error: ‘%s’ directive output may be truncated writing up to 557 bytes into a region of size 5 [-Werror=format-truncation=]
 1493 |         snprintf(buffer, sizeof(buffer), "%s", chip);
      |                                           ^~
......
 1534 |                 chipType = convertChipType(chip + 2);
      |                            ~~~~~~~~~~~~~~~~~~~~~~~~~
In file included from /usr/include/stdio.h:894,
                 from DefineHeader.h:3,
                 from main.cpp:11:
/usr/include/x86_64-linux-gnu/bits/stdio2.h:71:35: note: ‘__builtin_snprintf’ output between 1 and 558 bytes into a destination of size 5
   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,
      |          ~~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   72 |                                    __glibc_objsize (__s), __fmt,
      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   73 |                                    __va_arg_pack ());
      |                                    ~~~~~~~~~~~~~~~~~
cc1plus: all warnings being treated as errors
make[1]: *** [Makefile:491: main.o] Erro 1
make[1]: Saindo do diretório '/home/radxa/rkdeveloptool'
make: *** [Makefile:511: all-recursive] Erro 1
```

则需要将 main.cpp 中的代码做一些修改：  

```bash
1490    static inline uint32_t convertChipType(const char* chip) {
1491	    char buffer[5];
1492	    memset(buffer, 0, sizeof(buffer));
1493	    snprintf(buffer, sizeof(buffer), "%s", chip);
1494	    return buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];
1495    }
```

其中的 1493 行修改为： 

```bash
1493        snprintf(buffer, sizeof(buffer), "%.*s", static_cast<int>(sizeof(buffer) - 1), chip);
```

再重新执行 make 命令：  

```bash
    make
```




