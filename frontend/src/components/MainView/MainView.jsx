import React from "react";


//STYLES
import './mainView.css';

//COMPONENTS
import MainViewFooter from "../MainViewFooter/MainViewFooter";


//MAIN VIEW
const MainView = () => {
    return (
        <div id="main-view" >
            <header className="main-header" aria-label="Barra superior y menú del usuario">
                <div className="header-container"></div>
                <div className="signup-header">
                    <div className="arrows-container">
                        <button className="top-bar-button" aria-label="Volver">
                            <svg
                                role="img"
                                aria-hidden="true"
                                className="icon icon-16"
                                viewBox="0 0 16 16">
                                <path 
                                    d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z">
                                </path>
                            </svg>
                        </button>
                        <button className="top-bar-button" aria-label="Avanzar">
                            <svg
                                role="img"
                                aria-hidden="true"
                                className="icon icon-16"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div className="sign-actions">
                        <div className="buttons">
                            <button className="signup-header-button">Registrate</button>
                            <button className="signin-header-button">
                                <span className="button-inner-text">Iniciar sesión</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="main-view-container">
                <div className="scrollbars-overlay">
                    <div className="viewport">
                        <div className="main-view-viewport-spacer"></div>
                        <div className="main-view-viewport-container">
                            <main className="main-view-viewport-content">
                                <div className="gradient"></div>
                                /* AGREGAR COMPONENTE */
                                <div className="main-view-footer-container">
                                    <MainViewFooter />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainView;