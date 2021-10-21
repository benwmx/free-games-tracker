import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Games from './components/Games';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Games />
          </Route>
          <Route>
            <Details path="/details" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
