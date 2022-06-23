function ButtonReset({number,clickNumber}) {

    return (
        <button onClick={() => clickNumber(number)} className="style-buntton caracter reset">{number}</button>
    )
}


export default ButtonReset;