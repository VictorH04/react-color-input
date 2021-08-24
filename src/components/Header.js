import "../SASS/base/_Header.scss";

const Header = ({headerText}) => {
    return (
        <header className="header-container">
            <p className="header-container--text">{headerText}</p>
        </header>
    )
}

export default Header
