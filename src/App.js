import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Component/Home/Home';
import NotMatched from './Component/NotMatched/NotMatched';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatched />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
