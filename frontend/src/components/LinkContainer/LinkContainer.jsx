import React from "react";

import './linkContainer.css';

const LinkContainer = ({ icon, url, text }) => {
    return (
        <div className="link-container">
            <span aria-hidden="true" className="icon-wrapper" >
                {icon}
            </span>
            <a draggable="false" href={url} className="link" target="_blank" rel="noopener" aria-label={`Link a ${text} de Marcelo Dutto`} >
                <span className="link-text">
                    {text}
                </span>
            </a>
        </div>
    )
}

export default LinkContainer;