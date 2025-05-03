import { useState } from "react";

function Stating(){

let [name, setName] = useState("Intial");
let [count, setCount] = useState(0);

const increm=()=>{
    setCount(count+1);
    setName("Incremented")
}

const decrem=()=>{
    setCount(count-1);
    setName("Decremented")
}

const res=()=>{
    setCount(0);
    setName("reseted")
}


return(
    <>
        <h1>Counter</h1>
        <div className="dim"><h2>{count}</h2></div>
        <p>{name}</p>
        <button className="inc" onClick={increm}>Increment</button>
        <button className="inc" onClick={decrem}>Decrement</button>
        <button className="inc" onClick={res}>Reset</button>
    </>
    
);


}

export default Stating;
