# electron sandbox

This is clone of [react-typescript-electron-sample-with-create-react-app-and-electron-builder](https://github.com/yhirose/react-typescript-electron-sample-with-create-react-app-and-electron-builder)

```bash
npm install
# Run the app
npm start
```

## Re-compile automatically

```bash
npm run watch
```

## Information
### Electron consists of 3 main pillars
- Chromium
- Node.js
- Custom APIs(OS native functions)

### Main and Renderer Process
- Main creates web pages by creating `BrowserWindow` instances. When `BrowserWindow` is destroyed, renderer process gets terminated.
- Main manages all web pages and renderers
- Renderer manages only the corresponding web page.
- Renderer communicates with Main via IPC(Inter-Process Communication) to perform GUI operations in web page.
  - `ipcMain` and `ipcRenderer`
  - Renderer may run untrusted code!

## 参考
- [Electron API Demos](http://electron.atom.io/#get-started)
