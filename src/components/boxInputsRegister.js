import BirthInput from "./inputnacimento";
import SimpleInput from "./SimpleInput";
import InpDescript from "./inputDesc"
import InpPos from "./inputPosicao";
import InpSexo from "./inpSexo";
import DeleteButtonsRegister from "./ButtonsBoxForm";
import { useState } from "react";
import Titleregister from "./titleRegister";
import CountrySelect from "./InputNacionalidade";
import ControlledSwitches from "./SwitchCapitao";


function BoxInputsregister() {
    const [players, setPlayers] = useState(
        [
            {
                name: '',
                email: '',
                tel: '',
                birth: '',
                nationality: '',
                position: '',
                cap: false,
                description: '',
                sexo: ''
            },
        ]
    );

    function addBox() {
        const newPlayers = [...players]
        newPlayers.push(
            {
                name: '',
                email: '',
                tel: '',
                birth: '',
                nationality: '',
                position: '',
                cap: false,
                description: '',
                sexo: ''
            }
        )
        console.log(newPlayers)
        setPlayers(newPlayers)
    }

    function removePlayer(index) {
        const delArray = [...players];
        if (index !== 0) {
            delArray.splice(index, 1);
            setPlayers(delArray);
        }
    }

    function clearInputs(index) {
        setPlayers(players => {
            players[index].name = '';
            players[index].email = '';
            players[index].tel = '';
            players[index].nationality = '';
            players[index].birth = '';
            players[index].position = '';
            players[index].cap = false;
            players[index].description = '';
            players[index].sexo = '';
            return [...players];
        });
        console.log([players[index]]);

    };

    function setPos(position, index) {
        setPlayers(players => {
            players[index].position = position;
            return [...players];
        });
    }

    function setNacionalidade(value, index) {
        setPlayers(players => {
            players[index].nationality = value.label;
            return [...players];
        });
    }

    function setCap(checked, index) {
        setPlayers(players => {
            players[index].cap = checked;
            return [...players];
        });
    }

    const handleChange = (index, key, value) => {
        setPlayers(players => {
            players[index][key] = value;
            return [...players];
        })
    }

    return (

        players.map((player, index) =>
            <div id="box-iputs-register" key={index.toString()}>
                <Titleregister
                    name={players[index].name}
                />
                <SimpleInput
                    label="Nome"
                    state={(event) => handleChange(index, 'name', event.target.value)}
                    value={players[index].name}
                />
                <SimpleInput
                    label="Email"
                    state={(event) => handleChange(index, 'email', event.target.value)}
                    value={players[index].email}
                />
                <SimpleInput
                    label="Telefone"
                    state={(event) => handleChange(index, 'tel', event.target.value)}
                    value={players[index].tel}
                />
                <BirthInput
                    state={(event) => handleChange(index, 'birth', event.target.value)}
                    value={players[index].birth}
                />
                <CountrySelect
                    setNacionalidade={(event) => setNacionalidade(event, index)}
                />
                <InpPos
                    setPos={(event) => setPos(event, index)}
                    value={[players[index].position]}
                />
                <InpDescript
                    state={(event) => handleChange(index, 'description', event.target.value)}
                    value={players[index].description}
                />
                <ControlledSwitches
                    setCap={(event) => setCap(event, index)}
                />
                <InpSexo
                    state={(event) => handleChange(index, 'sexo', event.target.value)}
                    value={players[index].sexo}
                />
                <DeleteButtonsRegister
                    event={() => clearInputs(index)}
                    del={() => removePlayer(index)}
                    count={addBox} />
            </div>
        )
    )
};


export default BoxInputsregister;