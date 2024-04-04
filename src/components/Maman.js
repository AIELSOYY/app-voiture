import React, { Component } from 'react'

class Maman extends Component{
    state = {
        messageMaman: null,
        messageToto: null
    }
    ordreMaman = () =>{
        this.setState({
            messageMaman: 'Va ranger ta chambre'
        })
    }

    render(){
        return(
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la mère</button>
            </div>
        )
    }
}

export default Maman