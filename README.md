# Wifi Restart

Wifi Restart起動時、および、ディスプレイ復帰時（画面ロック解除時など）にwifiをリスタートするだけのアプリです。

## Installation

```
$ git clone https://github.com/h-tko/wifi_restart

$ electron-packager ./wifi_restart wifi_restart --platform=darwin,win32 --arch=x64 --electron-version=1.4.13 --overwrite
```

上記で生成されたwifi_restartアプリケーションを起動時アプリケーションとして設定してください。
