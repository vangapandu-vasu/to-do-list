import { useState } from "react";

function Todol(){

    const [tasks, setTasks] = useState([]);
    const [newtask, setNewtask] = useState("");

    let handlenewt=(e)=>{
        setNewtask(e.target.value);
    }
    

    let handletask=()=>{
        if(newtask.trim()!==""){
            setTasks(t=>([...t, newtask]));
            setNewtask("");
        };
    };

    let handledel=(index)=>{
        let updatedt=setTasks(tasks.filter((_, i)=>i!==index));
        setNewtask(updatedt);
    }

    let handleup=(index)=>{
        if(index>0){
            let updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
            setTasks(updatedtasks);
        };
    }

    let handledown=(index)=>{
        if(index<tasks.length-1){
            let updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index+1]] = [updatedtasks[index+1],updatedtasks[index]];
            setTasks(updatedtasks);
        };
    }

    return(
        <>
            <h1 className="head">TO DO LIST</h1>
            <div className="ma">
            <ol className="main">
                {tasks.map((task,index)=><li className="tas" key={index}>
                    {task} 
                    <button className="del"onClick={()=>handledel(index)}>DELETE</button>
                    <button className="up" onClick={()=>handleup(index)}>👆</button>
                    <button className="up" onClick={()=>handledown(index)}>👇</button>
                </li>)}
            </ol>
            <input type="text" className="inu" value={newtask} onChange={(e)=>handlenewt(e)} placeholder="Enter your task"></input>
            <button className="add" onClick={(e)=>handletask(e)}>ADD</button>
            </div>
        </>
    );



};

export default Todol;