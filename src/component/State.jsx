import React from "react";

export default function State(props) {
    return(
        <div className="one-third">
            <div className="stat">{props.state}</div>
            <div className="stat-value">{props.value}</div>
        </div>
    )
}