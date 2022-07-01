import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function InpDescript({ state, value }) {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="on"
        >

            <Grid >
                <Grid >
                    <TextField
                        id="outlined-multiline-static"
                        label="Descrição"
                        value={value}
                        multiline
                        rows={4}
                        onChange={state}
                        className='input-style'
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
