import React, {useState} from 'react'

const Box = props => {
    const [color, setColor] = useState("");

    const createColor = (e) => {
        e.preventDefault();
        props.addBox(color);
    };

    return(
        <div>
        <form onSubmit={createColor}>
            <div>
                <label>Color: </label>
                <input type="text" onChange={(e) => setColor(e.target.value)}/>
                <input type="submit" value="Add"/>
            </div>
        </form>
        <div style={{display:'flex', gap: '10px', flexWrap: 'wrap'}}>
            {props.boxes.map(color => 
                <div style={{width: '50px', height: '50px', backgroundColor:color}}></div>
            )}
        </div>
        </div>
    )
}

export default Box;