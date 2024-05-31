import React from "react";

//STYLES
import './box.css';


//BOX
const Box = () => {
    return (
        <div className="box-component">
            <div role="button" aria-disabled="false" className="button-overlay">
                <div className="box-top">
                    <div className="img-frame">
                        <div>
                            <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e028ecc33f195df6aa257c39eaa" alt="" className="box-image"/>
                        </div>
                    </div>
                    <div className="play-anim-button">
                        <div>
                            <button aria-label="Reproducir" className="btn-general box-button">
                                <span className="box-btn-inner">
                                    <span className="box-icon-wrapper" aria-hidden="true">
                                        <svg
                                            role="img"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            class="icon icon-24">
                                            <path
                                                d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
                                            </path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="box-bottom">
                    <div className="box-interaction-area">
                        <a href="#" draggable="false" className="box-link">
                            <p className="box-title">
                                <span className="box-title-text">THE TORTURED POETS DEPARTMENT: THE ANTOLOGY</span>
                            </p>
                        </a>
                        <div className="box-subtitle">
                            <a href="#" draggable="false" className="box-sublink">Taylor Swift</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Box;