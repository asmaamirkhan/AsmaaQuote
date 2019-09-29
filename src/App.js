/*
 author: Asmaa Mirkhan ~ 2019
*/
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import React from 'react';
import Main from './components/Main';
import Categories from './components/data/categories'; 
function App() {

  return (
      <BrowserRouter>
          <Switch>
            {
              Categories.map((item, key) => {
                let path = '/'+item.title;
                return (
                  <Route exact path={path} component={Main} />
                )
              })
            }
          
          <Route path="/" component={Main} />

          </Switch>
        </BrowserRouter>
  );
}

export default App;
