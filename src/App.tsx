import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const electron = window.require('electron');

const App: React.FC = () => {
  const [state, setState] = useState('');
  const onClickHandler = () => {
    electron.ipcRenderer.send('notifyText', state);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Electron Sandbox</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" value={state} onChange={e => setState(e.target.value)} />
        <button onClick={onClickHandler}>save</button>
      </header>
    </div>
  );
}

export default App;
