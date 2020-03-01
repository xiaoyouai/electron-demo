let send = document.querySelector('#send');
const { ipcRender } = require('electron');

send.onclick = function() {
    ipcRender.send('sengMsg', { name: 'aaa', age: 23 })
}