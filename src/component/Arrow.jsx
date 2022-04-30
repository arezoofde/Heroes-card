import React from "react";

export default function Arrow(props) {
    return(
        <div className="arrow-wrapper">
                <div className="round">
                    <div id="cta">
                        <span className={`arrow ${props.direction}`} onClick={props.handelClick}></span>
                    </div>
                </div>
            </div>
    )
}