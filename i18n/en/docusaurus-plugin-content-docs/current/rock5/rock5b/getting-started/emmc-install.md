---
sidebar_label: 'Install OS to an eMMC Module'
sidebar_position: 31
---

# Install OS to an eMMC Module

There are some preparations and operating notes of the installation of ROCK 5B.

## Necessary

- An eMMC Module and a [Radxa eMMC Reader](../../../accessories/emmc_reader).  
![Radxa eMMC](/img/accessories/emmc_related_01.webp)  
- The official image: you can get it on [This Page](../downloads/official-images).  
- The flash tool: Officially recommended to use [balenaEtcher](https://etcher.balena.io). Of course, other tools like rufus and more are also supported. 
The tools used in this guide is [balenaEtcher](https://etcher.balena.io).

## Installation process

At first, download the official image and flash tool to your computer, it would spend some time if with weak network.  

Second, insert the eMMC module into the eMMC USB reader, then insert the eMMC USB reader into the USB port of the computer. 
It is recommended to choose the USB 3.0 port on the rear interface of the motherboard of your personal computer.  
**Note: Please align the A1 port with the A2 port and insert the B1 port with the B2 port when inserting the eMMC module into the Radxa eMMC Reader**  
![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.webp)
![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.webp)

Then, open the etcher and prepare to flash the image to eMMC. In the etcher window, click flash from file to select the OS image you juet downloaded.  
![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.webp)  

After choosing image file, choose your eMMC as installation media through click Select Target(device).  
![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.webp)  

Next, click Flash and wait for flashing image process, the time spent is determined by eMMC performance and the image size.  
![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.webp)  

Finally, the completion page appears to indicate successful flashing.  
![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.webp)


Unplug the eMMC reader and remove the eMMC, so your boot media is ready, go to [Setup](../getting-started/setup	) and prepare to start your ROCK 5B.
