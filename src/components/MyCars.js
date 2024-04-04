import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2000},
            {name: 'Mercedes', color: 'black', year: 2010},
            {name: 'Peugeot', color: 'green', year: 2018}
        ]
    }

    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updatedState
        })
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <div>
                <h1>{this.props.title}</h1>

                {/* <Car year={year - this.state.voitures[0].year + 'ans'}color={this.state.voitures[0].color}>{this.state.voitures[0].name}</Car>
                <Car year={year - this.state.voitures[1].year + 'ans'}color={this.state.voitures[1].color}>{this.state.voitures[2].name}</Car>
                <Car year={year - this.state.voitures[2].year + 'ans'}color={this.state.voitures[1].color}>{this.state.voitures[2].name}</Car> */}
                
                <button onClick={this.addTenYears}> + 10 ans</button>
                {
                    this.state.voitures.map(({name, color, year},index) => {
                        return(
                            <div key={index}>
                                <Car color={color} year={year}>{name}</Car>
                            </div>
                        )
                    })
                }
            </div>
           
        )
    }
}

export default Mycars