import { useState } from "react";

function Obk(){

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState();
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");

    let handleyear=(e)=>{
        setYear(e.target.value);

    };

    let handlemodel=(e)=>{
        setModel(e.target.value);
    };

    let handlebrand=(e)=>{
        setBrand(e.target.value);
    };

    let handleadd=(e)=>{
        let carr={  caryear:year,
                    carmodel:model,
                    carbrand:brand,
        };
        setCars(c=>([...c, carr]));

        setYear("");
        setModel("");
        setBrand("");
    };

    let handlerem=(index)=>{
        setCars(cars.filter((_,i)=>i!==index));
    };

    return(
        <>
            <h1>CARS</h1>
            <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>handlerem(index)}>{car.caryear} {car.carmodel} {car.caryear}</li>)}
            </ul>
            <input type="number" value={year} placeholder="enter year" onChange={handleyear}></input>
            <input type="text" value={model} placeholder="enter model" onChange={handlemodel}></input>
            <input type="text" value={brand} placeholder="enter brand" onChange={handlebrand}></input>
            <button onClick={handleadd}>ADD</button>
        </>

    );
};

export default Obk;