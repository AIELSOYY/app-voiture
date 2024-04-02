import React from 'react'
import Wrapper from './Wrapper'


const Car = ({children, color}) => {

    const colorInfo = color ? color : "Neant";

    return children && ( 
        <Wrapper>
            <p>Marque: {children}</p> 
            <p>Couleur: {colorInfo}</p>
        </Wrapper>
            
    )
}


export default Car;