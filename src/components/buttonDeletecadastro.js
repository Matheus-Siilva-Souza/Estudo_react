import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteButtonsRegister({ event, del, count }) {
    return (
        <Stack direction="row" className='deletearray'>
            <IconButton aria-label="delete" color="primary" onClick={count}>
                <AddIcon />
            </IconButton>
            <Button variant="outlined" onClick={event} color="error" startIcon={<DeleteIcon />} className="btnRegister">
                Limpar Campos
            </Button>
            <IconButton aria-label="delete" color="secondary" onClick={del}>
                <DeleteIcon />
            </IconButton>
        </Stack>

    );
}
