import { useState } from "react";

function Change(){

    let [name ,setName] = useState("");
    let [gmail, setGmail] = useState("");
    let [place, setPlace] = useState("");
    let [Payment, setPayment] = useState("");
    let [comment, setComment] = useState("");


    let handlen=(e)=>{
        setName(e.target.value);
    }

    let handleg=(e)=>{
        setGmail(e.target.value);
    }

    let handlep=(e)=>{
        setPlace(e.target.value);
    }

    let handler=(e)=>{
        setPayment(e.target.value);
    }

    let handlec=(e)=>{
        setComment(e.target.value);
    }


    return(
        <>
        <input value={name} onChange={(e)=>handlen(e)} placeholder="Enter your name"/>
        <p >Name:{name}</p>
        <input value={gmail} onChange={(e)=>handleg(e)} placeholder="Enter your gmail"/>
        <p>Gmail:{gmail}</p>
        <select value={place} onChange={(e)=>handlep(e)}>
            <option value="none">None</option>
            <option value="hyderabad">hyderabad</option>
            <option value="mumbai">mumbai</option>
            <option value="delhi">delhi</option>
        </select>
        <p>City:{place}</p>
        <label>
            <input type="radio" checked={Payment==="net banking"} onChange={(e)=>handler(e)} value="net banking"/>net banking<br/>
        </label>
        <label>
            <input type="radio"  checked={Payment==="cash on delivery"} onChange={(e)=>handler(e)} value="cash on delivery"/>cash on delivery<br/>
        </label>
        <label>
            <input type="radio" checked={Payment==="upi"} onChange={(e)=>handler(e)} value="upi"/>upi
        </label>
        <p>Payment type:{Payment}</p>
        <textarea value={comment} onChange={(e)=>handlec(e)} placeholder="your response"></textarea>
        <p>Comment:{comment}</p>
        </>
    )


}

export default Change;