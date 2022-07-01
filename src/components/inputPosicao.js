import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';



export default function InpPos({ setPos }) {
    const [currentPosition, setCurrentPosition] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const positions = [
        {
            id: 0,
            position: ""
        },
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
            if (element.id === event.target.value) setPos(element.position);
        });
    };
    return (
        <Box >
            <Grid container spacing={0} >
                <Grid>
                    <FormControl className='input-style'>
                        <InputLabel id="demo-controlled-open-select-label" >Posições</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={currentPosition}
                            label="Posições"
                            onChange={handleChange}
                           
                        >
                            {
                                positions.map((position) => (
                                    <MenuItem key={position.id.toString()} value={position.id}>{position.position}</MenuItem>
                                ))
                            }

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Box >
    );
}



