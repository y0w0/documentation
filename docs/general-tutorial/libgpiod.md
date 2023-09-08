---
sidebar_label: "libgpiod 介绍"
sidebar_position: 10
---

# Libgpiod

自 linux 4.8 起，GPIO sysfs 接口已被弃用。用户空间应改用字符设备。该库将 ioctl 调用和数据结构封装在一个简单的应用程序接口后面。

# libgpiod 的主要特点：

- 简单易用：libgpiod 提供了简洁的 API，使得控制和操作 GPIO 设备变得简单易懂。开发者只需了解基本的 GPIO 概念和函数接口即可使用。
- 独立性：libgpiod 是一个独立的用户空间库，不依赖于任何特定的硬件平台或芯片。它适用于多种支持 GPIO 控制的嵌入式平台，如 Radxa ROCK 系列、树莓派、BeagleBone 等。
- 支持多种编程语言：libgpiod 原生支持 C 语言，同时也提供了 Python 绑定（python3-libgpiod）和其他语言的封装，使得在不同的编程语言下都可以方便地使用。
- 高效的事件监听：libgpiod 提供了用于异步事件监听的功能，例如等待 GPIO 状态变化等。这使得开发者可以实现高效的事件驱动应用程序。
- GPIO 规格支持：libgpiod 提供了对不同 GPIO 规格和编号方式的支持，包括基于 GPIO 编号和基于物理引脚编号两种方式。

# libgpiod 命令行工具

libgpiod 提供了命令行工具 gpiod，用于查看和控制 GPIO 设备。gpiod 提供了多种功能，
例如查看 GPIO 设备信息、查看 GPIO 状态、设置 GPIO 状态、设置 GPIO 方向、设置 GPIO 属性等。

- gpioinfo： 显示 GPIO 设备信息
  - 不加任何参数，显示所有 GPIO 设备信息
  - 加参数： gpioinfo gpio控制器，显示该控制器下的所有 GPIO 信息，例如 gpioinfo 1，表示列出 GPIO 控制器 1 下的所有 GPIO 信息
- gpiodetect： 列出系统中所有 GPIO 控制器
- gpioset： 设置 gpio, 例如， gpioset gpiochip1 4=1, 设置 GPIO1_A4 输出高电平
- gpioget： 获取 gpio 状态，例如， gpioget gpiochip1 4，获取 GPIO1_A4 状态
- gpiofind： 查找 GPIO 编号，例如， gpiofind PIN_8，查找 名为 PIN_8 的 gpio line
- gpiomon： 监控 gpio 状态， 例如，gpiomon gpiochip1 4, 监控 GPIO1_A4 事件状态

# Rockchip GPIO 与 libgpiod 的关联

Rockchip 的 gpio bank 即为 gpiochip, gpio bank 的偏移值即为 gpio line。以 GPIO4_B6 为例，其对应的 gpio bank 为 4，即 gpiochip 为 4，gpio bank 的偏移值为 14，即 gpio line 为 14

# libgpiod 编程

## C 语言版本：

- 在使用libgpiod 相关函数之前需要安装一下相关头文件：

  - 安装方法： sudo apt-get install libgpiod-dev -y

- libgpiod 常用 API 接绍

```c
常用的结构体：
struct gpiod_chip;
struct gpiod_line;

获取 GPIO 控制器：
struct gpiod_chip *gpiod_chip_open(const char *path) // 参数为完整的 gpiochip 路径， 例如 "/dev/gpiochip1"
struct gpiod_chip *gpiod_chip_open_by_name(const char *name) // 参数为 GPIO 控制器名称， 例如 "gpiochip1"
struct gpiod_chip *gpiod_chip_open_by_number(unsigned int num) // 参数为 GPIO 控制器编号， 例如 1
struct gpiod_chip *gpiod_chip_open_by_label(const char *label) // 参数为 GPIO 控制器名称， 例如 "gpiochip1"

关闭 GPIO 控制器：
void gpiod_chip_close(struct gpiod_chip *chip)

获取 GPIO 线：
struct gpiod_line *gpiod_chip_get_line(struct gpiod_chip *chip, unsigned int offset) // 第一个参数为 gpiochip，第二个参数为偏移值（在 Rockchip RK3588 中，该参数即为 gpio bank 的偏移值）

关闭 GPIO 线：
void gpiod_line_release(struct gpiod_line *line)

GPIO 线操作：
int gpiod_line_request_output(struct gpiod_line *line, const char *consumer, int default_val) // 第一个参数为 gpio line，第二个参数为消费者名称（一个常量字符），第三个参数为默认电平状态
int gpiod_line_request_input(struct gpiod_line *line, const char *consumer) // 第一个参数为 gpio line，第二个参数为消费者名称（一个常量字符）
int gpiod_line_set_value(struct gpiod_line *line, int value) // 第一个参数为 gpio line，第二个参数为电平状态
int gpiod_line_get_value(struct gpiod_line *line) // 第一个参数为 gpio line

```

- [示例代码](https://github.com/nascs/sample_code/tree/main/gpiod)
- 更多 API 可参考 [libgpiod 完整的官方文档](https://github.com/brgl/libgpiod/blob/master/include/gpiod.h)。

## Python 版本

- 在使用 python 版的 gpiod 前需要安装该库

  - 安装方法： sudo pip install gpiod

- 常用 API 介绍

```py
import gpiod # 需要先导入 gpiod

# 获取 gpio 控制器：
gpiod.chip(device: int | str | None = None
          how: int = __CHIP_OPEN_LOOKUP
          chip_shared: shared_chip | None = None)
          # 无参数表示打开一个空的 gpiochip 对象
          # 参数可以试试某个 gpiochip 的路径或者名字或者标签,
          # 例如： 1. "/dev/gpiochip0" 2. "gpiochip0" 3. "gpio3" 4, 数字 3
          # chip = gpiod.chip("/dev/gpiochip3", gpiod.chip.OPEN_BY_PATH)
          # gpiod.chip.OPEN_BY_NUMBER gpiod.chip.OPEN_BY_PATH gpiod.chip.OPEN_BY_NAME  gpiod.chip.OPEN_BY_LABEL gpiod.chip.OPEN_BY_NUMBER

# 关闭 gpio 控制器：
gpiod.chip.reset(self: chip)

# 获取 gpio 线：
gpiod.chip.get_line(self: chip, offset: int)

# 释放 gpio 线：
gpiod.line.release(self: line)

# 查询 gpio 线：
gpiod.chip.find_line(self: chip, name: str)

```

- 更多可参考
  - python3.9/site-packages/gpiod/**init**.py
  - [python-gpiod](https://wiki.loliot.net/docs/lang/python/libraries/gpiod/python-gpiod-about/)
  - [pypi](https://pypi.org/project/gpiod/)
  - [github](https://github.com/hhk7734/python3-gpiod.git)
