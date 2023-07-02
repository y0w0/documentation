---
sidebar_label: '软件源'
sidebar_position: 20
---

# Radxa APT

Radxa APT 是 Radxa 维护的 Debian 软件包库，提供 Radxa 维护的 ROCK 产品相关的软件包和 Rockchip 提供的二进制软件包。

目前 Radxa APT 支持 Debian Bookworm、Debian Bullseye、Debian Buster、Ubuntu Jammy 和 Ubuntu Focal，每个发行版都有测试版和稳定版软件库，请选择以下其中一个。
```bash
export DISTRO=bookworm
export DISTRO=bookworm-test      # update more frequently but maybe unstable

export DISTRO=bullseye
export DISTRO=bullseye-test      # update more frequently but maybe unstable

export DISTRO=buster
export DISTRO=buster-test      # update more frequently but maybe unstable

export DISTRO=jammy
export DISTRO=jammy-test      # update more frequently but maybe unstable

export DISTRO=focal
export DISTRO=focal-test      # update more frequently but maybe unstable
```

添加 Radxa APT

```bash
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/$DISTRO/ $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/radxa.list
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/$DISTRO/ rockchip-$DISTRO main" | sudo tee -a /etc/apt/sources.list.d/radxa-rockchip.list
```

### 对于中国用户

将 https://radxa-repo.github.io 替换为 https://radxa-apt.aghost.cn 或者 http://apt.chenjaly.cn 使用。

radxa-apt.aghost.cn 与 apt.chenjaly.cn 为个人对 apt.radxa.com 做的镜像站，仅有 5mbps 带宽，并且不对可用性以及更新及时性做任何保证，仅保证提供的包的内容与官方一致。

By aghost< ggg17226@gmail.com > and chenjaly< 2540735020@qq.com >

公匙

```bash
wget https://radxa-repo.github.io/$DISTRO/pubkey.gpg
sudo gpg -o /usr/share/keyrings/radxa-archive-keyring.gpg --dearmor ./pubkey.gpg
```

更新

```bash
sudo apt update
sudo apt upgrade
```
