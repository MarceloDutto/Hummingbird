import React from "react";

import './mainContent.css';

import LeftSideBar from "../LeftSideBar/LeftSideBar";

const MainContent = () => {
    return (
        <div id="main">
            <div className="Root">
                <div className="wrapper">
                    <LeftSideBar />
                </div>
            </div>
        </div>
    )
}

export default MainContent;