import React from "react";

export default function Itemcard({type, children}) {
    return(
        <div className={type}>{children}</div>
    )
}