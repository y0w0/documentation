---
sidebar_label: 'apt'
sidebar_position: 20
---

# Radxa APT

Radxa APT is a Debian package repository maintained by Radxa,providing packages related to ROCK products maintained by Radxa and binary packages provided by Rockchip.

Currently Radxa APT supports Debian Stretch,Debian Buster and Ubuntu Bionic,each distribution has beta and stable repositories,please choose one of the following.
```bash
export DISTRO=bionic-stable
export DISTRO=bionic-testing      # update more frequently but maybe unstable

export DISTRO=focal-stable
export DISTRO=focal-testing      # update more frequently but maybe unstable

export DISTRO=stretch-stable
export DISTRO=stretch-testing      # update more frequently but maybe unstable

export DISTRO=buster-stable
export DISTRO=buster-testing      # update more frequently but maybe unstable

export DISTRO=bullseye-stable
export DISTRO=bullseye-testing      # update more frequently but maybe unstable
```

Add Radxa APT

```bash
echo "deb http://apt.radxa.com/$DISTRO/ ${DISTRO%-*} main" | sudo tee -a /etc/apt/sources.list.d/apt-radxa-com.list
```

### For Chinese users

Replace http://apt.radxa.com with https://radxa-apt.aghost.cn or http://apt.chenjaly.cn .

radxa-apt.aghost.cn and http://apt.chenjaly.cn is a personal mirror site for apt.radxa.com,with only 5mbps bandwidth,and does not make any guarantees for availability and update timeliness,only guarantees that the content of the provided package is consistent with the official one.

By aghost< ggg17226@gmail.com > and chenjaly< 2540735020@qq.com >

Public key

```bash
wget -O - apt.radxa.com/$DISTRO/public.key | sudo apt-key add -
```

Update

```bash
sudo apt update
sudo apt upgrade
```
