import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (

    <div className='App'>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/team/:strTeam">
            <TeamDetail />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>


  );
}

export default App;
