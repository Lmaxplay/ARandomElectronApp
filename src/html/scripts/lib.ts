const isElectron: boolean = navigator.userAgent.indexOf("Electron") != -1;

function setTitle(title: string) {
    if (isElectron) {
        document.getElementById("title").innerHTML = title;
    }
    document.getElementById("window-title").innerHTML = title;
}

function minimize() {
    require("electron").ipcRenderer.send('minimize');
}

function maximize() {
    require("electron").ipcRenderer.send('maximize');
}

function isMaximized(): boolean {
    // @ts-expect-error
    return require("electron").ipcRenderer.invoke('maximized');
}

// void