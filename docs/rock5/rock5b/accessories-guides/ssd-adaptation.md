---
sidebar_label: 'ROCK 5B SSD 兼容性'
sidebar_position: 15
---

# 已测试型号列表

<div className='gpio_style'>

|品牌|型号|容量|额定电压电流|测试环境|兼容性|读写速率|备注|
|-|-|-|-|-|-|-|-|
|Samsung          |980 EVO            |512GB|3.3V/1.9A|Radxa Debian 11|YES|Read:1.0 GB/s   Write:991 MB/s||
|Samsung          |Pm9a1<br/>(mzvl2256hchq)|256g |3.3V/2.8A|Armbian        |YES|read:3789iops write:2488iops 4k_rand_write:421kiops 4k_rand_read:460kiops||
|Samsung          |970 evo plus       |1TB  |3.3V/1.9A|Radxa Debian 11|YES|||
|Samsung          |pm983a             |1TB  |3.3V/3.9A||NO|||
|Kingston         |OM8PDP3256B-A01       |256G|3.3V/1A|Radxa Debian 11|YES|||
|Kingston         |A2000 (SA2000M8/1000G)|1TB |3.3V/3A|Ubuntu 20.04 Radxa/Armbian|YES|Read:980 MB/s  Write:888 MB/s||
|Intel            |optane M10 |32g|DC+3.3V - 1.2A|Ubuntu 20.04 Radxa|YES|||
|Intel            |Optane M10 |16G|3.3v 1.2A|Ubuntu server radxa|YES|||
|Intel            |optane h10 |16+256G|DC+3.3V - 2.5A|Radxa Debian 11|YES|seq1m q8t1 Read:910M/s Write: 170M/s <br/>rnd4k q8t1 Read:704M/s Write:164M/s，<br/>qlc SSD seq1m q8t1 873/456M，rnd4k q8t1 171/311M|Just 16G Recognized bases on default configuration, After PCIE Separated, The whole Capacity can be Recognized|
|影驰<br/>(Galaxy)|黑将Pro 250G|250G|3.3V1.8A|Radxa Debian 11|YES|Read：2.1G/s，Write 680M/s||
|西部数据(WD)     |sn730|512G|3.3v 2.8A|Radxa Debian 11|YES|Read: 1.4G/s，Write: 670M/s||
|致态<br/>(ZhiTai)|tiplus500|512G|3.3V 2.5A|Radxa Debian 11|YES|||
|致态<br/>(ZhiTai)|tiplus5000|2T|3.3V 2.5A|Radxa Debian 11|YES|Read:1.3G/s, Write: 745M/s||
|致态<br/>(ZhiTai)|TiPlus5000|2T|3.3V 2.5A|Armbian|YES|read:3031iops write:2699iops 4k_rand_write:381kiops 4k_rand_read:154kiops||
|致态<br/>(ZhiTai)|TiPlus7100|1T|3.3V 2.5A|Radxa Debian 11|YES|Read: 2.9 GB/s,Write: 2.2 GB/s||
|Acer             |Acer VT500M M.2 NVME 256G|256G||Armbian,Ubuntu	|NO|||
|FORESEE          |XP1000F001T|1T|||YES|Read:2.0 GB/s ,Write: 2.0 GB/s||

</div>
