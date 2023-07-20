---
sidebar_label: '软件源'
---

# 软件源

RadxaOS 目前提供两种独立的软件源以满足开发需求。所有的软件源均托管在 [GitHub](https://github.com/radxa-repo) 上。

其中一种为正式源，用于生成正式发布镜像，名称上和上游 Codename 保持一致。另外一种为测试源，用于开发使用，名称上是在上游 Codename 后追加 `-test` 后缀。

目前瑞莎维护的正式源有以下若干分支：

* `bullseye`: https://radxa-repo.github.io/bullseye
* `bookworm`: https://radxa-repo.github.io/bookworm
* `jammy`: https://radxa-repo.github.io/jammy

目前瑞莎维护的测试源有以下若干分支：

* `bullseye-test`: https://radxa-repo.github.io/bullseye-test
* `bookworm-test`: https://radxa-repo.github.io/bookworm-test
* `jammy-test`: https://radxa-repo.github.io/jammy-test

## 更改软件源

一般而言，测试源内的软件都未经过瑞莎详细测试，有可能存在严重问题。我们不建议普通用户自行更改已发布镜像的软件源，此类软件配置是不受支持的。

然而，在某些情况下（如测试系统升级），开发者有切换到测试源的需求。以下为操作方法：

1. 定位配置文件  
   瑞莎软件源配置文件存放在 `/etc/apt/sources.list.d/` 内，文件名均包含 `radxa` 前缀。  
   你可以使用以下命令查找配置文件：
   ```bash
   ls /etc/apt/sources.list.d/radxa*.list
   ```

2. 编辑软件源地址  
   使用你常用的编辑器打开上述所列的所有文件，你会看到类似如下的文件内容：
   ```bash
   $ cat /etc/apt/sources.list.d/radxa.list
   deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/bookworm bookworm main
   ```
   你需要将其中每一行的第二、第三项加入 `-test` 后缀：
   ```bash
   deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/bookworm-test bookworm-test main
   ```

3. 更新系统  
   配置完软件源后需要重新更新本地软件缓存：
   ```bash
   sudo apt update
   ```
   如果你同时希望将系统更新到最新测试版本的话，你还需要执行以下命令：
   ```bash
   sudo apt full-upgrade --allow-downgrades
   ```
