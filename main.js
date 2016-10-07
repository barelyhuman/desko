const {app, BrowserWindow} = require('electron')
require('electron-reload')(__dirname)
let win

function createWindow () {
  win = new BrowserWindow({frame: false,width: 700, height: 600,resizable: false,useContentSize:true})

  win.loadURL(`file://${__dirname}/index.html`)

win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
