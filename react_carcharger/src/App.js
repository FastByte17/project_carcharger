import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Maps from './Components/Maps';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loggedIn: false
    }
    

  }

   SetLoggedIn = () => {
    this.setState({ loggedIn: true })
  }

  componentDidMount() {

    axios.get('http://localhost:4000/chargers_locations')
      .then((response) => {
        this.setState({ items: response.data })
      });
  }

  


  render() {
    return (
      <Router>
      <div className="App">
        <h1>Welcome to Nabeel's Car Charger App!</h1>

        
        <Route path="/maps" exact userLoggedIn={this.state.loggedIn} render={(routeProps) =>
          <Maps charging_locations={this.state.items} />}/>
        
        <Route path="/" exact render={(routeProps) =>
          <Login SetLoggedIn={this.SetLoggedIn}{...routeProps}/>}/>
        
        
        
                  
      </div>
      </Router>
    );
  }
}

export default App;

//<p id="para">Here you can view the charging stations locations:</p>
//<Maps charging_locations={this.state.items} />