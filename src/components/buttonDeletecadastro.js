import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function IconButtonsDelete() {
    return (
        <Stack direction="row" className='deletearray'>
            <IconButton aria-label="delete" color="primary">
                <AddIcon />
            </IconButton>
            <IconButton aria-label="delete" color="secondary">
                <DeleteIcon />
            </IconButton>
        </Stack>

    );
}
