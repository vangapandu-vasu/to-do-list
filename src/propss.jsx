
function info(props){
    
    info.propTypes={
        studentName : props.string,
        age : props.number,
        isstudent : props.bool,
        attendance : props.number,
    };

    info.propdefault={
        studentName:"guest",
        age:"",
        isstudent:"false",
        attendance:"",

    }
    
    
    return(
        <>
        <h2>ABOUT</h2>
        <p>StudentName={props.studentName}</p>
        <p>Age={props.age}</p>
        <p>Isstudent?={props.isstudent?"yes":"no"}</p>
        <p>Attendance={props.attendance}</p>
        </>
    );


}

export default info