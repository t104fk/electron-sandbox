import { app, BrowserWindow, dialog } from "electron";
import * as path from 'path';
import * as fs from 'fs';
import { MessageBoxOptions } from "electron/main";

const showMessage = (options: MessageBoxOptions) => (win: BrowserWindow) => {
  dialog.showMessageBox(win, options)
}
export const showMeowMessage = (win: BrowserWindow) => showMessage({
  /**
   * Can be `"none"`, `"info"`, `"error"`, `"question"` or `"warning"`. On Windows,
   * `"question"` displays the same icon as `"info"`, unless you set an icon using
   * the `"icon"` option. On macOS, both `"warning"` and `"error"` display the same
   * warning icon.
   *
   * MessageBoxOptions.typeのdocをコピペ
   */
  type: 'info',
  message: 'Hello',
  detail: 'Just a friendly meow!',
  // デフォルトでは「OK」ボタンのみ
  buttons: ['Meow', 'Close'],
  defaultId: 1,
})(win)

export const showSaveDialog = (content: string) => async (win: BrowserWindow) => {
  const value = await dialog.showSaveDialog(win, {
    defaultPath: path.join(app.getPath('downloads'), 'input.txt'),
  })
  if (value.canceled || !value.filePath) {
    return;
  }
  fs.writeFile(value.filePath, JSON.stringify({content}), e => {
    e && showMessage({
      type: 'error',
      message: 'Failed to save file.'
    });
  })
}
