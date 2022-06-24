function Operadores({ number, clickNumber }) {

    return (
        <button onClick={() => clickNumber(number)} className="style-buntton caracter">{number}</button>
    )
}


export default Operadores;