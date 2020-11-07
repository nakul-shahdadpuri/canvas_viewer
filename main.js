const electron = require('electron')

const app = electron.app;
const Window = electron.BrowserWindow;


app.on("ready",() => {
    let win = new Window();
    win.loadFile('index.html')
})