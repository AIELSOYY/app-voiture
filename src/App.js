import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
     
  changeTitle = () =>{
    this.setState({titre: 'Titre en dur'});
  }
  changeTitleParam = (newTitle) =>{
    this.setState({titre:newTitle});
  }
  changeTitleBind = (newTitle) =>{
    this.setState({titre:newTitle});
  }
  changeTitleInput = (e) =>{ //e stands for event
    this.setState({titre:e.target.value});
  }
  state={
    titre: 'Mon Catalogue Voiture',
    color:'green'
  }
  
  render() {
    return (
      <div className="App">
        <MyCars title={this.state.titre} color={this.state.color}/>
        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeTitleParam('Titre en paramètre')}>Changer le nom via paramètre</button>
        <button onClick={this.changeTitleBind.bind(this, 'Titre en bind')}>Changer le nom via bind</button>
        <p>input qui change le texte</p>
        <input type="text" onChange={this.changeTitleInput} value={this.state.titre} />

      </div>
    );
  }
}
export default App;
//Stop au petit rappel