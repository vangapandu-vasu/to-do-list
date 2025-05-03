
function Rend(props){


    Rend.propTypes={
        id : props.number,
        name : props.string,
        scalability : props.number,
    };

    Rend.default={
        id : 0,
        name : "undefined",
        scalability : 0,
    };

    const listitems=props.items;

    const techs=listitems.map(tech=><li key={tech.id}>{tech.name}--{tech.scalability}</li>);

    const sorted=listitems.sort((a,b)=>a.name.localeCompare(b.name));

    const descend=listitems.sort((a,b)=>b.technologies-a.technologies);

    const dess=descend.map(desc=><li key={desc.id}>{desc.name}--{desc.scalability}</li>)

    const sortt=sorted.map(sort=><li key={sort.id}>{sort.name}--{sort.scalability}</li>);

    const filt=listitems.filter(filtvalues=>filtvalues.scalability < 75);

    const filtereditems=filt.map(require=><li key={filt.id}>{require.name}--{require.scalability}</li>)
    
    
    return(
        <>
            <ul>{techs}</ul>
            <ul>{sortt}</ul>
            <ul>{dess}</ul>
            <ul>{filtereditems}</ul>
        </>
    );

}

export default Rend;