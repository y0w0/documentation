---
sidebar_label: '电源控制'
sidebar_position: 18
---

# 电源控制

## 电源键使用介绍

- 当 ROCK 5B 接上电源之后，电源绿灯 RGB LED 将会一直常亮，按下电源键（Power Button）即可启动开机。
  
![ROCK 5B Power](/img/rock5b/rock5b-power.webp)

- 当 ROCK 5B 启动之后，再次按下电源键（Power Button），将弹出用户状态界面，用户可以选择睡眠、重启、关机或登出。

<div className='rock5b-power'>
  <img src="/img/rock5a/rock5a-power-status.webp" alt="ROCK 5B Power" />
</div>

## 软件控制

### 图形界面开关机/重启
1. 点击桌面左下角的图标，选择 **Leave** 选项。 
2. 用户可以选择睡眠、重启、关机或登出。

![ROCK5A GUI 01](/img/rock5a/rock5a-GUI-leave.webp)

### 终端指令关机/重启 

在桌面上打开终端命令（或使用Ctrl+Alt+T快捷键）。

**重启**：输入以下命令并按回车键，随后输入密码。
```
sudo reboot
```

**关机**：输入以下命令并按回车键，随后输入密码。
```
sudo shutdown now
```
