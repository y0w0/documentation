---
sidebar_label: 'apt'
sidebar_position: 20
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Radxa APT

Radxa APT is a Debian package repository maintained by Radxa,providing packages related to ROCK products maintained by Radxa and binary packages provided by Rockchip.

Currently Radxa APT supports Debian Bookworm,Debian Bullseye,Debian Buster,Ubuntu Jammy and Ubuntu Focal,each distribution has beta and stable repositories,please choose one of the following.
<Tabs>
  <TabItem value="bookworm" label="bookworm" default>
    ```bash
    export DISTRO=bookworm
    export DISTRO=bookworm-test      # update more frequently but maybe unstable
    ```
  </TabItem>
  <TabItem value="bullseye" label="bullseye">
    ```bash
    export DISTRO=bullseye
    export DISTRO=bullseye-test      # update more frequently but maybe unstable
    ```
  </TabItem>
  <TabItem value="buster" label="buster">
    ```bash
    export DISTRO=buster
    export DISTRO=buster-test      # update more frequently but maybe unstable
    ```
  </TabItem>
  <TabItem value="jammy" label="jammy">
    ```bash
    export DISTRO=jammy
    export DISTRO=jammy-test      # update more frequently but maybe unstable
    ```
  </TabItem>
  <TabItem value="focal" label="focal">
    ```bash
    export DISTRO=focal
    export DISTRO=focal-test      # update more frequently but maybe unstable
    ```
  </TabItem>
</Tabs>
Add Radxa APT

```bash
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/$DISTRO/ $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/radxa.list
echo "deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/$DISTRO/ rockchip-$DISTRO main" | sudo tee -a /etc/apt/sources.list.d/radxa-rockchip.list
```

### For Chinese users

Replace https://radxa-repo.github.io with https://radxa-apt.aghost.cn or http://apt.chenjaly.cn .

radxa-apt.aghost.cn and apt.chenjaly.cn is a personal mirror site for radxa-repo.github.io,with only 5mbps bandwidth,and does not make any guarantees for availability and update timeliness,only guarantees that the content of the provided package is consistent with the official one.

By aghost< ggg17226@gmail.com > and chenjaly< 2540735020@qq.com >

Public key

```bash
wget https://radxa-repo.github.io/$DISTRO/pubkey.gpg
sudo gpg -o /usr/share/keyrings/radxa-archive-keyring.gpg --dearmor ./pubkey.gpg
```

Update

```bash
sudo apt update
sudo apt upgrade
```
