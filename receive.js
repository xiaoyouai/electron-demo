const { ipcMain } = require('electron')

ipcMain.on('sendMsg', (event, data) => {
    console.log("data", data);
    console.log("event", event);
})