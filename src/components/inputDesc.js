import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InpDescript({ state, value }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="on"
        >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Descrição"
                    value={value}
                    multiline
                    rows={4}
                    onChange={state}
                />
            </div>
        </Box>
    );
}
