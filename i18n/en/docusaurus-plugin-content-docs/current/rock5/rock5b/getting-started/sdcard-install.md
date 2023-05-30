---
sidebar_label: 'Install OS to an Micro SD Card'
sidebar_position: 32
---

# Install OS to an SDCard

The OS installation with a micro SD card is essentially the same as with the eMMC module, 
think of a micro sd card with a card reader as an eMMC module with an eMMC reader.

## Preparation 

1. A micro SD card:  
Preferably at least 16 GB, C10/A1 specification and above.

2. An SD card reader:  
Preferably support USB 3.0.

3. OS image:  
[Official images](../downloads/official-images) and some [third party images](../downloads/3rd-images) are supported.  
**Note: Some third party images may use special installation, take note to consult the corresponding guidance.**

4. Flash tools:  
Most of the flash tools can be used, here is the examples using [balenaEtcher](https://www.balena.io/etcher-marketing) and [Win32DiskImager](https://win32diskimager.org/).

5. Insert device:  
Insert the SD card into the card reader, then insert the card reader into the USB port of the computer.  
![ROCK5B Install](/img/accessories/sd_install_1.webp)

### Flash OS image to micro SD card via etcher

1. Open etcher and prepare to flash OS image to Micro SD card. In the etcher window, click flash from file to select the OS image you just downloaded.  
![ROCK5B via Ethcher](/img/rock5a/rock5a-etcher-1.webp)

2.In the etcher window, click Select targe to select drive.  
![ROCK5B via Ethcher 03](/img/rock5a/rock5a-etcher-2.webp)

3. In the etcher window, click Flash and wait for flashing image process.  
![ROCK5A via Ethcher 04](/img/rock5a/rock5a-etcher-3.webp)

4. In the etcher window, it means success when it shows flash compete.  
![ROCK5A via Ethcher 05](/img/rock5a/rock5a-etcher-4.webp)

### Flash OS image to micro SD card via Win32DiskImager

 1. Download the flash tool Win32DiskImager from [downloads](https://win32diskimager.org/) if you didn't install.  
![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.png)

2. Open Win32DiskImager  
![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.png)  

3. Click the folder icon button and select the .img file to write image.  
![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.png)   

4. After the above configuration is completed, click the Write button to start writing image. Next, wait for the write image to compete.  
![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.png) 




