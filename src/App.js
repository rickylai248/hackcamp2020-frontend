import logo from "./logo.svg";
import "./App.css";

import BuildingBlock from "./BuildingBlock";

function App() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />;
      <BuildingBlock />
    </>
  );
}

export default App;
