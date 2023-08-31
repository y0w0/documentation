---
sidebar_label: "RockChip Tool Usage"
sidebar_position: 10
---

# RockChip Tool Usage

ROCK 5B supports maskrom mode, which is a special operating mode in which the CPU waits for commands from the USB OTG port.

We use the tool RKDevTool, which allows the ROCK 5B in maskrom mode to communicate with a Linux/macOS PC.

# rkdeveloptool on Linux / macOS PC and RKDevTool on Windows PC

## RKDevTool on Windows

1. Install RKDevTool  
   The tool is provided as a compressed package. Please download the zip package of the tool and unzip the file.  
   [RKDevTool_v2.81](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.81.zip)
   [RKDevTool_v2.92](https://dl.radxa.com/tools/windows/windows_RKDevTool_Release_v2.92.zip)
   [RKDevTool_v2.96](https://dl.radxa.com/tools/windows/RKDevTool_Release_v2.96-20221121.rar)

RKDevTool_v2.96 contains ROCK 5B eMMC/SPI flash configuration files. Recommended Use.

Step 2: Install the driver

- Use the RK Driver Assistant tool (RK Driver Assistant) to install the driver.

- No need to connect your ROCK 5B during this process, just download and unzip [RKDriverAssistant.zip](https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip)

- Then double-click DriverInstall.exe in the RKDriverAssistant directory to start the program. If you have installed Rockchip USB drivers for any other Rockchip devices, make sure to click Uninstall Drivers first. It is recommended to uninstall Driver first, and then Install Driver.

- Then click "Install Driver" to install the driver and restart the computer.

## rkdeveloptool on Linux (X86 or ARM)

- For Linux, we build the latest rkdeveloptool (version >=1.32) from source.

- To build rkdeveloptool on Debian-based Linux distributions, follow these instructions:

1. Install Build Dependencies

```bash
  sudo apt-get install libudev-dev libusb-1.0-0-dev dh-autoreconf
```

2. Clone the source code and build

```bash
  git clone https://github.com/radxa/rkdeveloptool.git
  cd rkdeveloptool
  autoreconf -i
  ./configure
  make
```

3. If you encounter the following compilation errors

```bash
 ./configure: line 4269: syntax error near unexpected token `LIBUSB1,libusb-1.0'
 ./configure: line 4269: `PKG_CHECK_MODULES(LIBUSB1,libusb-1.0)'
```

4. You should install pkg-config libusb-1.0

```bash
  sudo apt-get install pkg-config libusb-1.0
```

5. Then re-run

```bash
  autoreconf -i
  ./configure
  make
```

6. You now have the rkdeveloptool executable in your current directory.

```bash
  sudo cp rkdeveloptool /usr/local/bin/
  sudo ldconfig
```

7. Make sure its version is 1.32. or higher

```bash
  rkdeveloptool -v
  rkdeveloptool ver 1.32
```

## rkdeveloptool on macOS(Intel & Apple Silicon)

1. To build rkdeveloptool on macOS, you need homebrew (or a similar package manager) to install the required packages.

2. Install build dependencies

```bash
  brew install automake autoconf libusb
```

3. Clone the source code and build

```bash
  git clone https://github.com/radxa/rkdeveloptool.git
  cd rkdeveloptool
  autoreconf -i
  ./configure
  make
```

4. If you encounter the following compilation errors

```bash
 ./configure: line 5384: syntax error near unexpected token `LIBUSB1,libusb-1.0'
 ./configure: line 5384: `PKG_CHECK_MODULES(LIBUSB1,libusb-1.0)'
```

5. You should install pkg-config libusb-1.0

```bash
  brew install pkg-config
```

6. Then re-run

```bash
  autoreconf -i
  ./configure
  make
```

7. You now have the rkdeveloptool executable in your current directory

```bash
  sudo cp rkdeveloptool /opt/homebrew/bin/
```

8. Make sure its version is 1.32 or higher

```bash
  rkdeveloptool -v
  rkdeveloptool ver 1.32
```
