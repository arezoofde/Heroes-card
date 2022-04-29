import React from "react";
import Slider from "./component/Slider";
import './slide.css'

export default function App() {
  return(
    <Slider />
  )


  //tamrin 1 ----------------------------------------------------------------------------------------------------------
//   const [count, setcount] = useState(0);
//   const[step, setstep] = useState(1);
//   useEffect( () =>{
//       document.title = `you click in page:${count}`;
//     })

//   return (
//     <>
//       <p>you click {count} times</p>
//       <input value={step} type={"number"} onChange={(event)=>setstep(parseInt(event.target.value))}/>
//       <button onClick={() => setcount(count + step)}>enter click</button>
//     </>
//   )
 }