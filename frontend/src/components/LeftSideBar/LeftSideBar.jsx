import React from "react";

// STYLES
import './leftSideBar.css';

// COMPONENTS
import LeftSideBarFooter from "../LeftSideBarFooter/LeftSideBarFooter";
import HummingbirdLink from "../SpotifyLink";


//LEFT SIDE BAR
const LeftSideBar = () => {
    return (
        <div id="leftSideBar">
            <nav className="navigation" aria-label="Principal">
                <div className="top-container">
                    <div className="header">
                        <a draggable="false" href="/" target="_blank" rel="noopener nofollow" className="title">
                            {<HummingbirdLink />}
                        </a>
                    </div>
                    <ul className="nav-list">
                        <li className="list-item">
                            <a draggable="false" aria-label="Inicio" aria-current="page" href="/" className="link-subtle nav-link">
                                <svg 
                                    data-encore-id="icon"
                                    role="img"
                                    aria-hidden="true"
                                    class=" icon icon-24"
                                    viewBox="0 0 24 24">
                                    <path 
                                        d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z">
                                    </path>
                                </svg>
                                <span className="text text-body-large-bold">Inicio</span>
                            </a>
                        </li>
                        <li className="list-item">
                            <a draggable="false" aria-label="Inicio" aria-current="page" href="/search" className="link-subtle nav-link">
                            <svg 
                                data-encore-id="icon"
                                role="img"
                                aria-hidden="true"
                                class="icon icon-24"
                                viewBox="0 0 24 24">
                                <path
                                    d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z">
                                </path>
                            </svg>
                                <span className="text text-body-large-bold">Buscar</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-container">
                    <div className="library" tabIndex="-1">
                        <div>
                            <header>
                                <div className="header-div">
                                    <div className="div-button">
                                        <button className="btn-general btn-global library-button" aria-label="Comprimir tu biblioteca">
                                            <span aria-hidden="true" className="icon-wrapper-1">
                                                <svg
                                                    data-encore-id="icon"
                                                    role="img"
                                                    aria-hidden="true"
                                                    viewBox="0 0 24 24"
                                                    class="icon icon-24">
                                                    <path
                                                        d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="text-wrapper">
                                                Tu biblioteca
                                            </span>
                                        </button>
                                    </div>
                                    <span className="span-button">
                                        <button className="btn-general icon-button btn-global" aria-label="Crear una playlist o una carpeta">
                                            <span aria-hidden="true" className="icon-wrapper-2">
                                                <svg
                                                    data-encore-id="icon" 
                                                    role="img"
                                                    aria-hidden="true"
                                                    viewBox="0 0 16 16"
                                                    class="icon icon-16">
                                                    <path
                                                        d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </button>
                                    </span>
                                </div>
                            </header>
                            <div></div>
                        </div>
                        <div className="content SEGUIR DESDE ACA"></div>
                    </div>
                    <LeftSideBarFooter />
                </div>
            </nav>
        </div>
    )
}

export default LeftSideBar;