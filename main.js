const {app, BrowserWindow} = require('electron')
const {ipcMain} = require('electron')
require('electron-reload')(__dirname)


app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    frame: false,
    width: 700,
    height: 600,
    resizable: false,
    useContentSize:true,
    icon : './assets/appIcon.png'})
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.openDevTools()


  ipcMain.on('show-popup',function(){
    var popup = new BrowserWindow({
      frame: false,
      width:400,
      height:160,
      resizable: false,
    });
    popup.loadURL('file://'+__dirname+'/popups/installing.html');
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
