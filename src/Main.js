import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Result from "./Result";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/result" component={Result}></Route>
    </Switch>
  );
};

export default Main;
