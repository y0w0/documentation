---
sidebar_label: 'Powen on/off'
sidebar_position: 18
---

# Powen on/off

## Introduction to using the power button

- When the ROCK 5B is connected to the power supply, the power green light (RGB LED) will always be on, press the power button (Power Button) to start the boot.
  
![ROCK 5B Power](/img/rock5b/rock5b-power.webp)

- After the ROCK 5B is started, press the Power Button again, and the user status interface will pop up, and the user can choose to sleep, restart, shut down or log out.

<div className='rock5b-power'>
  <img src="/img/rock5a/rock5a-power-status.webp" alt="ROCK 5B Power" />
</div>

## Software Control

### Graphical Interface Power on or off/Restart
1. Click on the icon in the lower left corner of the desktop and select the **Leave** option. 
2. Users can choose to sleep, restart, shutdown or logout.

![ROCK5A GUI 01](/img/rock5a/rock5a-GUI-leave.webp)

### Terminal Command Shutdown/Restart 

Open the Terminal command on the desktop (or use the Ctrl+Alt+T shortcut).

**Reboot**: Enter the following command and press Enter, followed by the password.
```
sudo reboot
```

**Shutdown**: Enter the following command and press Enter, followed by the password.
```
sudo shutdown now
```
