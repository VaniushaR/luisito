import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import Page1 from './Components/page1';
import Page2 from './Components/page2';
import Page3 from './Components/page3';
import 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>LUISITO APP</h1>
          <nav>
            <Link to="/">
              <a>HOME |</a>
            </Link>

            <Link to="/page1">
              <a>PAGINA 1 |</a>
            </Link>

            <Link to="/page2">
              <a>PAGINA 2 |</a>
            </Link>

            <Link to="/page3">
              <a>PAGINA 3 |</a>
            </Link>
          </nav>
        </header>

        <Switch>
          <Route path="/" render={props => <Home />} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
