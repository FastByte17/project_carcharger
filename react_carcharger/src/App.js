import React from 'react';
import './App.css';
import Login from './Components/Login';
import Map from './Components/Map';


function App() {
  return (
    <div className="App">
      <Login heading = "Welcome to Nabeel's Car Charger App!" 
              paragraph = "Please Login below"/>     
      <p id = "para">Here you can view the charging stations locations:</p>
      <Map/>
    </div>
  );
}

export default App;
