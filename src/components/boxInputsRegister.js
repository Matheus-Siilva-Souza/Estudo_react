import BirthInput from "./inputnacimento";
import SimpleInput from "./SimpleInput";
import InpDescript from "./inputDesc"
import InpPos from "./inputPosicao";
import InpSexo from "./inpSexo";
import IconButtonsRegister from "./buttonDeletecadastro";
import LetterAvatars from "./avatarRegister";
import { useState } from "react";


function BoxInputsregister({remove}) {
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

    function clearInputs() {
        setName('');
        setLastname('')
        setEmail('')
        setTel('')
        setBirth('')
        setPosition('')
        setDescription('')
        setSexo('')
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
            <SimpleInput label="Nome" state={(name) => setName(name.target.value)} value={name} />
            <SimpleInput label="Sobre Nome" state={(sobrName) => setLastname(sobrName.target.value)} value={Lastname} />
            <SimpleInput label="Email" state={(email) => setEmail(email.target.value)} value={email} />
            <SimpleInput label="Telefone" state={(fone) => setTel(fone.target.value)} value={tel} />
            <BirthInput state={(birthEvente) => setBirth(birthEvente.target.value)} value={birth} />
            <InpPos setPos={(pos) => setPos(pos)} value={position} />
            <InpDescript state={(descript) => setDescription(descript.target.value)} value={description} />
            <InpSexo state={(sexo) => setSexo(sexo.target.value)} value={sexo} />
            <IconButtonsRegister event={clearInputs}  del={remove} />
        </div>
    )
};


export default BoxInputsregister;