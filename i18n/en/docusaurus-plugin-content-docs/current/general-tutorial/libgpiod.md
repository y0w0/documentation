---
sidebar_label: "Libgpiod Introduction"
sidebar_position: 10
---

# Libgpiod
Since linux 4.8, the GPIO sysfs interface has been deprecated. User space should be used for character devices instead. This library encapsulates ioctl calls and data structures behind a simple API.

# features of libgpiod

* Easy to use: libgpiod provides a simple API that makes controlling and operating GPIO devices easy to understand. Developers only need to understand basic GPIO concepts and function interfaces to use it.
* Independence: libgpiod is a standalone user-space library that does not depend on any particular hardware platform or chip. It is suitable for a variety of embedded platforms that support GPIO control, such as the Radxa ROCK series, Raspberry Pi, BeagleBone, and so on.
* Support multiple programming languages: libgpiod supports C language natively, and also provides Python bindings (python3-libgpiod) and wrappers for other languages, which makes it easy to use under different programming languages.
* Efficient Event Listening: libgpiod provides functionality for asynchronous event listening, such as waiting for GPIO state changes. This allows developers to implement efficient event-driven applications.
* GPIO specification support: libgpiod provides support for different GPIO specifications and numbering methods, including GPIO numbering and physical pin numbering.

# command line fo libgpiod

libgpiod provides the command line tool gpiod for viewing and controlling GPIO devices. gpiod provides a variety of functions.
gpiod provides a variety of functions such as viewing GPIO device information, viewing GPIO status, setting GPIO status, setting GPIO direction, setting GPIO attributes, and so on.

# Rockchip GPIO association with libgpiod

Rockchip's gpio bank is gpiochip, and the offset value of gpio bank is gpio line. take GPIO4_B6 as an example, its corresponding gpio bank is 4, i.e., gpiochip is 4, and the offset value of gpio bank is 14, i.e., gpio line is 14.

# libgpiod Programming

## C language version

* Before using the libgpiod functions, you need to install the header files:
    * Installation: sudo apt-get install libgpiod-dev -y

* Introduction to libgpiod's common APIs

```c
Commonly used structures:
struct gpiod_chip;
struct gpiod_line;

Get gpio chip:
struct gpiod_chip *gpiod_chip_open(const char *path) // Arguments are the full gpiochip path, e.g. "/dev/gpiochip1".
struct gpiod_chip *gpiod_chip_open_by_name(const char *name) // Parameters are GPIO controller names, e.g. "gpiochip1".
struct gpiod_chip *gpiod_chip_open_by_number(unsigned int num) // Parameter is GPIO controller number, e.g., 1
struct gpiod_chip *gpiod_chip_open_by_label(const char *label) // Parameters are GPIO controller names, e.g. "gpiochip1".

Close gpio chip:
void gpiod_chip_close(struct gpiod_chip *chip)

Get the GPIO line:
struct gpiod_line *gpiod_chip_get_line(struct gpiod_chip *chip, unsigned int offset) // The first parameter is the gpiochip, the second parameter is the offset (which in the Rockchip is the offset value for the gpio bank in Rockchip)

Gpio line operations:
int gpiod_line_request_output(struct gpiod_line *line, const char *consumer, int default_val) // the first parameter is the gpio line, the second parameter is the consumer name (a constant character), and the third parameter is the default level state
int gpiod_line_request_input(struct gpiod_line *line, const char *consumer) // first parameter is gpio line, second parameter is consumer name (a constant character)
int gpiod_line_set_value(struct gpiod_line *line, int value) // the first argument is the gpio line, the second is the level state
int gpiod_line_get_value(struct gpiod_line *line) // first argument is gpio line

```

* [Sample code](https://github.com/nascs/sample_code/tree/main/gpiod).
* More APIs can be found in [libgpiod full official documentation](https://github.com/brgl/libgpiod/blob/master/include/gpiod.h).

## Python version
* You need install gpiod library first
  * installation: sudo pip install gpiod

* Common APIs

```py
import gpiod # you need import gpiod first

# Get gpio chip:
gpiod.chip(device: int | str | None = None
          how: int = __CHIP_OPEN_LOOKUP
          chip_shared: shared_chip | None = None)
          # No parameter means open an empty gpiochip object
          # The parameter can be used to try the path or name of a gpiochip, or a label.
          # Example: 1. "/dev/gpiochip0" 2. "gpiochip0" 3. "gpio3" 4, number 3
          # chip = gpiod.chip("/dev/gpiochip3", gpiod.chip.OPEN_BY_PATH)
          # gpiod.chip.OPEN_BY_NUMBER gpiod.chip.OPEN_BY_PATH gpiod.chip.OPEN_BY_NAME  gpiod.chip.OPEN_BY_LABEL gpiod.chip.OPEN_BY_NUMBER

# Close gpio chip:
gpiod.chip.reset(self: chip)

# Get gpio line:
gpiod.chip.get_line(self: chip, offset: int)

# Release gpio line:
gpiod.line.release(self: line)

# find gpio line:
gpiod.chip.find_line(self: chip, name: str)

```
* More available
  * python3.9/site-packages/gpiod/__init__.py
  * [python-gpiod](https://wiki.loliot.net/docs/lang/python/libraries/gpiod/python-gpiod-about/)
  * [pypi](https://pypi.org/project/gpiod/)
  * [github](https://github.com/hhk7734/python3-gpiod.git)
