---
sidebar_label: '社交媒体应用程序'
sidebar_position: 80
---

# 社交媒体应用程序

## Discord
  
1. 打开一个终端，使用以下命令更新你的系统：  

```bash
    sudo apt update && sudo apt upgrade
```

2. 安装依赖文件：  

```bash
    sudo apt install libc++1 libc++abi1 libatomic1 libgconf-2-4 libnotify4 libnspr4 libnss3 libxss1 libxtst6 xdg-utils
```

3. 从Discord网站下载最新的Linux版本（64位）。   

4. 打开一个终端，切换到下载的Discord安装包所在的目录：  

```bash
    cd Downloads
```

5. 解压下载的安装包：

```bash
    tar -xvzf discord-*.tar.gz
```

6. 进入解压的文件夹：

```bash
    cd discord-*
```

7. 运行Discord应用程序：  

```bash
    ./Discord
```
如果你在运行Discord时遇到任何问题，你可以尝试重新启动系统并再次运行，或者检查你的依赖文件是否正确安装。
## Tencent QQ
1. 下载安装包(下载链接可能会过期可前往[QQ官网](https://im.qq.com/linuxqq/index.shtml)下载)
```bash
wget https://dldir1.qq.com/qqfile/qq/QQNT/ad5b5393/linuxqq_3.1.2-13107_arm64.deb
```
2.安装软件包
```bash
sudo dpkg -i linuxqq_3.1.2-13107_arm64.deb
```
3.运行qq
```bash
qq
```


