import React from 'react';
import './App.css';
import Login from './Components/Login';
import Map from './Components/Map';

function App() {
  return (
    <div className="App">
      <Login/>     
      <button>Login</button>
      <p id = "para">Here you can view the charging stations locations:</p>
      <Map/>
    </div>
  );
}

export default App;
