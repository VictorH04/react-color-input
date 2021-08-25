import "../SASS/base/_Square.scss";

const ColoredSquare = ({ colorValue, hexValue, isDarkText }) => {
  const myStyle = {
    backgroundColor: colorValue,
    color: isDarkText ? "#000" : "#fff"
  };

  return (
    <div className="coloredSquare" style={myStyle}>
      <p className="coloredSquare-text">
        {colorValue ? colorValue : "Please input color value"}
      </p>
      <p className="coloredSquare-text2">{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColoredSquare;
