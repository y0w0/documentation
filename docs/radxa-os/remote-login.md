---
sidebar_label: '远程登录'
sidebar_position: 60
---

# 远程登录

## SSH

这是一个教程，介绍如何从 Windows 计算机使用 SSH 远程登录 ROCK 5A。  

通过SSH协议连接到Debian系统，需要确保Debian系统上已经安装了SSH服务器。 您可以按照以下步骤操作：   

1. 确保 Debian 系统上已经安装了 SSH 服务器。 在终端中运行以下命令： 

    sudo service ssh status
如果没有安装 SSH 服务器，可以使用以下命令安装：

    sudo apt-get update
    sudo apt-get install ssh

2. 打开终端程序并输入以下命令： 

    ssh [username]@[hostname]
    or  
    ssh [username]@[IP address]  
例如： 

    ssh radxa@192.168.1.100

3. 需要输入用户密码才能成功连接到Debian系统。
这是一个基本的 SSH 连接过程。 您可以使用其他 SSH 选项进行更高级的连接。


## 远程桌面

这是一个教程，介绍如何从 Windows 计算机使用 VNC 远程访问系统。  

### 安装 VNC 服务器

1. 打开终端应用程序并输入以下命令以更新包列表:   

```
sudo apt-get update
```

2. 输入以下命令安装TightVNC Server:  

```
sudo apt-get install tightvncserver
```

3. 运行 `tightvncserver`.

这将提示您为 VNC 连接设置密码。

4. 要停止 TightVNC Server，您可以使用以下命令：  

```
tightvncserver -kill :1
```

注意：如果您在第一次运行 TightVNC Server 时没有使用“:1”参数，请相应地进行调整。


### 配置 VNC 服务器

1. 一旦 TightVNC Server启动，它将创建一个 VNC 会话，其中包含 VNC 服务器的 IP 地址和端口号（通常为 5901）。

2. 在终端应用程序中，输入以下命令来编辑 VNC Server 的配置文件：  

```
nano ~/.vnc/xstartup
```

3. 将以下行添加到文件末尾以启用 LXDE 桌面环境：  

```
lxsession -s LXDE &
```

4. 输入以下命令重新启动 VNC 服务器：  

```
tightvncserver -kill :1
tightvncserver  
```

5. 在 VNC 查看器上测试连接：在您的 Windows PC 上，打开 VNC 查看器，输入您产品的 IP 地址和端口号，然后使用 VNC 服务器的用户名和密码进行身份验证。    

### 在 Windows PC 上安装 VNC 查看器

1. 转到 Web 浏览器上的 VNC 查看器下载页面, e.g. https://www.realvnc.com/en/connect/download/viewer/  
2. 下载并安装 VNC 查看器。 

### 连接设置

1. 在 VNC 查看器上，输入产品的 IP 地址和端口号。  
2. 使用 VNC 服务器的用户名和密码进行身份验证。
3. 连接成功后，即可远程控制。 

