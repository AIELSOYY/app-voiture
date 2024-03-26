import React from 'react'
import { Component } from 'react';
import Car from './Cars';


class MyCars extends Component {
    state={
        cars:["Ford","Mercedes","Peugeot"]
    }
    render(){
        console.log(this);
        return(
            <div>
                <h1 style={ {color: this.props.color} }>{this.props.title}</h1>

                <Car color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color ="green"></Car>
            </div>
            
        )

    }

}

export default MyCars;