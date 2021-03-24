import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('rpc', {
  test: (msg: string) => {
    ipcRenderer.invoke('test', msg);
  }
})
