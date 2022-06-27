import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function SimpleInput({ label, state }) {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
            }}
        >
            <TextField
                helperText=""
                id="demo-helper-text-aligned-no-helper"
                label={label}
                onChange={state}
            />
        </Box>
    );
};


export default SimpleInput;





