---
sidebar_label: 'Install OS to an eMMC Module'
sidebar_position: 33
---

# Install OS to an eMMC Module

## Prepare 

- Prepare an eMMC module and a [Radxa eMMC Reader](../../../accessories/emmc_reader).  
![Radxa eMMC](/img/accessories/emmc_related_01.webp)
- Download the official Ubuntu/Debian system image from [Downloads](../downloads/official-images.md).
- Download the flash tool Etcher from [Downloads](https://www.balena.io/etcher#download-etcher).  
![ROCK5A via Etcher](/img/rock5a/rock5a-etcher.webp)

## Installation

1. Insert the eMMC module into the Radxa eMMC USB reader, then insert the Radxa eMMC USB reader into the USB port of the computer. 
    **Note: Please align the A1 port with the A2 port and insert the B1 port with the B2 port when inserting the eMMC module into the Radxa eMMC Reader**
    
    ![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.webp)
    ![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.webp)

- Open Etcher and prepare to flash OS image to eMMC module. In the etcher window, click `Flash from file` to select the OS image you juet downloaded.
    
    ![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.webp)

- In the Etcher window, click `Select target`.

    ![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.webp)

- In the Etcher window, click `Flash!` and wait for flashing image process.

    ![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.webp)

- In the Etcher window, it means success when it shows `Flash Complete!`
    
    ![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.webp)

## Using on ROCK 5A

When you receive ROCK 5A, ROCK 5A is installed with SPI Flash, you need to remove the SPI Flash before you install eMMC. The eMMC uses a B2B connector, and it can be installed by aligning with the B2B connection interface of ROCK 5A. As the picture show:

![ROCK5A Micro SD Card](/img/rock5a/rock5a-use-emmc.webp)  