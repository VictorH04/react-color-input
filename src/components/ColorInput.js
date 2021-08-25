import "../SASS/base/_ColorInput.scss";

const ColorInput = ({ colorValue, setColorValue, handleSubmit }) => {
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
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default ColorInput;
