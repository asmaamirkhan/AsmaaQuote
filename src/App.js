/*
 author: Asmaa Mirkhan ~ 2019
*/
import { Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';

import React from 'react';
import Main from './components/Main';
import About from './components/About';
import Categories from './components/data/categories'; 
function App() {

  return (
          <Switch>
            {
              Categories.map((item, key) => {
                let path = '/'+item.title;
                return (
                  <Route exact path={path} component={Main} />
                )
              })
            }
          <Route exact path="/About" component={About} />
          <Route path="/" component={About} />

          </Switch>
  );
}

export default App;
