import BirthInput from "./inputnacimento";
import SimpleInput from "./SimpleInput";
import InpReasonForConsultation from "./inputDesc"
import InpPos from "./inputPosicao";
import InpSexo from "./inpSexo";
import IconButtonsDelete from "./buttonDeletecadastro";
import LetterAvatars from "./avatarRegister";
import { useState } from "react";


function BoxInputsregister() {
    const [name, setName] = useState('')
    const [Lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [birth, setBirth] = useState('')
    const [position, setPosition] = useState('')
    const [description, setDescription] = useState('')
    const [sexo, setSexo] = useState('')

    function setPos(position) {
        setPosition(position);
    }

    return (
        <div id="box-iputs-register">
            <LetterAvatars
                name={name}
                lastNome={Lastname}
                email={email}
                tel={tel}
                birth={birth}
                pos={position}
                desc={description}
                sex={sexo}
            />
            <SimpleInput label="Nome" state={(name) => setName(name.target.value)} />
            <SimpleInput label="Sobre Nome" state={(e) => setLastname(e.target.value)} />
            <SimpleInput label="Email" state={(e) => setEmail(e.target.value)} />
            <SimpleInput label="Telefone" state={(e) => setTel(e.target.value)} />
            <BirthInput state={(e) => setBirth(e.target.value)} />
            <InpPos setPos={(pos) => setPos(pos)} />
            <InpReasonForConsultation state={(e) => setDescription(e.target.value)} />
            <InpSexo state={(e) => setSexo(e.target.value)}/>
            <IconButtonsDelete />
        </div>
    )
};


export default BoxInputsregister;