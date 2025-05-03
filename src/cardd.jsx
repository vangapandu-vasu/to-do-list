import profilepic from "./pxfuel.jpg"
function Card(){
    return(
        <>
        <div className="bod">
            <img src={profilepic} alt="profile pic"></img>
            <h2>GAMING HUB</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </>
    );
};

export default Card;