/*
 author: Asmaa Mirkhan ~ 2019
*/
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import React from 'react';
import Main from './components/Main'
import PageContent from './components/PageContent'
function App() {
  return (
      <BrowserRouter>
          <Switch>
          <Route exact path="/Life" component={Main} />
          <Route exact path="/Motivation" component={Main} />
          <Route exact path="/MyQuotes" component={Main} />
          <Route path="/" component={Main} />

          </Switch>
        </BrowserRouter>
  );
}

export default App;
