import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Maps from './Components/Maps';
import SlowCharger from './Components/SlowCharger';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }


  }

  componentDidMount() {

    axios.get('http://localhost:4000/chargers_locations')
      .then((response) => {
        this.setState({ items: response.data })
      });
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to Nabeel's Car Charger App!</h1>

        <p>Please Login below</p>
        <Login />
        <p id="para">Here you can view the charging stations locations:</p>
        <Maps charging_locations={this.state.items} />
      </div>
    );
  }
}

export default App;
