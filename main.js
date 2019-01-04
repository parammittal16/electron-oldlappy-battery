const {app, Tray} = require('electron')
const electron = require('electron')
const notifier = require('node-notifier');

process.env.NODE_ENV = 'production';

let tray = null

app.on('ready', () => {
  tray = new Tray('./assets/icons/win/icon.ico')
  tray.setToolTip('Double click to close the application.')
  tray.on('double-click', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  electron.powerMonitor.on('on-battery', () => {
    notifier.notify({
      title: 'On battery',
      message: 'Plug in fast !!'
    });
  });
})