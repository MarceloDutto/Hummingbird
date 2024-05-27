import React from "react";

//STYLES
import './mainViewFooter.css';
import FacebookIcon from "../Social/FacebookIcon";
import InstagramIcon from "../Social/InstagramIcon";
import TwitterIcon from "../Social/TwitterIcon";


//CUSTOM IMPORTS
import { FOOTERLINKS } from "../../consts/footerLinks";


//MAIN VIEW FOOTER
const MainViewFooter = () => {
    return (
        <nav className="mv-footer">
            <div className="mv-footer-topsection">
                <div className="top-description">
                    <p className="text-body-large">Hummingbird es un proyecto personal, creado por Marcelo Dutto, que brinda acceso al catálogo y datos almacenados por Spotify a través de su propia API. Este proyecto es sin fines de lucro y no pretende infringir ninguna ley de copyright, siendo únicamente un ejercicio educativo y de aprendizaje.</p>
                </div>
                <div className="top-socials">
                    {
                        FOOTERLINKS.map(social => (
                            <a href={social.url} draggable="false" target="_blank" rel="noopener" className="ft-link" key={social.id}>
                                {social.icon}
                                {social.text}
                            </a>
                        ))
                    }
                </div>
            </div>
            <hr className="ft-line" />
            <div className="mv-footer-bottomsection">
                <div className="copyright-notice">
                    <div className="copyright-text">
                        <p className="text-body-medium copyright">© 2024 Marcelo Dutto</p>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default MainViewFooter;
