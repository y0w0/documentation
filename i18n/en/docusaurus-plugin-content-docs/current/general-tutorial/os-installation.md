---
sidebar_label: 'OS Installation Guides'
sidebar_position: 17
---

# Operating System Installation Tutorial

This tutorial applies to the official images of all Radxa products as well as some third party images. There are currently three available system installation options: Micro SD card, eMMC and SSD.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="micro-SD" label="micro SD" default>

## Install image to Micro SD Card

### Preparations

1. Prepare a Micro SD card
2. Prepare an SD card reader
3. Download [corresponding product](productlist) of the official Ubuntu / Debian system image
4. Insert the SD card into the SD card reader, then insert the SD card reader into the USB port of the computer  

### Flash OS image to Micro SD card

#### Flash OS image to Micro SD card via Etcher

1. [Download](https://www.balena.io/etcher#download-etcher) flash tool `Etcher`.  
   ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. Open the Etcher and flash the prepared OS image to the Micro SD card. In the Etcher window, 
1. click `Flash from file` to select the OS image you have just downloaded.  
   ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. In the Etcher window, click on `Select target`.  
   ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. In the Etcher window, click on `Flash!` and wait for the progress bar to be painted.  
   ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. In the Etcher window, `Flash Complete!` will be displayed when the swipe is successful.  
   ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)
  
**If the OS image is flashed incorrectly, please try again manually.**

#### Swipe OS image to Micro SD card via Win32DiskImager

<!--此处缺少 Win32DiskImager 英文界面的图-->

1. [Download](https://win32diskimager.org/) flash tool `Win32DiskImager`  

2. Open Win32DiskImager  

3. Click on the folder icon button and select the image to be flashed  

4. Once you have done so, click the `Write` button to start writing the image and wait for the write to complete.  


  </TabItem>
  <TabItem value="eMMC" label="eMMC">

## Install the image to the eMMC module

### Preparations

- Prepare an eMMC module and a [Radxa eMMC reader](../accessories/emmc_reader).  
***Note: This tutorial is only applicable to write removable eMMC modules, onboard eMMCs need to be flashed using [rkdevtool](rkdevtool).***
![Radxa eMMC](/img/accessories/emmc_related_01.webp)
- Download the [corresponding product](../productlist) for the official Ubuntu / Debian system image.
- [Download](https://www.balena.io/etcher#download-etcher) flash tool `Etcher`.  
![ROCK5A via Etcher](/img/rock5a/rock5a-etcher.webp)

### Flash image

1. Insert the eMMC module into the Radxa eMMC USB card reader and then plug the Radxa eMMC USB card reader into the USB port of your computer.  
    **Note: When inserting the eMMC module into the Radxa eMMC reader, align port A1 with port A2, then insert port B1 into port B2**
    
    ![ROCK5A eMMC Install 01](/img/accessories/emmc-install1.webp)
    ![ROCK5A eMMC Install 02](/img/accessories/emmc-install2.webp)

- Open the Etcher and flash the prepared OS image to the eMMC module. In the Etcher window, click `Flash from file` to select the OS image you have just downloaded.
    
    ![ROCK5A eMMC via Etcher 01](/img/rock5a/rock5a-etcher-1.webp)

- In the Etcher window, click on `Select target`.

    ![ROCK5A eMMC via Etcher 02](/img/rock5a/rock5a-etcher-2.webp)

- In the Etcher window, click on `Flash!` and wait for the progress bar to be refreshed.

    ![ROCK5A eMMC via Etcher 03](/img/rock5a/rock5a-etcher-3.webp)

- In the Etcher window, `Flash Complete!` will be displayed when the swipe is successful.
    
    ![ROCK5A eMMC via Etcher 04](/img/rock5a/rock5a-etcher-4.webp)


 </TabItem>

 <TabItem value="NVME-SSD" label="NVME SSD">

## Flash image using an NVME to USB 3.0 reader or a PC host with an NVME slot

###  Preparation

- Suitable  power adapter
- M.2 NVME SSD
- **NVME to USB 3.0 card reader or PC host with NVME slot**

### Download the necessary tools and images

Etcher is the tool we use to write images. Download the appropriate Etcher for your PC from the [Downloads](https://www.balena.io/etcher#download-etcher) page and install it.

Check out the [Etcher website](https://www.balena.io/etcher) for more information about Etcher.

Download the image of your corresponding product.

###  Writing images to M.2 NVME SSDs

Insert the M.2 NVME SSD into the M.2 NVME SSD to USB 3.0 reader and connect to the host computer.

Run the application. For example, on Ubuntu 20.04 double-click balenaEtcher-1.5.116-x64.AppImage:

In the etcher window, we click on the `Flash from file` button.
![rock-5b-etcher-01](/img/rock5a/rock5a-etcher-1.webp)

In the etcher window, we click on the `Select target` button.
![rock-5b-etcher-02](/img/rock5a/rock5a-etcher-2.webp)

In the etcher window we click on the `Flash!` button.
![rock-5b-etcher-03](/img/rock5a/rock5a-etcher-3.webp)

In the etcher window, it will display `Flash Complete!  
![rock-5b-etcher-04](/img/rock5a/rock5a-etcher-4.webp)

Done! You have now successfully installed the OS image on your M.2 NVME SSD.

## Writing images on NVMe SSD-enabled SBCs

(example of ROCK 5A with M key to E key accessory)  

1. First flash the ROCK 5A image to an eMMC module or Micro SD card

2. Load the NVMe SSD into the ROCK 5A, insert the eMMC module with mirroring and the Micro SD card. Power on and boot up.

3. Network into the system and copy or download the target image to ROCK 5A using tools such as SCP, wget, etc.

4. Check if NVMe SSD exists

```bash
sudo fdisk -l
```

You can see similar information for the following:

```bash
Disk /dev/nvme0n1: 232.9 GiB, 250059350016 bytes, 488397168 sectors             
    #The '/dev/nvme0n1' is your NVME SSD device path
Units: sectors of 1 * 512 = 512 bytes                                           
Sector size (logical/physical): 512 bytes / 512 bytes                           
I/O size (minimum/optimal): 512 bytes / 512 bytes 
```

5. Use ROCK 5A to burn an image to an NVMe SSD

```bash
xzcat 'your compressed image path' | sudo dd of='your NVME SSD device path' bs=1M status=progress            
#such as: xzcat rock-5a-debian-bullseye-xfce4-arm64-20220906-0626-gpt.img.xz | sudo dd of=/dev/nvme0n1 bs=1M status=progress
```

### Erase M.2 NVMe SSDs

If the M.2 NVMe SSD was previously burned with an Android (or Linux) image, 
it is recommended that you erase the M.2 NVMe SSD before re-burning and then write the target image.

### 从 NVMe SSD启动

After writing the image to the NVMe SSD, to boot from the NVMe SSD you need to write the bootloader to the SPI Flash. 
For more informations, please check [Installing the bootloader to SPI Flash](rkdevtool) for details


  </TabItem>

</Tabs>
