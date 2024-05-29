import React from "react";

//STYLES
import './mainViewFooter.css';
import FacebookIcon from "../Social/FacebookIcon";
import InstagramIcon from "../Social/InstagramIcon";
import TwitterIcon from "../Social/TwitterIcon";


//CUSTOM IMPORTS
import { FOOTERLINKS } from "../../consts/footerLinks";
import LinkContainer from "../LinkContainer/LinkContainer";


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
                            <LinkContainer icon={social.icon} url={social.url} text={social.text} key={social.id}/>
                        ))
                    }
                </div>
            </div>
            <hr className="ft-line" />
            <div className="mv-footer-bottomsection">
                <div className="copyright-notice">
                    <div className="copyright-text">
                        <p className="text-body-medium copyright">&copy; {new Date().getFullYear()} Marcelo Dutto</p>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default MainViewFooter;
