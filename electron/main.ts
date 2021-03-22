import { app, ipcMain, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import setMainMenu from './mainMenu';
import { showSaveDialog } from './dialog';

let win: BrowserWindow | null = null;

function createWindow(options: BrowserWindowConstructorOptions) {
  win = new BrowserWindow(Object.assign({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  }, options))

  if (isDev) {
    win.loadURL('http://localhost:3000/index.html');
  } else {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  }

  win.on('closed', () => win = null);
  setMainMenu(win);

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }

  // if (isDev) {
  //   win.webContents.openDevTools();
  // }
}

// electron-developer-toolsで読み込めないので
// const reactDevToolsPath = path.join(
//   os.homedir(),
//   'workspace/electron-sandbox',
//   'react-developer-tools-4.10.1_0'
// )
// app.whenReady().then(async () => {
//   // installExtension(REACT_DEVELOPER_TOOLS)
//   //   .then((name) => console.log(`Added Extension:  ${name}`))
//   //   .catch((err) => console.log('An error occurred: ', err));
//   await session.defaultSession.loadExtension(reactDevToolsPath, { allowFileAccess: true })
// })

app.on('ready', () => {
  ipcMain.on('createWindow', (e, props) => {
    console.log('createWindow', e);
    createWindow(props)
  })
  createWindow({});
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow({});
  }
});

// ipcMain.on('notifyText', (_, args) => {
//   win && showSaveDialog(args)(win);
// })
