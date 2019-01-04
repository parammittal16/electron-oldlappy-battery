// Modules to control application life and create native browser window
const {app, Menu, Tray} = require('electron')
const electron = require('electron')
const notifier = require('node-notifier');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
let tray = null

app.on('ready', () => {
  electron.powerMonitor.on('on-battery', () => {
    tray = new Tray('./favicon.ico')
    tray.setToolTip('Double click to close the application.')
    tray.on('double-click', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
    notifier.notify({
      title: 'On battery',
      message: 'Plug in fast PARAM'
    });
  });
})

// Quit when all windows are closed.

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
