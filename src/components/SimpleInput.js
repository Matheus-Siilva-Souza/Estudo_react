import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


function SimpleInput({ label, state, value }) {

    return (

        <Box >
            <Grid >
                <Grid >
                    <TextField
                        helperText=""
                        id="demo-helper-text-aligned-no-helper"
                        label={label}
                        onChange={state}
                        value={value}
                    />
                </Grid>
            </Grid>
        </Box >
    );
};


export default SimpleInput;





