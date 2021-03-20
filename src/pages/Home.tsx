import { useState } from "react";

const electron = window.require('electron');
export const Home = () => {
  const [state, setState] = useState('');
  const onClickHandler = () => {
    electron.ipcRenderer.send('notifyText', state);
  }
  return <div>
    <input type="text" value={state} onChange={e => setState(e.target.value)} />
    <button onClick={onClickHandler}>save</button>
  </div>
}
