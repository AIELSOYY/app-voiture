const Toto = props => {
  return (
    <div>
        <h2>{props.name}</h2>
        <button 
            disabled={props.leState.disabled}
            onClick={() => props.reponseTotoProps("Non je veux jouer à la console!!")}
          >Réponse toto</button>

      <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto