import { useState } from "react";


function Arr(){

    let [fruits, setFruits] = useState(["mango", "apple", "banana", "pineapple"]);


    let handleadd=()=>{
        let fm=document.getElementById("idk").value;
        document.getElementById("idk").value="";
        setFruits(f=>([...f, fm]));

    }

    let handlerem=(index)=>{
        setFruits(fruits.filter((_, i)=>i!==index));
        
    }

    return(
        <>
            <h1>LIST OF FRUITS</h1>
            <ul>
                {fruits.map((fruit,index)=><li key={index} onClick={()=>handlerem(index)}>{fruit}</li>)}
            </ul>
            <input type="text" placeholder="enter fruit" id="idk"></input><button onClick={handleadd}>ADD</button>
            <p></p>
        </>
    );
}

export default Arr;