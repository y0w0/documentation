---
sidebar_label: "Radxa 25W PoE HAT"
sidebar_position: 34
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

The Radxa 25W PoE HAT is an add‑on board specifically designed for Radxa SBCs equipped with PoE pins, offering full compatibility with various Radxa SBC products.
Provided that the user’s gateway equipment supports power delivery,
you can establish both network connectivity and power supply for Radxa SBCs featuring PoE pins using a single Ethernet cable.

![25W PoE](/img/accessories/poe-hat/25w-poe.webp)

## Features

- Compliant with IEEE 802.3af/at standards
- Wide input voltage range: 37V to 57V
- Output Voltage/Current: 5V / 4.8A, 12V / 2.1A
  - When only a 5 load is connected, the PoE output is up to 5V DC / 4.8A
  - When only a 12V load is connected, the PoE output is up to 12V DC / 2.1A
- Features a programmable temperature sensor
- Equipped with a customizable Cooling Fan delivering 1.45CFM for processor cooling
  - Size: 20 x 20 mm
  - Speed: 15000±15%RPM

## Mechanical Diagram

![25W PoE MD](/img/accessories/poe-hat/25w-poe-md.webp)

## Compatibility

It's supported on Radxa ROCK 3A, 3B, 3C, 4C+, 5A, and 5B.

## Usage

The package list of Radxa 25W PoE is as follows:

![25W PoE pkg](/img/accessories/poe-hat/25w-poe-pkg.webp)

Usage steps:

1. AccessPass four M2.5 x 4 Copper Pillars through the four positioning holes of Radxa SBCs, and individually secure them to M2.5 x 9 Copper Pillars to ensure a sturdy fixation.

![25W PoE copper pillars on-board](/img/accessories/poe-hat/copper-pillars-on-board.webp)

2. Align the Radxa 25W PoE HAT with the PoE interface and the 40-Pin interface, and insert it carefully, ensuring that it passes through the four M2.5 x 9 Copper Pillars.

![25W PoE connected](/img/accessories/poe-hat/25w-poe-connected.webp)

3. On top of the Radxa 25W PoE HAT, align the four M2.5 x 4 Copper Pillars with the four M2.5 x 9 Copper Pillars, then secure them by rotating them into place. The following is the Illustrated Outcome:

  <Tabs>
    <TabItem value="5a_4c+" label="ROCK 5A, ROCK 4C+">

    ![25W PoE 5A](/img/accessories/poe-hat/25w-poe-5a.webp)
      
    </TabItem>
    <TabItem value="5b_3b" label="ROCK 5B, ROCK 3B">

    ![25W PoE 5B](/img/accessories/poe-hat/25w-poe-5b.webp)

    </TabItem>
    <TabItem value="3a_3c" label="ROCK 3A, ROCK 3C">

    ![25W PoE 3A](/img/accessories/poe-hat/25w-poe-3c.webp)

    </TabItem>
  </Tabs>

4. Enabled the 25W PoE Overlay

This overlay is not yet available in older versions of the software.
So you need to update the software to use the PoE overay.
You can update the system by refering the [System Update Guide](/radxa-os/rsetup/rsetup-tool#system-update).

And then, following the [Device Tree Configuration](/radxa-os/rsetup/devicetree#how-to-enable-an-overlay) to enable the overlay of 25W PoE named `Enable Radxa 25W PoE HAT`,

```bash
  [*] Enable Radxa 25W PoE HAT
```

Finally, reboot your SBC, the PoE HAT would work.
