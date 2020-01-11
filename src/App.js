import React from "react";
import AsmaaQuoteMain from "./components/AsmaaQuoteMain";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "./components/media/categories";

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' component={()=><AsmaaQuoteMain/>} />
        {Categories.map((item, key) => {
          return <Route path={"/"+item.name} component={()=><AsmaaQuoteMain/>} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
