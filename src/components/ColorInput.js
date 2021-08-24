import "../SASS/base/_ColorInput.scss";

const ColorInput = () => {
  return (
    <form className="colorInput">
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Input color-name"
        required
      />
    </form>
  );
};

export default ColorInput;
