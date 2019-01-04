const {app, Tray} = require('electron')
const electron = require('electron')
const notifier = require('node-notifier');

let tray = null

app.on('ready', () => {
  tray = new Tray('./favicon.ico')
  tray.setToolTip('Double click to close the application.')
  tray.on('double-click', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  electron.powerMonitor.on('on-battery', () => {
    notifier.notify({
      title: 'On battery',
      message: 'Plug in fast PARAM'
    });
  });
})