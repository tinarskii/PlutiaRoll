const { app, BrowserWindow } = require('electron');
const path = require('path');
const { shell } = require("electron");


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  shell.openPath("https://www.youtube.com/watch?v=XKLBMU6lWso");
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  shell.openPath("https://www.youtube.com/watch?v=XKLBMU6lWso");
  if (process.platform !== 'darwin') {
    shell.openPath("https://www.youtube.com/watch?v=XKLBMU6lWso");
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    shell.openPath("https://www.youtube.com/watch?v=XKLBMU6lWso");
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
