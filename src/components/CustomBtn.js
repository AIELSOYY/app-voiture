import React from 'react'

const Btn = ({children, customStyle, handleClick}) => {
    const customBtn = {
        backgroundColor: "grey",
        border: 'none',
        color: '#fff',
        fontSize: '19px',
        padding: '15px 30px',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '7px',
        display: 'block',
        margin: '5px auto'
    }
    return(
        <div>
            <button 
                onClick={handleClick}
                style={{...customBtn,...customStyle}}>{children}
            </button>
        </div> 
    )
}

export default Btn;