const { app, BrowserWindow, Menu, MenuItem, powerSaveBlocker } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        title: 'TouchTube',
        icon: path.join(__dirname, 'icon.png'),
        width: 1280,
        height: 800,
        resizable: false,
        frame: false,
    });
    win.loadURL('https://www.youtube.com/tv/', {
        userAgent: 'Mozilla/5.0 (PS4; Leanback Shell) Gecko/20100101 Firefox/65.0 LeanbackShell/01.00.01.75 Sony PS4/ (PS4, , no, CH)',
    });

    const menu = new Menu();
    menu.append(
        new MenuItem({
            label: 'Quit',
            accelerator: 'Ctrl+Q',
            click: () => app.quit(),
        })
    );
    win.setMenu(menu);
    const powerSaveBlockerId = powerSaveBlocker.start('prevent-display-sleep');
    win.on('closed', () => {
        win = null;
        powerSaveBlocker.stop(powerSaveBlockerId);
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
