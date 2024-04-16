import { Component } from 'react';
import Mycars from './components/MyCars';
import Welcome from './components/Welcome';
import './App.css';
import Maman from './components/Maman';
import Image from './components/Image';
import Form from './components/Form';
import './components/myCss.css'
import Btn from './components/CustomBtn';

const sayHello=() => {
  alert("Hello world")
}

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures',
  }
 

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <Welcome />
        <Maman />
        <Image />
        <Form head={true} />
        <Btn handleClick={sayHello}>Say Hello</Btn>
      </div>
    )
  }
}

export default App;