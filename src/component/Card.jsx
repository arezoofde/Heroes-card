import React from "react";
import Imagecard from './Imagecard'
import UnitStet from "./UtiteStates";
import Itemcard from './Itemcard'
export default function Card(props) {
    return(
        <div className="clash-card barbarian">
                <Imagecard src={props.src} name={props.name}/>
                <Itemcard type="clash-card__level clash-card__level--barbarian">{props.level}</Itemcard>
                <Itemcard type="clash-card__unit-name">The {props.name}</Itemcard>
                <Itemcard type="clash-card__unit-description"> {props.description}</Itemcard>
            
                <UnitStet unit={props.unit} name={props.name}/>

            </div> 
           
    )
}