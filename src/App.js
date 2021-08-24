import "./SASS/base/_Home.scss";
import Header from "./components/Header";
import ColoredSquare from "./components/ColoredSquare";
import ColorInput from "./components/ColorInput";

import { useState } from "react";

function App() {
  // state
  const [colorValue, setColorValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Header headerText="Color input changer" />
      <ColoredSquare colorValue={colorValue} />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
