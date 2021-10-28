import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Games from './components/Games';
import Details from './components/Details';
import About from './components/About';
import ScrollButton from './components/ScrollButton';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollButton />
        <Switch>
          <Route path="/" exact>
            <Games />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
