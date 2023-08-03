---
sidebar_label: 'Distribution Repositories'
---

# Distribution Repositories

RadxaOS currently offers two separate software repositories to fulfill development needs. All software repositories are hosted on [GitHub](https://github.com/radxa-repo).

One is the official repository, which is used to generate official release images, and has the same name as the upstream codename. The other is the test repository, which is used for development purposes and is named by appending the `-test` suffix to the upstream codename.

Currently, Radxa maintains the following branches of official repositories:

* `bullseye`: https://radxa-repo.github.io/bullseye
* `bookworm`: https://radxa-repo.github.io/bookworm
* `jammy`: https://radxa-repo.github.io/jammy

Currently, Radxa maintains the following branches of test repositories:

* `bullseye-test`: https://radxa-repo.github.io/bullseye-test
* `bookworm-test`: https://radxa-repo.github.io/bookworm-test
* `jammy-test`: https://radxa-repo.github.io/jammy-test

## Changing the repository

Generally speaking, the software in the test repositories has not been tested in detail by Radxa and may have serious problems. We do not recommend that normal users change the repositories of published images themselves; such software configurations are not supported by Radxa.

However, in some cases (e.g. test system upgrades), developers may need to switch to the test repository. Here's how to do it:

1. Edit the repository  
   The Radxa repository configuration files are stored in `/etc/apt/sources.list.d/`, and the filenames are prefixed with `radxa`.  
   Open **all the files listed above** using your preferred editor. For example, with nano:
   ```bash
   sudo nano /etc/apt/sources.list.d/radxa*.list
   ```
   You will see file contents similar to the following:
   ```bash
   deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/bookworm bookworm main
   ```
   You need to add the `-test` suffix to the second and third items of each of these lines:
   ```bash
   deb [signed-by=/usr/share/keyrings/radxa-archive-keyring.gpg] https://radxa-repo.github.io/bookworm-test bookworm-test main
   ```

:::caution
Every file listed in step 1 must be updated this way, otherwise the system is in an abnormal state!
:::

2. Update repository priority  
   The Radxa repository preference files are stored in `/etc/apt/preferences.d/` 内, and the filenames are prefixed with `radxa`.  

:::caution
Both repository preference and package preference are stored under the same path.  
Since there are packages with `radxa` prefix, please check the content of the file carefully befoe editing.
:::

   Open **all the files listed above** using your preferred editor. For example, with nano:
   ```bash
   sudo nano /etc/apt/preferences.d/radxa-*
   ```
   You will see file contents similar to the following:
   ```
   Package: *
   Pin: release a=rockchip-bookworm
   Pin-Priority: 1001
   ```
   You need to add the `-test` suffix to the codename mentioned in the `Pin` line:
   ```
   Package: *
   Pin: release a=rockchip-bookworm-test
   Pin-Priority: 1001
   ```

3. Update the system  
   After configuring the repositories you need to update the local software cache again:
   ```bash
   sudo apt update
   ```
   If you also wish to update the system to the latest test version, you will also need to execute the following command:
   ```bash
   sudo apt full-upgrade --allow-downgrades
   sudo apt full-upgrade --allow-downgrades # Run the 2nd time to upgrade version pinned packages
   sudo apt autoremove # Optionally, remove no longer needed packages
   ```
