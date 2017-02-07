'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const exec = require('child_process').exec;

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        "width": 1,
        "height": 1,
        "transparent": true,
        "frame": false,
        "resizable": false
    });

    mainWindow.loadURL("file://" + __dirname + "/index.html");

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    electron.powerMonitor.on('resume', () => {
        restartWifi();
    });

    restartWifi();
});

const restartWifi = () => {
    exec("networksetup -setairportpower en0 off", (err, stdout, stderr) => {
        exec("networksetup -setairportpower en0 on", (err, stdout, stderr) => {
            console.log("restart wifi");
        });
    });
};
