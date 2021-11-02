import { useParams } from "react-router";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const One = (props) => {
    const { type , id } = useParams();
    const [thing, setThing] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/+${id}/`)
        .then(response=>response.data)
        .then(res => {setThing(res)})
        .catch(error => {
            setThing(null)
          })
        //console.log(res);
      }, [type,id]); 
    return (
        <div>
            {
            thing !== null 
            ? <table>{Object.entries(thing).map((item, idx) => idx<8 ? <tr><td>{item[0]}</td><td> {item[1]}</td></tr>:<></>)}</table>
            : <div> <p>Go search for something.</p> <p>Soon, there will be nothing.</p></div>
            }
        </div>
    );
};

export default One;