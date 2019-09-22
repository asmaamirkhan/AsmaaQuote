/*
 author: Asmaa Mirkhan ~ 2019
*/
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import React from 'react';
import Main from './components/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
