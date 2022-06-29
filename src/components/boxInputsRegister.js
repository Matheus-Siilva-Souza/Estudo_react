import BirthInput from "./inputnacimento";
import SimpleInput from "./SimpleInput";
import InpDescript from "./inputDesc"
import InpPos from "./inputPosicao";
import InpSexo from "./inpSexo";
import IconButtonsRegister from "./buttonDeletecadastro";
import LetterAvatars from "./avatarRegister";
import { useState } from "react";


function BoxInputsregister() {
    const [players, setPlayers] = useState(
        [
            {
                name: '',
                Lastname: '',
                email: '',
                tel: '',
                birth: '',
                position: '',
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
                Lastname: '',
                email: '',
                tel: '',
                birth: '',
                position: '',
                description: '',
                sexo: ''
            }
        )
        console.log(newPlayers)
        setPlayers(newPlayers)
    }

    function removePlayer(index) {
        const delArray = [...players];
        if (index != 0) {
            delArray.splice(index, 1);
            setPlayers(delArray);
        }
    }

    function clearInputs(index) {
        const delPlayersData = [...players];
        delPlayersData[index].name = '';
        delPlayersData[index].Lastname = '';
        delPlayersData[index].email = '';
        delPlayersData[index].tel = '';
        delPlayersData[index].birth = '';
        delPlayersData[index].position = '';
        delPlayersData[index].description = '';
        delPlayersData[index].sexo = '';
        setPlayers(delPlayersData);
        console.log([delPlayersData[index]]);

    };

    function setPos(position, index) {
        const addPlayersposi = [...players];
        addPlayersposi[index].position = position;
        setPlayers(addPlayersposi);
        console.log(addPlayersposi[index].position)
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
                <LetterAvatars
                    name={players[index].name}
                    lastNome={players[index].Lastname}
                    email={players[index].email}
                    tel={players[index].tel}
                    birth={players[index].birth}
                    pos={players[index].position}
                    desc={players[index].description}
                    sex={players[index].sexo}
                />
                <SimpleInput
                    label="Nome"
                    state={(event) => handleChange(index, 'name', event.target.value)}
                    value={players[index].name}
                />
                <SimpleInput
                    label="Sobre Nome"
                    state={(event) => handleChange(index, 'Lastname', event.target.value)}
                    value={players[index].Lastname}
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
                <InpPos
                    setPos={(pos) => setPos(pos, index)}
                    value={[players[index].position]}
                />
                <InpDescript
                    state={(event) => handleChange(index, 'description', event.target.value)}
                    value={players[index].description}
                />
                <InpSexo
                    state={(event) => handleChange(index, 'sexo', event.target.value)}
                    value={players[index].sexo}
                />
                <IconButtonsRegister
                    event={() => clearInputs(index)}
                    del={() => removePlayer(index)}
                    count={addBox} />
            </div>
        )
    )
};


export default BoxInputsregister;