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

1. 编辑软件源地址  
   瑞莎软件源配置文件存放在 `/etc/apt/sources.list.d/` 内，文件名均包含 `radxa` 前缀。  
   使用你常用的编辑器打开上述所列的**所有文件**。以 nano 为例：
   ```bash
   sudo nano /etc/apt/sources.list.d/radxa*.list
   ```
   你会看到类似如下的文件内容：
   ```
   deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/bookworm bookworm main
   ```
   你需要将其中每一行的第二、第三项加入 `-test` 后缀：
   ```
   deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/bookworm-test bookworm-test main
   ```

:::caution
必须将第一步中打开的所有文件进行更改，否则系统会处于非正常状态！
:::

2. 更新软件源优先级
   瑞莎软件源首选项文件存放在 `/etc/apt/preferences.d/` 内，文件名均包含 `radxa-` 前缀。  

:::caution
软件源和软件包的首选项文件均存放在这一路径下。  
由于有的软件包也包含 `radxa-` 前缀，修改前需要仔细核对文件内容。
:::

   使用你常用的编辑器编辑以下文件。以 nano 为例：
   ```bash
   sudo nano /etc/apt/preferences.d/radxa-*
   ```
   你会看到类似如下的文件内容：
   ```
   Package: *
   Pin: release a=rockchip-bookworm
   Pin-Priority: 1001
   ```
   你需要将 `Pin` 里面所描述的 Codename 加入 `-test` 后缀：
   ```
   Package: *
   Pin: release a=rockchip-bookworm-test
   Pin-Priority: 1001
   ```

3. 更新系统  
   配置完软件源后需要重新更新本地软件缓存：
   ```bash
   sudo apt update
   ```
   如果你同时希望将系统更新到最新测试版本的话，你还需要执行以下命令：
   ```bash
   sudo apt full-upgrade --allow-downgrades
   sudo apt full-upgrade --allow-downgrades # 执行第二遍从而更新被版本锁定的软件包
   sudo apt autoremove # 可选，移除不再使用的软件包
   ```
