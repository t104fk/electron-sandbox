import { app, BrowserWindow, Menu } from 'electron';
import { MenuItemConstructorOptions } from 'electron/main';
import { showMeowMessage } from './dialog';
const isWindows = process.platform === 'win32';

const setMainMenu = (mainWindow: BrowserWindow) => {
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'CustomMenu',
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Ctrl+Q' : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        }
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' }, //just adds a line visually
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' }
      ]
    },
    {
      label: 'Dialog',
      submenu: [
        {
          label: 'Say Hello',
          click() {
            showMeowMessage(mainWindow)
          }
        }
      ]
    },
  ]
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};
export default setMainMenu;
