import { ipcRenderer } from 'electron';

export const IPC = () => {
  const handleCreateWindow = () => {
    ipcRenderer.send('createWindow', {})
  }
  return <div>
    <button onClick={handleCreateWindow}></button>
  </div>
}
