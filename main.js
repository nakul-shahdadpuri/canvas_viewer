const electron = require('electron')

const app = electron.app;
const Window = electron.BrowserWindow;


app.on("ready",() => {
    let win = new Window({
        width:600,
        height:600,
        minHeight:600,
        minWidth:600,
        maxHeight:600,
        maxWidth:600,
    });
    win.loadFile('index.html')
})