import React, {useState} from 'react'
import './App.css';
import Box from './components/Box'
import Tab from './components/Tab'

function App() {
  const [boxes, setBoxes] = useState([]);
  const handleNewBox = (color) => {
    setBoxes(oldBoxes => [...oldBoxes, color]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Box boxes={boxes} addBox={handleNewBox}/>
        <Tab />
      </header>
    </div>
  );
}

export default App;
