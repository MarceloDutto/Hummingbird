import React from "react";

import './mainContent.css';

import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NowPlaying from "../NowPlaying/NowPlaying";

const MainContent = () => {
    return (
        <div id="main">
            <div className="Root">
                <div className="wrapper">
                    <LeftSideBar />
                    <main></main>
                    <NowPlaying />
                </div>
            </div>
        </div>
    )
}

export default MainContent;