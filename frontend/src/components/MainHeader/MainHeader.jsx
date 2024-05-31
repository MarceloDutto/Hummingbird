import React from "react";


//STYLES
import './mainHeader.css';
import NavigationButtons from "../NavigationButtons/NavigationButtons";


// MAIN HEADER
const MainHeader = () => {
    return (
        <header className="main-header" aria-label="Barra superior y menú del usuario">
            <div className="header-container"></div>
            <div className="signup-header">
                <NavigationButtons />
                <div className="sign-actions">
                    <div className="buttons">
                        <button className="btn-general signup-header-button">Registrate</button>
                        <button className="btn-general signin-header-button">
                            <span className="button-inner-text">Iniciar sesión</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default MainHeader;