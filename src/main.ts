import { app, BrowserWindow, NativeImage } from "electron";
import * as path from "path";
import * as process from "node:process";

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = "true";

function createWindow(filepath: string): BrowserWindow {
    const newWindow = new BrowserWindow({
        height: 600,
        width: 800,
        frame: false,
        icon: path.join(__dirname, "./html/Lmaxplayface.png"),
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
    const mainWindow = createWindow("./html/index.html");
    mainWindow.webContents.openDevTools();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
