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

if(!isElectron) {
    // @ts-expect-error
    function require(): Object {
    }
}