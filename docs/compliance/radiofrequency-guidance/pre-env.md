---
sidebar_label: '定频认证指导'
sidebar_position: 13
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 简介  

进行 CE / FCC 认证的时候，会要求设备的无线信号工作在指定频率。本教程会指引你如何进行 Wi-Fi / 蓝牙相关的定频设置。

## 工具

[ wl 工具](https://dl.radxa.com/fix_freq_docs/wl)是用于 WiFi 测试使用，需要下载并复制到系统里，使用系统自带的 hcitool 工具来测试 bt。

准备好 wl 工具，通过 adb push 或 scp 将其推送到系统的 `/usr/local/sbin` 路径下并授予可执行权限。

```
$ adb push wl /home/
or
$ scp wl radxa@ip:/home/
$ chmod +x wl
$ sudo cp /home/wl /usr/local/sbin
```

## 特定固件 

<Tabs>
<TabItem value="AP6256" label="AP6256" default>

下载 AP6256 对应固件：[fw_bcm43456c5_ag_mfg.bin](https://dl.radxa.com/fix_freq_docs/ap6256/fw_bcm43456c5_ag_mfg.bin)

```
# 禁用默认 brcmfmac 驱动程序
echo "blacklist brcmfmac" >> /etc/modprobe.d/blacklist.conf

# 替换 firmware
$ adb push fw_bcm43456c5_ag_mfg.bin /home
or
$ scp fw_bcm43456c5_ag_mfg.bin radxa@ip:/home/

$ cd /lib/firmware/brcm
$ cp fw_bcm43456c5_ag.bin fw_bcm43456c5_ag.bin.bkp
$ cp fw_bcm43456c5_ag_mfg.bin fw_bcm43456c5_ag.bin
$ reboot
$ sudo wl ver                       # 出现 WLTEST 字样，说明 firmware 替换成功。
$ sudo hcitool cmd 0x03 0x003       # 没有报错，说明 bt 环境正常
```

</TabItem>

<TabItem value="AP6212" label="AP6212">

下载 AP6212 对应固件：[fw_bcm43438a1_mfg.bin](https://dl.radxa.com/fix_freq_docs/ap6212/fw_bcm43438a1_mfg.bin)

```
# 禁用默认 brcmfmac 驱动程序
echo "blacklist brcmfmac" >> /etc/modprobe.d/blacklist.conf

# 替换 firmware
$ adb push fw_bcm43438a1_mfg.bin /home
or
$ scp fw_bcm43438a1_mfg.bin radxa@ip:/home/

$ cd /lib/firmware/brcm
$ cp fw_bcm43438a1.bin fw_bcm43438a1.bin.bkp
$ cp fw_bcm43438a1_mfg.bin fw_bcm43438a1.bin
$ reboot
$ sudo wl ver                       # 出现 WLTEST 字样，说明 firmware 替换成功。
$ sudo hcitool cmd 0x03 0x003       # 没有报错，说明 bt 环境正常
```

</TabItem>

<TabItem value="CM256" label="CM256">

下载 CM256 对应固件：[cyw43455-mfgtest-7.45.100.18.bin](https://dl.radxa.com/fix_freq_docs/cm256/cyw43455-mfgtest-7.45.100.18.bin)

```
# 禁用默认 brcmfmac 驱动程序
echo "blacklist brcmfmac" >> /etc/modprobe.d/blacklist.conf

# 替换 firmware
$ adb push cyw43455-mfgtest-7.45.100.18.bin /home
or
$ scp cyw43455-mfgtest-7.45.100.18.bin radxa@ip:/home/

$ cd /lib/firmware/brcm
$ cp cyw43455.bin cyw43455.bin.bkp
$ cp cyw43455-mfgtest-7.45.100.18.bin cyw43455.bin
$ reboot
$ sudo wl ver                       # 出现 WLTEST 字样，说明 firmware 替换成功。
$ sudo hcitool cmd 0x03 0x003       # 没有报错，说明 bt 环境正常
```

</TabItem>
</Tabs>

## 定频指令

请参考以下文档进行测试。

[Wi-Fi RF Test Commands for Linux-v05.pdf](https://dl.radxa.com/fix_freq_docs/Wi-Fi+RF+Test+Commands+for+Linux_BCM4339-v05.pdf)

[BT+RF+Test+Commands+for+Linux-v07.pdf](https://dl.radxa.com/fix_freq_docs/BT+RF+Test+Commands+for+Linux-v07.pdf)

## 注意事项

测试WIFI时，需要关闭BT：

```
ifconfig wlan0 up
hciconfig hci0 down
```

测试BT时，需要关闭WIFI：

```
hciconfig hci0 up
ifconfig wlan0 down
```