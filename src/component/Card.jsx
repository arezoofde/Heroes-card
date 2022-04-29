import React from "react";
import Imagecard from './Imagecard'
import UnitStet from "./UtiteStates";
import Itemcard from './Itemcard'
export default function Card({hero}) {
    return(
        <div className="clash-card barbarian">
                <Imagecard src={hero.src} name={hero.name}/>
                <Itemcard type="clash-card__level clash-card__level--barbarian">{hero.level}</Itemcard>
                <Itemcard type="clash-card__unit-name">The {hero.name}</Itemcard>
                <Itemcard type="clash-card__unit-description"> {hero.description}</Itemcard>
            
                <UnitStet unit={hero.unit} name={hero.name}/>

            </div> 
           
    )
}