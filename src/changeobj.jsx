import { useState } from "react";

function Slam(){

    let [car, setCar] = useState({company:"",model:"",year:""});

    let handlecom=(e)=>{
        setCar(c=>({...c, company:e.target.value}));
    }

    let handlemo=(e)=>{
        setCar(c=>({...c, model:e.target.value}));
    }
    
    let handley=(e)=>{
        setCar(c=>({...c, year:e.target.value}));
    }
    return(
        <>
            <p>Your car is:{car.company} {car.model} {car.year}</p>
            <input type="text" value={car.company} onChange={handlecom} placeholder="company"/>
            <input type="text" value={car.model} onChange={handlemo} placeholder="model"/>
            <input type="number" value={car.year} onChange={handley} placeholder="year"/>
        </>
    );
}

export default Slam;