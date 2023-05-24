---
sidebar_label: 'Before Start'
sidebar_position: 10
---

# Before Start

This guide is designed for ROCK 4 series. The purpose is to learn about the ROCK 4 board as well as how to prepare and set up for basic use. 
The ROCK 4 series has 7 models for now and the difference are trivial from the usage point of view. When you get a board, you need to know which ROCK 4 model it is and which hardware version it is. 
The information is printed in the top side of the board. We will introduce the board information as much as possible.

## Preparation

The preparation before work is basically the same for each model, the differences will be explained as they arise.

- ROCK (Pi) 4 main board.

- Storage media:  
micro SD card and card reader: Preferably at least 16 GB, C10/A1 specification and above.  
eMMC module and reader: Preferably at least 16 GB.  
SSD: M.2 interface only.  

**Note: ROCK (Pi) 4A/B Plus have on board eMMC, so they don't support eMMC module, 
ROCK (Pi) 4C Plus doesn't support direct connection to SSD because there isn't a M.2 interface on board.**

- Power supply:  
Official power adapter [Radxa PD 30W](../../accessories/pd-30w) is recommended, it supports all products of ROCK 4 series.  
Except for ROCK (Pi) 4C Plus support 5V only, other ROCK 4 series products support PD and QC charging protocols, poor chargers may cause some issues.

**Note: If the power adapter is PD/QC compatible, the USB power cable must 
support USB data communication(USB 2.0 or 3.0) between the board 
and the power adapter, or the power adapter will not output 
desired voltage wanted by the board.**

- OS image:  
[Official OS](../getting-started/official-images) are the recommended options, 
many [third party OS](../getting-started/third-party-images) also have been supported, 
most of them use the same installation way as official image, but some with special options.  

- Monitor and display cable:  
ROCK (Pi) 4A, 4B, 4A Plus, 4B Plus, 4 SE is equipped with a full sized HDMI connector. HDMI capable monitor is recommended.  
ROCK (Pi) 4C, is equipped with one micro sized HDMI connector and one mini size DP connector. HDMI or DP capable monitor is recommended.  
ROCK (Pi) 4C Plus, is equipped with two micro sized HDMI connector. HDMI capable monitor is recommended.  
HDMI EDID display data is used to determine the best display resolution. On monitors and TVs that support 1080p (or 4K) this resolution will be selected. 
If 1080p is not supported the next available resolution reported by EDID will be used. This selected mode will work with MOST but not all monitors/TVs.  

- USB Keyboard and Mouse:  
With four USB-A connectors, ROCK (Pi) 4 can be equipped with a full sized keyboard and mouse.

## Optional

- USB to TTL serial cable:  
ROCK (Pi) 4 exports a dedicated serial console, which can access the
low level debug message.
 
- USB Male A to Male A cable:  
If you want write image on ROCK (Pi) 4 from USB OTG port or use ROCK
(Pi) 4 as USB peripheral communication with other PCs you need an
USB Male A to Male A cable to connect ROCK (Pi) 4 and PC.

- Ethernet cable:  
ROCK (Pi) 4 supports Internet access via WIFI or Ethernet. 
An Ethernet cable is used to connect your ROCK (Pi) 4 to a local
network and the Internet.

- Camera Module:  
ROCK (Pi) 4 supports camera function.  
For more camera module supported, please check the assessories guide of each producnt.

- LCD Module:  
ROCK (Pi) 4 supports LCD display function.  
For more panels supported, please check the assessories guide of each producnt.

- Audio cable:  
Audio can be played through speaker or headphones using a standard 3.5mm jack.

# Completion

Once the preparation is complete, it's ready to [flash the OS](../getting-started/os-installation-guide) and let ROCK (Pi) 4 work!




