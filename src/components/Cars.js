import React from 'react'


const Car = ({children, color}) => {
    const colorInfo = color ? <p>Couleur: {color}</p> : (<p>Couleur : néant</p>)
    if(children){
        return ( 
            <div style={ {backgroundColor: 'pink', width: '400px', padding : '10px', margin: '5px'}}>
                <p>Marque: {children}</p> 
                {colorInfo}
            </div>
            
        )
    }
    else{
        return <p>Pas de détail</p>
    }
}



export default Car;