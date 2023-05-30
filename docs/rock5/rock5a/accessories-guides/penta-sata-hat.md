---
sidebar_label: 'ROCK 5A使用Penta SATA HAT教程'
sidebar_position: 20
---

# ROCK 5A使用Penta SATA HAT教程

- 图片为带Radxa PENTA SATA HAT的ROCK 5A。

![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-05.webp)

- 下图是 RADXA Penta SATA HAT 和包含的零件。
**链接详情请点击[Penta SATA HAT](../../../accessories/penta-sata-hat)**

![ROCK5A Install M.2 Extension Board](/img/accessories/penta-sata-hat-01.webp)

- 请先区分 IPEX 线缆的正反面。 如图所示。 **我们为 ROCK5A 提供的 IPEX 线的两端方向相同。**

![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-04.webp)

- 请注意，环扣需要卡入连接器中。

![E key to M key](/img/accessories/ekey-to-mkey-01.webp)

## 安装教程

1、M.2 E key to M.2 M key Board带 IPEX 电缆。 **注意这里安装的IPEX线是正面朝上的，环扣需要卡在接口上，确保固定。**

![ROCK5A Install M.2 Extension Board](/img/accessories/m2-extension-board-02.webp)

2、Radxa Penta SATA HAT 主板，带 IPEX 电缆。 **注意这里安装的IPEX线是正面朝上的，环扣需要卡在接口上，确保固定。**

![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-04.webp)

3、请将产品附带的M2.5x18+6铜柱和M2.5x5铜柱安装在ROCK5A上，如图所示。

![ROCK5A Install M.2 Extension Board](/img/rock5a/rock5a-m2-extension-board-04.jpg)

4、请将 IPEX 线的一端连接到 M.2 E key to M Key board，另一端连接到 Radxa Penta SATA HAT 并将 M.2 E key to M key board 安装到 M.2 E key ROCK5A的连接器。 如图所示。

![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-03.webp)

5、最后，使用 M2.5x5+5 铜柱组装 Radxa Penta SATA HAT。
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-01.webp)
![ROCK5A Install Penta SATA HAT](/img/rock5a/rock5a-penta-sata-hat-02.webp)

## 查看Penta SATA HAT挂载是否成功

1、通过```lsblk```查看SATA设备是否被识别。

```
radxa@rock-5a:~$ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda            8:0    0 465.8G  0 disk 
└─sda1         8:1    0 465.8G  0 part 
sdb            8:16   0 465.8G  0 disk 
└─sdb1         8:17   0 465.8G  0 part 
sdc            8:32   0 465.8G  0 disk 
└─sdc1         8:33   0 465.8G  0 part 
sdd            8:48   0 465.8G  0 disk 
└─sdd1         8:49   0 465.8G  0 part 
mmcblk0      179:0    0  14.5G  0 disk 
├─mmcblk0p1  179:1    0    16M  0 part /config
└─mmcblk0p2  179:2    0  14.4G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
zram0        254:0    0   3.8G  0 disk [SWAP]
radxa@rock-5a:~$ 
```

2、当系统识别到Penta SATA HAT时，你可以查看到SATA devices(sda/sdb/sdc/sdd)。

