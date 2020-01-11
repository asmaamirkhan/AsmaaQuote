import React from "react";
import AsmaaQuoteMain from "./components/AsmaaQuoteMain";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "./components/media/categories";

function App() {
  return (
    <Router>
      <Switch>
        {Categories.map((item, key) => {
          return (
            <Route
              path={"/" + item.name}
              component={() => <AsmaaQuoteMain category={item.name} />}
            />
          );
        })}
        
        <Route path="/" component={() => <AsmaaQuoteMain category='MyQuotes' />} />
      </Switch>
    </Router>
  );
}

export default App;
