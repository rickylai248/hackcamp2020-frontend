import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import HomePage from "./HomePage";
import GoodVibes from "./GoodVibes";

import "./App.css";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/goodVibes" component={GoodVibes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
