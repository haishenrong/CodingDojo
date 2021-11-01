import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import PokeList from './components/PokeList';
import Display from './components/Display';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <h2>Select Your Route</h2>
          <div style={{display:"flex", gap: "10px"}}>
            <Link to="/">Home/Pokemon</Link>
            <Link to="/4">Four</Link>
            <Link to="/hello">Hello</Link>
            <Link to="/hello/cornflowerblue/rebeccapurple">Hello, Again</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <PokeList />
            </Route>
            <Route exact path="/:value">
              <Display />
            </Route>
            <Route path="/:value/:color/:background">
              <Display />
            </Route>
          </Switch>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
