import React from "react";

export default function Itemcard(props) {
    return(
        <div className={props.type}>{props.children}</div>
    )
}