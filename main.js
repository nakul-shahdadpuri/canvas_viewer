const { ipcMain } = require('electron');
const electron = require('electron');
const fs = require('fs');
const {dialog} = electron;
const app = electron.app;
const Window = electron.BrowserWindow;
const {ipc} = electron;

let win;

app.on("ready",() => {
    win = new Window({
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
    let path = dialog.showSaveDialogSync(win,{defaultPath: "save.txt"});
    fs.writeFile(path,text,(err)=>{
        if(err){
            console.log("ERROR");
        }
        console.log("File saved.")
    })
});