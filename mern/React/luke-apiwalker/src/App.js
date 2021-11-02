import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import One from './components/One'

const App = () => {
  const [thing, setThing] = useState(null)
  const [type, setType] = useState("people");
  const [id, setId] = useState("0");
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${type}/+${id}/`)
    .then(response=>response.data)
    .then(res => {setThing(res)})
    .catch(error => {
        setThing(null)
      })
    //console.log(res);
  }, [id, type]); 
  
  const queryInfo = (e) => {
    e.preventDefault();
    //history.push(`/${type}/${id}`)
    console.log(thing);
  }
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <h2>Welcome to Luke's APIwalker</h2>
        <form /*onSubmit={(e) => queryInfo(e)}*/>
          <select id="type" onChange={(e)=>setType(e.target.value)} value={type}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
            <option value="films">Films</option>
          </select>
          <input type="text" onChange={(e)=>setId(e.target.value)}/>
          <Link to={`/${type}/${id}`}>
            <button type="button" onClick={(e) => queryInfo(e)}>Search</button>
          </Link>
        </form>
        <Route exact path="/">
          <div>
            {
              thing !== null 
              ? <table>{Object.entries(thing).map((item, idx) => idx<8 ? <tr><td>{item[0]}</td><td> {item[1]}</td></tr>:<></>)}</table>
              : <div> <p>Go search for something.</p> <p>Soon, there will be nothing.</p></div>
            }
          </div>
        </Route>
        <Route path="/:type/:id">
          <One />
        </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
