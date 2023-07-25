---
sidebar_label: 'ROCK 4B+ 4G module dial-up Internet access process'
sidebar_position: 10
---

# ROCK 4B+ 4G module dial-up Internet access process

- Development board: ROCK 4B+**

- 4G Module: EC25-AU**

- Software image version: rock-pi-4b-plus_debian_bullseye_kde_b21.img

- Kernel version: Vendor Linux 5.10

- System version: Debian 11

## Preparation before dialing

**1. Download the package, get an SD card, and burn it to the SD card with the balenaEtcher burning tool.**

- Official address for downloading the software package: 
[rock-pi-4b-plus_debian_bullseye_kde_b21](https://github.com/radxa-build/rock-pi-4b-plus/releases/tag/20230601-0112)

**2. Insert the burned SD card into the SD card slot on the ROCK 4B+ development board.**

**3. Establish the connection between the board and the PC through the USB to TTL serial port line, and use the serial port debugging tool (such as MobaXterm) on the PC side to display the system information.**

- The serial port baud rate is set to 1500000

**4. After the operating system is loaded, you need to log in. The user name and password are “rock” , and the information is as follows**
```bash
  rock-pi-4b-plus login: rock
  Password:
```

**5. After successful login, use "sudo apt-get update" to update the package**
```bash
  sudo apt-get update
```

**6. After the update is complete, execute the following commands successively to install the related software of our dial-up debugging**
```bash
  sudo apt-get install net-tools
  sudo apt-get install ppp
  sudo apt-get install busybox
```

**7. In this way, the preparation work before we use the 4G module to dial up the Internet is done, and then the dial-up process begins.**

## The system uses ppp for dial-up Internet access

**1. Connect to our 4G module via USB port.**

**2. Detect whether the 4G module is recognized by the system:**
```bash
  rock@rock-pi-4b-plus:~$ lsusb
  Bus 008 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
  Bus 007 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
  Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
  Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
  Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
  Bus 002 Device 002: ID 2c7c:0125 Quectel Wireless Solutions Co., Ltd. EC25 LTE modem  
  Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
  Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
  Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

**3. Check whether the USB module is loaded into the system:**
```bash
  rock@rock-pi-4b-plus:~$ lsmod | grep usb
  usb_wwan               20480  1 option
  usbserial              36864  2 usb_wwan,option
```

**4. List USB devices:**
```bash
  rock@rock-pi-4b-plus:~$ ls /dev/ttyUSB*
  /dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```
**5. Preparation test with AT instruction:**

- Open the microcom window:
```bash
  sudo busybox microcom -s 115200 /dev/ttyUSB3
```

- When it opens, enter the at command:
```bash
  at+cpin?  
  +CPIN: READY 

  OK  #Check whether the SIM card is in place

  at+csq    
  +CSQ: 14,99

  OK  #Detection signal. 99 means no signal

  at+cops?  
  +COPS: 1,0,"CHN-UNICOM",7

  OK  #View Carrier

  at+creg?  
  +CREG: 0,1

  OK  #Get the registration status of the phone (0,1: indicates normal registration)

  at+qeng="servingcell"   
  +QENG: "servingcell","NOCONN","LTE","FDD",460,01,19A358C,366,100,1,5,5,774E,-108,-5,-83,9,13

  OK  #Signal strength and quality of the currently connected service cell
```

-  If no error is displayed, press Ctrl + x to exit microcom.

**6. Next enter the "sudo su" command to switch to the root user with the password : rock**

**7. After the switchover is successful, run the following command to enter the peers directory. We need to add three dialup scripts to the peers directory:**
```bash
  cd /etc/ppp/peers/
```

**8. To write the first script file, execute the command: "vim rasppp" and add the following information to the rasppp script file:**
```bash
  # The password is hidden during connection debugging
  hide-password

  # The phone does not require authentication
  noauth

  # Used for call control scripts
  connect '/usr/sbin/chat -s -v -f /etc/ppp/peers/rasppp-chat-connect'

  # Disconnect script
  disconnect '/usr/sbin/chat -s -v -f /etc/ppp/peers/rasppp-chat-disconnect'

  # Debugging information
  debug

  # 4G module
  /dev/ttyUSB3

  # Serial baud rate
  115200

  # Use the default route
  defaultroute

  # The default IP address is not used
  noipdefault

  # PPP compression is not used
  novj
  novjccomp
  noccp
  ipcp-accept-local
  ipcp-accept-remote
  local

  # It is best to lock the serial bus, create a lock file, and other programs will be able to learn that the appropriate serial port has been used once they discover the existence of this file.
  lock
  dump

  nodetach

  # Username password (The configuration varies with carriers) 
  user ctnet@mycdma.cn
  password vnet.mobi

  # Hardware control flow
  crtscts
  remotename 3gppp
  ipparam 3gppp

  # Use the DNS negotiated on the server side to set the usepeerdns parameter
  usepeerdns
```

**9. Write a second script file and execute the command: "vim rasppp-chat-connect" to add the following information to the rasppp-chat-connect script file:**
```bash
  TIMEOUT 15  
  ABORT   "BUSY"
  ABORT   "ERROR"
  ABORT   "NO ANSWER"
  ABORT   "NO CARRTER"
  ABORT   "NO DIALTONE"

  ""AT
  OK \rATZ

  OK \rAT+CGDCONT=1,"IP",""

  OK-AT-OK ATDT#777
  CONNECT \d\c
```

**10. Write the third script file and execute the command vim rasppp-chat-disconnect, adding the following information to the   rasppp-chat-disconnect script file:**
```bash
  ABORT "ERROR"
  ABORT "NO DIALTONE"
  SAY "\NSending break to the modem\n"
 
  ""\k"

  ""+++ATH"
  SAY "\nGood bye !\n"
```

**11. After the above three script files are written successfully, you can start dialing, and the command is as follows:**
```bash
  pppd call rasppp &    #Background dialing
```

- The complete dial-up process is shown as follows:

![pppd process one](/img/4G-module/pppd_process1.webp)![pppd process two](/img/4G-module/pppd_process2.webp)

**12. After dialing, press Enter and enter the ifconfig command to view the NIC information:**
```bash
  ifconfig
```

- If the ppp0 network adapter information is displayed, the dialing is successful:

![view ppp0 NIC](/img/4G-module/View-the-ppp0-NIC.webp)

**13. Run the following command to add ppp0 network port ip to the default route:**
```bash
  route add default gw 10.224.236.90
```

**14. Run the route command. If the following information is displayed, the configuration succeeds**

![view route](/img/4G-module/view-route.webp)

**15. Before executing the ping command, perform the following steps:**
```bash
  vim /etc/resolv.conf
```

- Add the following to the /etc/resolv.conf file:
```bash
  nameserver 8.8.8.8
```

- Seve exit

**16. Run the ping command. If the domain name can be pinged through, the dial-up Internet access is successful.**

![ping](/img/4G-module/ping-success.webp)
