import { useState } from "react";


function Colorpick(){

    let [color, setColor] = useState("#ffffff")

    let handleco=(e)=>{
        setColor(e.target.value)
    }
    return(
        <>
        <h1>color picker</h1>
        <div className="coo" style={{backgroundColor:color
        }}>

        </div>
        <p>selected color:{color}</p>
        <p>Pick the color:<input type="color" value={color} onChange={(e)=>handleco(e)}></input></p>
        </>
    )
}

export default Colorpick;