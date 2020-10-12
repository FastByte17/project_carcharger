import React from 'react';
import './App.css';
import Login from './Components/Login';
import Map from './Components/Map';

function App() {
  return (
    <div className="App">
      <Login/>     
      <button>Login</button>
      <Map/>
    </div>
  );
}

export default App;
