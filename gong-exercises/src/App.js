import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'
import LeftContainer from './LeftContainer';
import CenterContainer from './CenterContainer';
import RightContainer from './RightContainer';


function App() {
  return (
    <div className="App">
        <LeftContainer/>
        <CenterContainer/>
        <RightContainer/>
    </div>
  );
}

export default App;
