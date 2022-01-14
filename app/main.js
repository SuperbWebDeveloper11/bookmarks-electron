const electron = require("electron");
const { app, BrowserWindow } = electron;

let mainWindow = null; // #A

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    // change nodeIntegration to true
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`); // #A
});
