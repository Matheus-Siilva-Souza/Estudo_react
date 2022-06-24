function ButtonRes({ number, clickNumber }) {

    return (
        <button onClick={() => clickNumber(number)} className="style-buntton res-button">{number}</button>
    )
}


export default ButtonRes;