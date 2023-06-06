---
sidebar_label: '在Micro SD Card上安装操作系统'
sidebar_position: 31
---

# 在SDCard上安装操作系统

## 准备 

1. 准备一个Micro SD卡
2. 准备一个SD卡读卡器
3. [下载](../../official-images)官方Ubuntu/Debian系统镜像
4. 把SD卡插入SD读卡器, 然后把SD读卡器插入计算机的USB接口  
![ROCK5A Install](/img/accessories/sd_install_1.webp)


## 刷入操作系统镜像到Micro SD卡

### 通过Etcher刷入操作系统镜像到Micro SD卡

1. [下载](https://www.balena.io/etcher#download-etcher)刷写工具`Etcher`。
  - ![ROCK5A via Etcher 01](/img/rock5a/rock5a-etcher.webp)

2. 打开Etcher，将准备的操作系统镜像刷写到MicroSD卡。在Etcher窗口中，单击`Flash from file`选择刚下载的操作系统镜像。
  - ![ROCK5A via Etcher 02](/img/rock5a/rock5a-etcher-1.webp)

3. 在Etcher窗口中，点击`Select target`。
  - ![ROCK5A via Etcher 03](/img/rock5a/rock5a-etcher-2.webp)

4. 在Etcher窗口中，点击`Flash!`然后等待刷写进度条。
  - ![ROCK5A via Etcher 04](/img/rock5a/rock5a-etcher-3.webp)

5. 在Etcher窗口中，当刷写成功时将会显示`Flash Complete!`
  - ![ROCK5A via Etcher 05](/img/rock5a/rock5a-etcher-4.webp)
  
**如果刷写操作系统镜像错误, 请手动再试一次。**

### 通过Win32DiskImager刷入操作系统镜像到Micro SD卡

1. [下载](https://win32diskimager.org/)刷写工具`Win32DiskImager`
  - ![ROCK5A via Win32DiskImager 01](/img/rock5a/rock5a-win32.png)

2. 打开Win32DiskImager  
  - ![ROCK5A via Win32DiskImager 02](/img/rock5a/rock5a-win32-1.png)  

3. 点击文件夹图标按钮然后选择要刷写的镜像
  - ![ROCK5A via Win32DiskImager 03](/img/rock5a/rock5a-win32-2.png)   

4. 完成上述操作后，单击`Write`按钮开始刷写镜像，然后等待写入镜像完成。
  - ![ROCK5A via Win32DiskImager 04](/img/rock5a/rock5a-win32-3.png) 



