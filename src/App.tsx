import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Electron Sandbox</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" />
      </header>
    </div>
  );
}

export default App;
