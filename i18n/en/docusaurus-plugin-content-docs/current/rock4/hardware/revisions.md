---
sidebar_label: 'Hardware Revision'
sidebar_position: 20
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Revision

You can check the differences between different hardware versions of ROCK 4 series boards here.

<Tabs>
<TabItem value="ROCK_4SE" label="ROCK 4SE">

- **V1.53:**  
Renamed to ROCK 4SE.  
PD protocol chip changed to 12V ouput and 24K.  
Removed R1608.  
Removed OTG circuit.  
Updated some silk printing to latest version.

</TabItem>
<TabItem value="ROCK_4C_Plus" label="ROCK 4C+">

- **V1.2:**  
Initial version.

- **V1.4:**  
Remove M.2 connector.

</TabItem>
<TabItem value="ROCK_4AB_Plus" label="ROCK 4A/B+">

- **V1.73:**  
Optimize the headphone jack footprint for manufacturing.  
***<font color='red'>Board manufactured after 2022-08-05 will have SPI unpopulated. This include future revisions.</font>***

- **V1.72:**  
Ethernet phy changed from RTL8211E to RLT8211F(no software change required).  
QC/PD protocol trigger chip changed to CH224D.

- **V1.6:**  
Add USB C input voltage measure from SoC ADC.  
Add EEPROM (BL24C16A) for mac address and serial no.  
eMMC socket changed to on board chips.  
Three buttons are soldered by default: *1: Maskrom 2: Reset 3: Recovery*  
![ROCK 4C+ Button](/img/rock4/rock4b+-button.webp)

</TabItem>
<TabItem value="ROCK_4AB" label="ROCK 4A/B">

- **V1.5:**  
Ethernet phy changed from RTL8211E to RLT8211F(no software change required).  
Change the headphone detect circuit, use the mic from HP jack by default.  
QC/PD protocol trigger chip changed to CH224D.  

- **V1.4:**  
Changes the USB 3.0 OTG label to simple L/H for Host/Device.  
Add external wifi antenna option, not soldered by default.  
Change the headphone footprint to through hole leg one.  
Change user status LED from red to blue(blinking red led is confusing for some user).  
A 4MB(32Mbit) SPI flash is pasted by default, for future SPI booting support.

- **V1.3:**  
Use Type-C for power, adds QC&PD trigger IC.  
LPDDR4 for 1/2/4GB RAM.  
Use odroid compatible eMMC socket as storage.  
On board wifi antenna.

</TabItem>
<TabItem value="ROCK_4C" label="ROCK 4C">

- **V1.2:**  
Change to a more tight micro HDMI connector.

</TabItem>
</Tabs>
