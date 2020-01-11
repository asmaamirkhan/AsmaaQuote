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
              component={() => (
                <AsmaaQuoteMain category={item} selected={key} />
              )}
            />
          );
        })}

        <Route
          path="/About"
          component={() => (
            <AsmaaQuoteMain category={Categories[0]} selected={Categories.length+1} />
          )}
        />
        <Route
          path="/"
          component={() => <AsmaaQuoteMain category={Categories[0]} selected={0} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
