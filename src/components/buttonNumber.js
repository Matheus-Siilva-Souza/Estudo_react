function ButtonNumber({ number, clickNumber }, props) {
    return (
        <button onClick={() => clickNumber(number)} className="style-buntton number">{number}</button>
    )
}


export default ButtonNumber;