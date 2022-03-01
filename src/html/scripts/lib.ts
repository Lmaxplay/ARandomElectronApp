const isElectron: boolean = navigator.userAgent.indexOf("Electron") != -1;
const content = document.getElementById("content");
const titlebar = document.getElementById("titlebar")

function setTitle(title: string) {
    if (isElectron) {
        document.getElementById("title").innerHTML = title;
    }
    document.getElementById("window-title").innerHTML = title;
}

function setIcon(iconpath: string) {
    const path = require("path");
    if (isElectron) {
        document.getElementById("icon").setAttribute("src", path.join(iconpath, ""));
    }

    document.getElementById("browser-icon").setAttribute("href", path.join(iconpath, ""));
}

function minimize() {
    require("electron").ipcRenderer.send('minimize');
}

function maximize() {
    require("electron").ipcRenderer.send('maximize');
}

async function maximizeswitch() {
    if(!await isMaximized()) {
        require("electron").ipcRenderer.send('maximize');
    } else {
        require("electron").ipcRenderer.send('restore');
    }
}

function restore() {
    require("electron").ipcRenderer.send('restore');
}

function unmaximize() {
    require("electron").ipcRenderer.send('restore');
}

function hideMenubar() {
    require("electron").ipcRenderer.send('hideMenubar');
}

function showMenubar() {
    require("electron").ipcRenderer.send('showMenubar');
}

function isMaximized(): Promise<boolean> {
    return require('electron').ipcRenderer.invoke("maximized");
}
