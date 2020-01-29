import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.scss';
import Homepage from './pages/homepage/homepage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
