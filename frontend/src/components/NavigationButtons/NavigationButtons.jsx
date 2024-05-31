import React from "react";


//STYLES
import './navigationButtons.css';


//NAVIGATION BUTTONS

const NavigationButtons = () => {
    return (
        <div className="navigation-buttons">
            <button className="nav-button" aria-label="Volver">
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
            <button className="nav-button" aria-label="Avanzar">
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
    )
};

export default NavigationButtons;