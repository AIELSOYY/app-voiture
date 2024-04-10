import { Component } from 'react';
import Mycars from './components/MyCars';
import Welcome from './components/Welcome';
import './App.css';
import Maman from './components/Maman';
import Image from './components/Image';
import Form from './components/Form';
import './components/myCss.css'

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
      </div>
    )
  }
}

export default App;