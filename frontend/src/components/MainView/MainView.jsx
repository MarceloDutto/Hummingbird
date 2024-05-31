import React from "react";


//STYLES
import './mainView.css';


//COMPONENTS
import MainHeader from "../MainHeader/MainHeader";


//MAIN VIEW
const MainView = () => {
    return (
        <div id="main-view" >
            <MainHeader />
            <div className="main-view-container">
                <div className="scrollbars-overlay">
                    <div className="viewport">
                        <div className="main-view-viewport-spacer"></div>
                        <div className="main-view-viewport-container">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainView;