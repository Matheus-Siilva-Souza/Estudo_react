import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';

export default function DeleteButtonsRegister({ event, del, count }) {

    return (
        < Stack direction="row" className='deletearray' >
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button className='custom-btn' onClick={count} ><AddIcon /></Button>
                <Button className='custom-btn' onClick={event} ><CleaningServicesOutlinedIcon />Clean</Button>
                <Button className='custom-btn' onClick={del}><DeleteIcon /></Button>
            </ButtonGroup>
        </Stack >

    );
}