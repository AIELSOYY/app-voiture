import React, { Component} from 'react';
import styled from 'styled-components';
import NormalChild from './NormalChild';
import Btn from './CustomBtn';

const click1=() => {
    alert("test")
}

const click2=() => {
    alert("jlhreiuohze")
}

const newStyle1={
    backgroundColor:"red",
    color:"blue",
}

const newStyle2={
    backgroundColor:"yellow",
    color:"green",
}

class Form extends Component {

    state={
        color:'#123456',
        size:'12px',
        text:"ça marche?"
    }

    
    render() {
        const Title = styled.h1`
            color: red;
            font-size: 80px;
        `

        const Button =styled.button`
            background:black;
            color: #ffffff;
            padding: 12px 13px;
            font-size: 15px;
        `

        const StylizedButton = styled.button`
            background-image: url(https://i.pinimg.com/originals/9c/98/22/9c9822a872aadcc57e2dfb3be7866780.gif);
            background-size: cover;
            padding: 20px;
        `
        return(
            <div>
                <Title>Commentaire 1</Title>
                <Button>Valider 2</Button>
                <StylizedButton onClick={() => this.setState({text:"ça marche j'imagine"})}>Valider</StylizedButton>
                <h2>{this.state.text}</h2>
                <NormalChild></NormalChild>
                <Btn>test</Btn>
                <Btn
                    handleClick={click1}
                    customStyle={newStyle1}
                >test
                </Btn>
                <Btn
                    handleClick={click2}
                    customStyle={newStyle2}
                >test
                </Btn>

            </div>
        )
    }
    
    // state = {
    //     username: '',
    //     color: '',
    //     colors: ["", "red", "green", "blue"],
    //     comment: ''
    // }

    // handleUsername = e => {
    //     this.setState({
    //         username : e.target.value
    //     })
    // }

    // handleColor = event => {
    //     this.setState({
    //         color : event.target.value
    //     })
    // }

    // handleComments = event => {
    //     this.setState({
    //         comment : event.target.value
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1 className={styles.green}>Commentaire 1</h1>
    //             <MyHead/>
    //             <p>je suis rouge ou bleu</p>

    //             <form>
    //                 <div>
    //                     <label>Username</label>
    //                     <input type="text" value={this.state.username} onChange={this.handleUsername}/>
    //                 </div>
    //                 <div>
    //                     <label>Couleur</label>
    //                     <select>
    //                         <option value='vert'>Vert</option>
    //                         <option value='rouge'>Rouge</option>
    //                         <option value='bleu'>Bleu</option>
    //                     </select>
    //                     <select value={this.state.colors} onChange={this.handleColor}>
    //                         {
    //                             this.state.colors.map((color, index) => {
    //                             return <option key={index} value={color}>{color}</option>
    //                             })
    //                         }
    //                     </select>
    //                 </div>
    //                 <div>
    //                     <label>Commentaire</label>
    //                     <textarea value= {this.state.comment} onChange={this.handleComments}></textarea>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // }
}

export default Form
