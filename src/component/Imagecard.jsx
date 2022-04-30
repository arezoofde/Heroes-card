import React from "react"
export default function Image(props){
    return(
        <div className={`clash-card__image clash-card__image--${props.name}`}>
            <img src={props.src} alt={props.name} />
        </div>
    )
}