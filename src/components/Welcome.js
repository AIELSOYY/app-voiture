
const Welcome = () => {
    const csBonjour = () =>{
        console.log("Bonjour");
    }
    const csBonsoirArg = (text2Disp) =>{
        console.log(text2Disp);
    }
    return (
       <div>
            <button onClick={csBonjour}>Bonjour</button>
            <button onClick={() => csBonsoirArg("Bonsoir")}>Bonsoir par argument</button>
            <button onClick={() => console.log("bonne nuit")}>Bonne nuite par argument</button>
        </div>
        
    )
}

export default Welcome;