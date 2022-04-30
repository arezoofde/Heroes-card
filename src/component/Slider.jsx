import React, { useEffect, useState } from "react"
import Arrow from "./Arrow"
import Card from "./Card"
const axios = require('axios').default;

export default function Slider() {
    const [heroes, setHeroes] = useState([]);
    const [courser, setCourser] = useState(0);

    useEffect( () => {
        fetchMyAPI()
    }, [])

    async function fetchMyAPI() {
        let response = await fetch(`http://localhost:3001/heroes`)
        response = await response.json()
        setHeroes(response)
    }

    function handelNext() {
        const count = courser + 1 < heroes.length ? courser + 1 : 0;
        setCourser(count);
    }

    function handelPrev() {
        const count = courser + 1 < 0 ? (heroes.length - 1) : courser + 1;
        setCourser(count);
    }
    
    return (
        <div className="slide-container">
            <div className="wrapper">
               {
                heroes.length==0?
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