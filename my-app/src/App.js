import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, LoginPage } from "./Pages";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <LoginPage />}></Route>
      <Route exact path="/home" render={() => <HomePage />}></Route>
    </Switch>
  );
}

export default App;

// 6369f30dc672e06fc293aceafd86d8d6
// https://api.themoviedb.org/3/movie/550?api_key=6369f30dc672e06fc293aceafd86d8d6
