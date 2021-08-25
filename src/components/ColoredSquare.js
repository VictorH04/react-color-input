import "../SASS/base/_Square.scss";

const ColoredSquare = ({colorValue}) => {
    const myStyle = {
        backgroundColor: colorValue
    }

    const myStyle2 = {
        backgroundColor: "none"
    }

    return (
        <>
        {
        colorValue.length ? 
        ( 
        <div className="coloredSquare" style={myStyle}>
            <p className="coloredSquare-text">{colorValue}</p>
        </div> 
        ) : ( <div className="coloredSquare" style={myStyle2}>
                <p className="coloredSquare-text2">Please input a color name</p>
            </div>
            )
        }
        </>
    )
}

export default ColoredSquare;
