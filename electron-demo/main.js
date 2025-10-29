// app will manage the lifecycle of the application
// BrowserWindow will create and manage application windows
const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Loading content inside the window
    //win.loadURL('http://www.google.com');

    //win.webContents.openDevTools();
    win.loadFile('index.html');

}
// application Event : when ready()

app.whenReady().then(createWindow);

app.on('window-all-closed' , () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});