import React from "react";


//STYLES
import './notFound.css';


//COMPONENTS
import Logo from "../../components/Logo/Logo";


const NotFound = () => {
    return (
        <div className="NF-wrapper">
            <div className="NF-icon">
                <Logo width={60} height={60} />
            </div>
            <div className="NF-content">
                <h1 className="NF-content-title">No se encontró la página</h1>
                <p className="NF-content-subtitle">No podemos encontrar la página que buscás</p>
                <div>
                    <a href="/" className="text text-body-large-bold NF-home-button">Inicio</a>
                </div>
            </div>
        </div>
    )
};

export default NotFound;