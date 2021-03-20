import React from 'react';
import logo from './logo.svg';
import Routing from './Routing';
import { css } from '@emotion/css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const header = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={css`text-align: center`}>
        <header className={header}>
          <img src={logo} className={css`height: 40vmin`} alt="logo" />
          <p>Electron Sandbox</p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Routing></Routing>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
