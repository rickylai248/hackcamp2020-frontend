import logo from "./HappyHippo.svg";
import "./App.css";

import Box from "./Box";
import Button from "./Button";

function App() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />;
      <Box />
      <Button />
    </>
  );
}

export default App;
