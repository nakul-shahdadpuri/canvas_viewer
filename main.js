const { ipcMain } = require('electron');
const electron = require('electron');
const fs = require('fs');

const app = electron.app;
const Window = electron.BrowserWindow;
const {ipc} = electron;


app.on("ready",() => {
    let win = new Window({
        width:600,
        height:600,
        minHeight:600,
        minWidth:600,
        maxHeight:600,
        maxWidth:600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html')
})


//communication with renderer

ipcMain.on('save', (event,text)=> {
    fs.writeFile('test.txt',text,(err) => {
        if(err){
            console.log('ERROR',err);
        }
        console.log('File saved')
    });
})