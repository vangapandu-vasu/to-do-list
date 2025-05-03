import profilepic from "./pxfuel.jpg"


function eventt(){

    let n=1;

    const handleevent = (e)=>{
        if (n<=10){
            console.log("you have clicked");
            e.target.textContent="it's not exceed n chillup ";
            n++;
        }
        else {
            console.log("you have clicked more than you needed idiot");
            e.target.textContent="it's exceeded n value";
        }
    }


    
    return(
        <>
        <button onClick={(e)=>handleevent(e)}>Click me</button>
        <img onDoubleClick={(e)=>handleevent(e)}  id="yoo" src={profilepic} alt="profilepic"></img>
        </>
    );
}

export default eventt;