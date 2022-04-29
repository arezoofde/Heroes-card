import React, { useEffect, useState } from "react"
import Arrow from "./Arrow"
import Card from "./Card"

export default function Slider() {
    const [heroes, setheroes] = useState([]);
    const [courser, setcourser] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/herose')
            .then(Response => Response.json())
            .then(heroes => setheroes(heroes))
    }, [])
    function handelNext() {
        const count = courser + 1 < heroes.length ? courser + 1 : 0;
        setcourser(courser);
    }
    function handelPrev() {
        const count = courser + 1 < 0 ? (heroes.length - 1) : courser + 1;
        setcourser(courser);
    }
    return (
        <div className="slide-container">
            <div className="wrapper">
               {!heroes.length?
            <div>Loading .....</div>
            :
            <>
            <Arrow handelClick={handelPrev} />
            <Card hero={heroes[courser]} />
            <Arrow handelClick={handelNext} />
            </>   
            }
            </div>
        </div>


    )

}