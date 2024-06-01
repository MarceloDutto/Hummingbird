import React from "react";


//STYLES
import './mainView.css';


//COMPONENTS
import MainHeader from "../MainHeader/MainHeader";


//MAIN VIEW
const MainView = ({ children }) => {
    return (
        <div id="main-view" >
            <MainHeader />
            <div className="main-view-container">
                <div className="scrollbars-overlay">
                    <div className="viewport">
                        <div className="main-view-viewport-spacer"></div>
                        <div className="main-view-viewport-container">
                            {children}             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainView;