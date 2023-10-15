---
sidebar_label: "Configure the UART2_M0 interface as a normal serial port"
sidebar_position: 10
---

# Configure the UART2_M0 interface as a normal serial port

:::info
By default, the UART2_M0 interface is a FIQ debugging serial port, which can output logs of DDR Init, U-Boot, Linux Kernel and other logs for debugging. Therefore, it is not recommended to cancel this configuration as you can use other serial ports if not necessary.
:::

## Preparation

- A Radxa single board computer or computing module running an official Radxa distribution system

## Start rsetup and enter the device tree management interface

```bash
sudo rsetup
# After entering rsetup, follow these options to enter the device tree management interface
# Overlays -> Manage overlays
```

## Configure UART2_M0 as a normal serial port.

### Check `Enable UART2-M0`

![Enable UART2-M0](/img/general-tutorial/EnableUART2-M0.webp)

### Select OK, then exit rsetup.

## Modify Linux boot parameters

```bash
## The nano here can be replaced with a familiar text editor such as vim.
sudo nano /etc/kernel/cmdline && sudo u-boot-update

# Remove all parameters starting with console, like "console=ttyFIQ0,1500000n8"

```

## Reboot

```bash
sudo reboot
```
