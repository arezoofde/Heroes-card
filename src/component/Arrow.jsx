import React from "react";

export default function Arrow() {
    return(
        <div className="arrow-wrapper">
                <div className="round">
                    <div id="cta">
                        <span className="arrow {direction}" onClick={handelClick}></span>
                    </div>
                </div>
            </div>
    )
}