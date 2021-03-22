import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';
import { Home } from './pages/Home';
import { Counter } from './pages/Counter';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { TTheme } from './theme';
import { IPC } from './pages/IPC';

const listStyle = css`
  display: flex;
  list-style: none;
  li:not(:first-child) {
    margin-left: 10px;
  }
`

const Routing = () => {
  // asはアヤシイ
  const theme = useTheme() as TTheme;
  const linkStyle = css`
    color: ${theme.colors.primary};
    text-decoration: none;
  `
  return <Router>
    <nav>
      <ul className={listStyle}>
        <li><Link className={linkStyle} to="/">Home</Link></li>
        <li><Link className={linkStyle} to="/counter">Counter</Link></li>
        <li><Link className={linkStyle} to="/ipc">IPC</Link></li>
      </ul>
    </nav>
    <Switch>
      {/* exact無いとHomeのまま */}
      {/* Switch無いとHomeが表示されたまま */}
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/counter">
        <Counter></Counter>
      </Route>
      {/* node modulesを読み込もうとして死ぬ */}
      {/* <Route path="/ipc"><IPC></IPC></Route> */}
    </Switch>
  </Router>
}
export default Routing;
