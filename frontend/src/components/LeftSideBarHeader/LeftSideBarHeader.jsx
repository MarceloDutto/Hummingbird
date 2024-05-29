import React from "react";

//STYLES
import './leftSideBarHeader.css';


// LEFT SIDE BAR HEADER
const LeftSideBarHeader = () => {
    return (
        <header className="left-side-bar-header">
            <div className="header-div">
                <div className="div-button">
                    <button className="btn-general library-button" aria-label="Comprimir tu biblioteca">
                        <span aria-hidden="true" className="icon-wrapper-1">
                            <svg
                                role="img"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="icon icon-24">
                                <path
                                    d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
                                </path>
                            </svg>
                        </span>
                        <span className="lsf-text-wrapper">
                            Tu biblioteca
                        </span>
                    </button>
                </div>
                <span className="span-button">
                    <button className="btn-general icon-button" aria-label="Crear una playlist o una carpeta">
                        <span aria-hidden="true" className="icon-wrapper-2">
                            <svg 
                                role="img"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                className="icon icon-16">
                                <path
                                    d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </span>
            </div>
        </header>
    )
};

export default LeftSideBarHeader;