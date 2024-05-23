import React from "react";

// STYLE
import './libraryContent.css';

//IMPORTS
import { NOTCONTENTBANNERS } from "../../consts/Home/notcontentbanners.jsx";
import Banner1 from "../Banners/Banner1.jsx";

const LibraryContent = () => {
    return (
        <div className="library-content">
            <div className="container">
                {
                    NOTCONTENTBANNERS.map(banner => (
                        <Banner1 title={banner.title} subtitle={banner.subtitle} action={banner.action} key={banner.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default LibraryContent;