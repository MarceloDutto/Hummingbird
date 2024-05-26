import React from "react";

import './mainContent.css';

import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NowPlaying from "../NowPlaying/NowPlaying";
import MainView from "../MainView/MainView";

const MainContent = () => {
    return (
        <div id="main">
            <div className="Root">
                <div className="wrapper">
                    <LeftSideBar />
                    <MainView />
                    <NowPlaying />
                </div>
            </div>
        </div>
    )
}

export default MainContent;