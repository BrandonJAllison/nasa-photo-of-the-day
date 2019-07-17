import React, {useState} from "react";
import "./App.css";
import Photo from './Components/Photo'
import NavBar from './Components/Header'



function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <p>
        <Photo/>
      </p>
    </div>
  );
}

export default App;
