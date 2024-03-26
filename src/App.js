import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';
import Car from './components/Cars';

class App extends Component {
  
  state={
    titre: 'Mon Catalogue Voiture',
    color:'green'
  }
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} color={this.state.color}/>
        {/* <Car color="red">{MyCars.state.cars[0]}</Car>
        <Car color="black">{MyCars.state.cars[1]}</Car>
        <Car color="green">{MyCars.state.cars[2]}</Car> */}
        
      </div>
    );
  }
}

export default App;
