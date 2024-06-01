import React from "react";
import { Outlet } from "react-router-dom";


//STYLES
import './layout.css';

import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NowPlaying from "../NowPlaying/NowPlaying";


//LAYOUT
const Layout = () => {
    return (
        <div id="layout">
            <div className="Root">
                <div className="wrapper">
                    <LeftSideBar />
                    <Outlet />
                    <NowPlaying />
                </div>
            </div>
        </div>
    )
}

export default Layout;