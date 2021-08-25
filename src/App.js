import "./SASS/base/_Home.scss";
import Header from "./components/Header";
import ColoredSquare from "./components/ColoredSquare";
import ColorInput from "./components/ColorInput";

import { useState } from "react";

function App() {
  // state
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Header headerText="Color input changer" />
      <ColoredSquare
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        handleSubmit={handleSubmit}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
