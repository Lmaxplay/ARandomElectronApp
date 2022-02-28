"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
const process = __importStar(require("node:process"));
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = "true";
function createWindow(filepath) {
    const newWindow = new electron_1.BrowserWindow({
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
electron_1.app.on("ready", () => {
    const mainWindow = createWindow("./html/index.html");
    mainWindow.webContents.openDevTools();
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
