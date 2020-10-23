import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from './Components/Login';
import Map from './Components/Map';
import SlowCharger from './Components/SlowCharger';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {

    axios.get('http://localhost:4000/example')
      .then((response) => {
        this.setState({ items: response.data })
        console.log(this.state.items);
      });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Welcome to Nabeel's Car Charger App!</h1>

        <p>Please Login below</p>
        <Login />     
        <p id = "para">Here you can view the charging stations locations:</p>
        <Map/>
      </div>
    );
  }
}

export default App;
