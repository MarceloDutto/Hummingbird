import React from "react";

import './banner1.css';


const Banner1 = ({title, subtitle, action}) => {
    return (
    <section className="banner1">
        <div className="bnn1-info">
            <span className="text text-body-large-bold">{title}</span>
            <span className="text text-body-medium">{subtitle}</span>
        </div>
        <div className="bnn1-action">
            <button className="btn-general btn-banner1">
                <span className="text text-body-medium-bold black">{action}</span>
            </button>
        </div>
    </section>
    )
}

export default Banner1;