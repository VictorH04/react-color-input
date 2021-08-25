import "../SASS/base/_ColorInput.scss";
import colorNames from "colornames";

const ColorInput = ({
  colorValue,
  setColorValue,
  setHexValue,
  handleSubmit,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form className="colorInput" onSubmit={handleSubmit}>
      <input
        autoFocus
        id="addItem"
        className="colorInput--input"
        type="text"
        placeholder="Input color-name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        className="colorInput--btn"
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle text color
      </button>
    </form>
  );
};

export default ColorInput;
