const { app, BrowserWindow } = require('electron');

function startElectronMainProcess() {
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
}

function createWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 750,
    icon: `${__dirname}/src/assets/logo/dirdem-micro-icon-app.ico`,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
  })
  win.loadFile('./dist/index.html');
  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
  win.removeMenu()
}


module.exports = startElectronMainProcess();
