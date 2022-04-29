import React from "react";
import State from "./State";

export default function UnitStet({unit,name}) {
    const states = unit.map(unit=>{
        <State state={unit.state} value={unit.value}/>
    })
    return(
        <div className="clash-card__unit-stats clash-card__unit-stats--${name} clearfix">
                  {states}

                </div>

    )
}