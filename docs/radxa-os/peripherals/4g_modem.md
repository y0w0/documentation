---
sidebar_label: 'ROCK 4B+ 4G模块拨号上网流程'
sidebar_position: 10
---

# ROCK 4B+ 4G模块拨号上网流程

- 开发板: ROCK 4B+

- 4G模块: EC25-AU

- 软件版本: rock-pi-4b-plus_debian_bullseye_kde_b21.img

- 内核版本: Vendor Linux 5.10

- 系统版本: Debian 11

## 拨号前的准备工作

**1. 下载软件包，准备一张 SD 卡，用 balenaEtcher 烧录工具烧录到 SD 卡中。**

- 官方软件包下载地址: 
[Radxa-4B+ 软件包](https://github.com/radxa-build/rock-pi-4b-plus/releases/tag/20230601-0112)

**2. 将烧录好的SD卡插入到 ROCK 4B+ 开发板的SD卡槽中。**

**3. 通过 USB 转 TTL 串口线建立板子和 PC 的连接，并在 PC 端用串口调试工具（比如 MobaXterm ）来显示系统信息。**

-  串口波特率设置为：1500000

**4. 上电启动，操作系统加载完毕后需要登陆，用户名和密码都为 rock ， 信息如下。**
```bash
  rock-pi-4b-plus login: rock
  Password:
```

**5. 登录成功后使用 sudo apt-get update 更新软件包。**
```bash
  sudo apt-get update
```

**6. 更新完成后依次执行下面的命令来安装我们拨号调试的相关软件。**
```bash
  sudo apt-get install net-tools
  sudo apt-get install ppp
  sudo apt-get install busybox
```

**7. 这样我们利用4G模块拨号上网前的准备工作就做好了，接下来就开始进行拨号流程。**

## 开始通过 ppp 进行拨号上网

**1. 通过 USB 接口连接我们的 4G 模块。**

**2. 检测 4G 模块是否被系统识别。**
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

**3. 检测 USB 模块是否载入系统。**
```bash
  rock@rock-pi-4b-plus:~$ lsmod | grep usb
  usb_wwan               20480  1 option
  usbserial              36864  2 usb_wwan,option
```

**4. 列出 USB 设备。**
```bash
  rock@rock-pi-4b-plus:~$ ls /dev/ttyUSB*
  /dev/ttyUSB0  /dev/ttyUSB1  /dev/ttyUSB2  /dev/ttyUSB3
```
**5. 用 AT 指令做准备测试。**

- 打开 microcom 窗口。
```bash
  sudo busybox microcom -s 115200 /dev/ttyUSB3
```

- 打开后输入 at 命令。
```bash
  at+cpin?  
  +CPIN: READY 

  OK  #查看 SIM 卡是否到位

  at+csq    
  +CSQ: 14,99

  OK  #检测信号，99 代表无信号。

  at+cops?  
  +COPS: 1,0,"CHN-UNICOM",7

  OK  #查看运营商

  at+creg?  
  +CREG: 0,1

  OK  #获得手机的注册状态(0,1:表示注册正常)

  at+qeng="servingcell"   
  +QENG: "servingcell","NOCONN","LTE","FDD",460,01,19A358C,366,100,1,5,5,774E,-108,-5,-83,9,13

  OK  #当前连接服务小区的信号强度和质量
```

-  以上信息回显没有错误后按 Ctrl + x 退出 microcom 。

**6. 接下来输入 "sudo su" 命令切换到 root 用户，密码为：rock**

**7. 切换成功后执行下面的命令进入 peers 目录，我们要在 peers 目录下添加三个拨号脚本。**
```bash
  cd /etc/ppp/peers/
```

**8. 编写第一个脚本文件，执行命令: vim rasppp ，在 rasppp 脚本文件中添加以下信息。**
```bash
  # 连接调试时隐藏密码
  hide-password

  # 该手机不需要身份验证
  noauth

  # 用于呼叫控制脚本
  connect '/usr/sbin/chat -s -v -f /etc/ppp/peers/rasppp-chat-connect'

  # 断开连接脚本
  disconnect '/usr/sbin/chat -s -v -f /etc/ppp/peers/rasppp-chat-disconnect'

  # 调试信息
  debug

  # 4G模块
  /dev/ttyUSB3

  # 串口波特率
  115200

  # 使用默认路由
  defaultroute

  # 不使用默认IP
  noipdefault

  # 不使用PPP压缩
  novj
  novjccomp
  noccp
  ipcp-accept-local
  ipcp-accept-remote
  local

  # 最好锁定串行总线，创建一个锁定文件，其他程序在发现存在这个文件后，就能得知相应的串口已经被使用。
  lock
  dump

  nodetach

  # 用户名 密码 （配置因运营商不同而不同）
  user ctnet@mycdma.cn
  password vnet.mobi

  # 硬件控制流
  crtscts
  remotename 3gppp
  ipparam 3gppp

  # 使用服务器端协商的DNS就可以设置参数usepeerdns
  usepeerdns
```

**9. 编写第个脚本文件，执行命令: vim rasppp-chat-connect ，在 rasppp-chat-connect 脚本文件中添加以下信息。**
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

**10. 编写第三个脚本文件，执行命令: vim rasppp-chat-disconnect ，在 rasppp-chat-disconnect 脚本文件中添加以下信息。**
```bash
  ABORT "ERROR"
  ABORT "NO DIALTONE"
  SAY "\NSending break to the modem\n"
 
  ""\k"

  ""+++ATH"
  SAY "\nGood bye !\n"
```

**11. 以上三个脚本文件编写成功后就可以开始进行拨号了，命令如下。**
```bash
  pppd call rasppp &    #后台进行拨号
```

- 完整拨号过程如图所示。

![拨号过程一](/img/4G-module/pppd_process1.webp)![拨号过程二](/img/4G-module/pppd_process2.webp)

**12. 拨号结束后按下回车键，输入 ifconfig 命令来查看网卡信息。**
```bash
  ifconfig
```

- 如图显示 ppp0 网卡信息就代表拨号成功。

![ppp0网卡](/img/4G-module/View-the-ppp0-NIC.webp)

**13. 执行下面的命令将 ppp0 网卡 ip 添加到默认路由。**
```bash
  route add default gw 10.224.236.90
```

**14. 执行 route 命令，显示下图信息则说明设置成功。**

![查看路由](/img/4G-module/view-route.webp)

**15. 在执行 ping 命令之前，执行下面的命令。**
```bash
  vim /etc/resolv.conf
```

- 在 /etc/resolv.conf 文件中加入以下内容。
```bash
  nameserver 8.8.8.8
```

- 保存退出

**16. 执行 ping 命令，如果出现如下图显示的情况代表可以上网。**

![成功上网](/img/4G-module/ping-success.webp)
