import React from "react";

//STYLES
import './footer.css';


//FOOTER
const Footer = () => {
    return (
        <footer>
            <div className="signup-bar">
                <div className="text-wrapper">
                    <p className="text text-body-large-bold">Registrate para acceder a música y podcasts ilimitados.</p>
                </div>
                <button className="signup-button">
                    <span className=" text text-body-large-bold button-span">Registrate gratis</span>
                </button>
            </div>
            <div className="now-playing"></div>
        </footer>
    )
};

export default Footer;
