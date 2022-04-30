import React from "react";
import State from "./State";

export default function UnitStet(props) {
    const states = props.unit.map((unit)=>{
        <State state={unit.state} value={unit.value}/>
    })
    return(
        <div className={`clash-card__unit-stats clash-card__unit-stats--${props.name} clearfix`}>
            {states}
        </div>

    )
}