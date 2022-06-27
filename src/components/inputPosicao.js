import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InpPos({ state, setPos }) {
    const [currentPosition, setCurrentPosition] = React.useState(0);
    const positions = [
        {
            id: 1,
            position: "Goleiro"
        },
        {
            id: 2,
            position: "Zagueiro"
        },
        {
            id: 3,
            position: "Segundo Zaguiro"
        },
        {
            id: 4,
            position: "Lateral Direito"
        },
        {
            id: 5,
            position: "Lateral Esquerdo"
        },
        {
            id: 6,
            position: "Volante"
        },
        {
            id: 7,
            position: "Meio Campo"
        },
        {
            id: 8,
            position: "Meia Atacante"
        },
        {
            id: 9,
            position: "Ponta Direita"
        },
        {
            id: 10,
            position: "Ponta Esquerda"
        },
        {
            id: 11,
            position: "Centroavante"
        },
    ]

    const handleChange = (event) => {
        setCurrentPosition(event.target.value);
        positions.forEach(element => {
            if (element.id == event.target.value) setPos(element.position);
        });
    };
    return (
        <Box sx={{ minWidth: 223, margin: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Posições</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentPosition}
                    label="Posições"
                    onChange={handleChange}
                >
                    {
                        positions.map((position) => (
                            <MenuItem key={position.id} value={position.id}>{position.position}</MenuItem>
                        ))
                    }
                    {/* <MenuItem value={1}>Goleiro</MenuItem>
                    <MenuItem value={2}>Lateral Direito</MenuItem>
                    <MenuItem value={3}>Lateral esquerdo</MenuItem>
                    <MenuItem value={4}>Zagueiro central</MenuItem>
                    <MenuItem value={5}>Quarto zagueiro</MenuItem>
                    <MenuItem value={6}>Volante</MenuItem>
                    <MenuItem value={7}>Segundo volante</MenuItem>
                    <MenuItem value={8}>Meia armador</MenuItem>
                    <MenuItem value={9}>Ponta esquerda</MenuItem>
                    <MenuItem value={10}>Ponta direita</MenuItem>
                    <MenuItem value={11}>Atacante</MenuItem>
                    <MenuItem value={12}>Centroavante</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}



