import "../SASS/base/_Square.scss";

const ColoredSquare = ({colorValue}) => {
    const myStyle = {
        backgroundColor: colorValue
    }

    const myStyle2 = {
        backgroundColor: "none"
    }

    return (
        <div className="coloredSquare" style={myStyle}>
            <p className="coloredSquare-text">{colorValue ? colorValue : "Please input color value"}</p>
        </div>    
    )
}

export default ColoredSquare;
