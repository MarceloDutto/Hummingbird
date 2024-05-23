import React from "react";


//STYLES
import './leftSideBarFooter.css'


//CUSTOM IMPORTS
import { FOOTERLINKS } from "../../consts/footerLinks.jsx";
import LinkContainer from "../LinkContainer/LinkContainer";


// FOOTER
const LeftSideBarFooter = () => {
    return (
        <div className="left-sidebar-footer">
            <div className="footer-links">
                <strong className="text-body-large links-title">Hummingbird creado por <span className="highlight">Marcelo Dutto</span></strong>
                <hr className="line"/>
                <div className="links-list">
            	    {
                        FOOTERLINKS.map(link => (
                            <LinkContainer url={link.url} text={link.text} icon={link.icon} />
                        ))
                    }
                </div>
            </div>
            <div className="footer-language"></div>
        </div>
    )
}

export default LeftSideBarFooter;