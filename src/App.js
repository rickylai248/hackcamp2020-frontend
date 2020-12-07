import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import GoodVibes from "./GoodVibes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/goodVibes" component={GoodVibes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
