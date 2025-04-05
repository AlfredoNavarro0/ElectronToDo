const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('window-all-closed', () => {
    if (process.platform !== 'win32') app.quit()
  })
})