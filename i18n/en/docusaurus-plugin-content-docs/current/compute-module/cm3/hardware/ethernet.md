---
sidebar_position: 10
---

# Gigabit Ethernet

The RADXA CM3 board integrates a Gigabit PHY chip, RTL8211F. Four sets of differential signals, PHY1_MDI0, PHY1_MDI01, PHY1_MDI02, and PHY1_MDI03, are connected to the B2B connector. When operating at 1000BASE‑T, all four sets of differential signals are used. When operating at 100BASE‑TX, only PHY1_MDI0 and PHY1_MDI01 are utilized.

![Ethernet](/img/cm3/ethernet-phy-design.webp)

The RTL8211F is a voltage mode PHY, and when using it, the center tap of the transformer should be connected to ground through a 1uF capacitor.

On the CM3 compute module, four series common‑mode inductors are placed in line with the four sets of differential signals. These inductors help suppress electromagnetic interference (EMI) and provide common‑mode filtering. When designing a custom baseboard, refer to the provided design as follows꞉  
![Ethernet](/img/cm3/eth-design.webp)

The trace length of the MDI signal on the compute module.

| Signal     | Length     |
| ---------- | ---------- |
| PHY1_MDI0+ | 319.903mil |
| PHY1_MDI0- | 326.000mil |
| PHY1_MDI1+ | 249.671mil |
| PHY1_MDI1- | 277.370mil |
| PHY1_MDI2+ | 394.321mil |
| PHY1_MDI2- | 400.440mil |
| PHY1_MDI3+ | 335.779mil |
| PHY1_MDI3- | 347.346mil |

The differential signals of the MDI (Medium Dependent Interface) for Gigabit Ethernet generally control the differential impedance at 100 ohms.
