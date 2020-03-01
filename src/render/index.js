const path = require('path');
const BrowserWindow = require('electron').remote.BrowserWindow;
const btn = document.querySelector('#btn');

btn.onclick = () => {
    win = new BrowserWindow({
        width: 300,
        height: 200,
        frame: false,
        fullscreen: true,
        transparent: true
    })

    win.loadURL(path.join('file:', _dirname, 'new.hmtl'));
    win.on('close', () => { win = null });
}