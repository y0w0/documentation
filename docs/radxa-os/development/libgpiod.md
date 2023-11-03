---
sidebar_label: "libgpiod"
sidebar_position: 10
---

# libgpiod

自 Linux 4.8 起，GPIO sysfs 接口已被弃用。用户空间应改用 libgpiod 来于 GPIO 字符设备进行交互。

## 主要特点

- 简单易用：libgpiod 提供了简洁的 API，使得控制和操作 GPIO 设备变得简单易懂。开发者只需了解基本的 GPIO 概念和函数接口即可使用。
- 独立性：libgpiod 是一个独立的用户空间库，不依赖于任何特定的硬件平台或芯片。它适用于多种支持 GPIO 控制的嵌入式平台，如 Radxa ROCK 系列、树莓派、BeagleBone 等。
- 支持多种编程语言：libgpiod 原生支持 C 语言，同时也提供了 Python 绑定（python3-libgpiod）和其他语言的封装，使得在不同的编程语言下都可以方便地使用。
- 高效的事件监听：libgpiod 提供了用于异步事件监听的功能，例如等待 GPIO 状态变化等。这使得开发者可以实现高效的事件驱动应用程序。
- GPIO 规格支持：libgpiod 提供了对不同 GPIO 规格和编号方式的支持，包括基于 GPIO 编号和基于物理引脚编号两种方式。

## 命令行工具

libgpiod 提供了命令行工具 gpiod，用于查看和控制 GPIO 设备。gpiod 提供了多种功能，
例如查看 GPIO 设备信息、查看 GPIO 状态、设置 GPIO 状态、设置 GPIO 方向、设置 GPIO 属性等。

- gpioinfo： 显示 GPIO 设备信息
- gpiodetect： 列出系统中所有 GPIO 控制器
- gpioset： 设置 GPIO 输出
- gpioget： 读取 GPIO 输入
- gpiofind： 查找 GPIO 编号
- gpiomon： 监控 GPIO 状态

瑞莎设备上均添加了 GPIO 标签。您可以简单的通过例如 `gpiofind PIN_8` 这样的命令获得当前设备第八引脚所对应的物理 GPIO 编号，而无需手动查询。

## 编程参考

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="lang">
<TabItem value="C">

使用前需要先安装相关头文件：

```bash
sudo apt-get update
sudo apt-get install libgpiod-dev
```

- [示例代码](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/tree/examples)
- [官方文档](https://libgpiod.readthedocs.io/en/latest/index.html)

</TabItem>
<TabItem value="Python">

使用前需要先安装相关 Python 库：

```bash
sudo apt-get update
sudo apt-get install python3-libgpiod
```

- [示例代码](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/tree/bindings/python/examples)
- [官方文档](https://libgpiod.readthedocs.io/en/latest/index.html)
- [官方代码实现](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/tree/bindings/python/gpiod)

</TabItem>
</Tabs>
