import { useState } from "react";

// window.require is not a function at electron 12
// const electron = window.require('electron');
export const Home = () => {
  const [state, setState] = useState('');
  const onClickHandler = () => {
    // electron.ipcRenderer.send('notifyText', state);
    console.log('duplicated')
  }
  return <div>
    <input type="text" value={state} onChange={e => setState(e.target.value)} />
    <button onClick={onClickHandler}>save</button>
  </div>
}
