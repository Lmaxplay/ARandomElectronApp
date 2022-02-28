import { app, BrowserWindow, NativeImage, ipcMain, ipcRenderer, IpcMainEvent } from "electron";
import * as path from "path";
import * as process from "node:process";

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = "true";

var mainWindow: BrowserWindow;

function createWindow(filepath: string, iconpath: string): BrowserWindow {
    const newWindow = new BrowserWindow({
        height: 600,
        width: 800,
        frame: false,
        icon: path.join(__dirname, iconpath),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    newWindow.loadFile(path.join(__dirname, filepath));

    newWindow.setMenuBarVisibility(false);

    return newWindow;
}

// app.enableSandbox();

app.on("ready", () => {
    mainWindow = createWindow("./html/index.html", "./html/images/Lmaxplayface.png");

    // mainWindow.webContents.openDevTools();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

ipcMain.on('minimize', () => {
    mainWindow.minimize();
})

ipcMain.on('maximize', () => {
    mainWindow.maximize();
})

ipcMain.on('restore', () => {
    mainWindow.restore();
})

ipcMain.handle('maximized', () => {
    return mainWindow.isMaximized();
})