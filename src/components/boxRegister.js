import Titleregister from "./titleRegister";
import BoxInputsregister from "./boxInputsRegister";
import BoxFooterregister from "./footerRegister";
import AddUserButtonsRegister from "./bunttonAddUser";
import { useState } from "react";



function Boxregister() {
    const [listBox, setList] = useState([0]);
    const [count, setCount] = useState(1)

    function addBox() {
        setCount(count + 1)
        listBox.push(count)
        console.log(listBox)
    }

    function removePlayer() {
        listBox.pop()
        console.log("Oi")
    }

    return (
        <div className="box-register">
            <Titleregister />
            {listBox.map((number) => <BoxInputsregister key={number.toString()} value={number} remove={removePlayer} />)}
            <BoxFooterregister />
            <AddUserButtonsRegister count={addBox} />
        </div>
    )
};


export default Boxregister;