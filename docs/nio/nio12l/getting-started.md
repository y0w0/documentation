---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 开始使用

- Radxa NIO 12L 是一款小尺寸高性能单板计算机，搭载了 MediaTek MT8395(Genio 1200) 八核处理器作为开发平台,搭载有 Mali G-57 MC5 GPU 和 AI 处理模块,为用户提供流畅的桌面体验和强大的 AI 运算能力,丰富的外设接口为复杂多场景提供更多的可能。

## 标注图

![NIO 12L Overview](/img/nio/nio12l/n12l_overview.webp)

## 特性

<table>
    <tr>
        <td align="center" >模块</td>
        <td align="center">NIO 12L</td>
    </tr>
    <tr>
        <td align="center">SoC</td>
        <td colspan="2" align="center">MediaTek MT8395(Genio 1200)</td>
    </tr>
    <tr>
        <td align="center">CPU</td>
        <td colspan="2" align="center">四核 Cortex-A78 2.2Ghz + 四核 Cortex-A55 2.0Ghz </td>
    </tr>
    <tr>
        <td align="center">GPU</td>
        <td colspan="2" align="center">Arm Mali™-G57 MC5 3D Graphics Accelerator (GPU) with Vulkan® 1.1, OpenGL ES 3.2 and OpenCL™ 2.2</td>
    </tr>
    <tr>
        <td align="center">内存</td>
        <td colspan="2" align="center">4/8/16 GB LPDDR4X</td>
    </tr>
    <tr>
        <td align="center">存储</td>
        <td align="center">UFS: 128G/256G <br/>microSD 存储卡</td>
    </tr>
    <tr>
        <td align="center">显示</td>
        <td colspan="2" align="center">HDMI：4KP60<br/>TYPE-C DP: 4KP60<br/>MIPI LCD: 1X4 LAN</td>
    </tr>
    <tr>
        <td align="center">以太网</td>
        <td align="center">千兆以太网</td>
    </tr>
    <tr>
        <td align="center">无线通讯</td>
        <td align="center">Wi-Fi 6 (802.11 b/g/n) BT 5.2 with BLE</td>
    </tr>
    <tr>
        <td align="center">USB</td>
        <td colspan="2" align="center">USB 3.0 Type-C HOST/OTG X1 <br/> USB 3.0 Type-A HOST X4</td>
    </tr>
    <tr>
        <td align="center">摄像头</td>
        <td colspan="2" align="center">2个 4 通道 MIPI CSI</td>
    </tr>
    <tr>
        <td align="center">其他</td>
        <td colspan="2" align="center">一个40针扩展座<br/>一个3.5mm 耳机接口</td>
    </tr>
    <tr>
        <td align="center">电源</td>
        <td colspan="2" align="center">需要 5V 电源适配器</td>
    </tr>
</table>

## 开始前准备

### 必要项

-NIO 12L 主板

- 电源：
  NIO 12L 采用 Type-C 接口供电，仅支持 5V 输入。建议最低使用 5V/2A 电源适配器。
  :::tip
  瑞莎推荐使用 [Radxa Power PD30W](/accessories/pd_30w)。
  :::

- USB 键鼠

- 显示器和 HDMI/TYPE-C DP 线  
  配备了HDMI 和 TYPC-C DP 接口

- USB C to USB A 数据线  
  将镜像刷写到板子上。

### 可选项

- USB 转 TTL 串口线:  
  用于[串口调试](/general-tutorial/serial), 串口波特率为921600。

- 摄像头  
  支持MIPI CSI摄像头。

### 系统安装
[Yocto系统安装](/nio/nio12l/install-yocto-system)
