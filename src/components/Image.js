import React from 'react';


const Image = () => {
    return(
        <div>
            <h2>image</h2>
            <img src={require(`./image/phone_icon.png`)} alt="ok" width="500" height="500" />
            <div>
                <img src={require('./image/flush_emoji.png')} alt="huh" width='80' height='80'/>
            </div>
        </div>
    );
};


export default Image; 
