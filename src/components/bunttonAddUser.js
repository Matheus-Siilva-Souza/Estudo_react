import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function AddUserButtonsRegister({ count }) {
    return (
        <Stack direction="row" className='deletearray'>
            <Button variant="outlined" onClick={count}color="primary" startIcon={<AddIcon />} className="btnRegister">
                Jogador
            </Button>
        </Stack>

    );
}