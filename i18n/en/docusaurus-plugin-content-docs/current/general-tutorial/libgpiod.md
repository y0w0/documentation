---
sidebar_label: "libgpiod"
sidebar_position: 10
---

# libgpiod

The GPIO sysfs interface has been deprecated since Linux 4.8. Userspace should instead use libgpiod to interact with GPIO character devices.

## Key features

- Easy to use: libgpiod provides a simple API that makes controlling and operating GPIO devices easy to understand. Developers only need to understand basic GPIO concepts and function interfaces to use it.
- Independence: libgpiod is a standalone user-space library that does not depend on any particular hardware platform or chip. It is suitable for a wide range of embedded platforms that support GPIO control, such as the Radxa ROCK series, Raspberry Pi, BeagleBone, and so on.
- Multiple Programming Languages Support: libgpiod supports C language natively, and also provides Python bindings (python3-libgpiod) and wrappers for other languages, which makes it easy to use in different programming languages.
- Efficient Event Listening: libgpiod provides functionality for asynchronous event listening, such as waiting for GPIO state changes. This allows developers to implement efficient event-driven applications.
- GPIO specification support: libgpiod provides support for different GPIO specifications and numbering methods, including GPIO numbering and physical pin numbering.

## Command Line Tools

libgpiod provides a command line tool, gpiod, for viewing and controlling GPIO devices. gpiod provides a variety of functions.
gpiod provides a variety of functions, such as viewing GPIO device information, viewing GPIO status, setting GPIO status, setting GPIO direction, setting GPIO properties, and so on.

- gpioinfo: Display GPIO device information
- gpiodetect: List all GPIO controllers in the system
- gpioset: Set GPIO output
- gpioget: Read GPIO inputs
- gpiofind: Find GPIO number
- gpiomon: Monitor GPIO status

GPIO tags are added to Radxa devices. You can simply use a command like `gpiofind PIN_8` to get the physical GPIO number of the current device pin 8 without having to look it up manually.

## Programming Reference

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="C">

The relevant header files need to be installed before use:

```bash
sudo apt-get update
sudo apt-get install libgpiod-dev
```

- [Sample code](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/tree/examples)
- [Official documentation](https://libgpiod.readthedocs.io/en/latest/index.html)

</TabItem>
<TabItem value="Python">

You need to install the relevant Python libraries before you can use it:

```bash
sudo apt-get update
sudo apt-get install python3-libgpiod
```

- [Sample code](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/tree/bindings/python/examples)
- [Official document](https://libgpiod.readthedocs.io/en/latest/index.html)
- [Official implementation](https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/tree/bindings/python/gpiod)

</TabItem>
</Tabs>
