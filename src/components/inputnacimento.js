import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


function InpTelephone({ state, value }) {
  return (
    <Box>
      <Grid>
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            className='input-style'
            type="date"
            onChange={state}
            value={value}
          />
      </Grid>
    </Box>
  );
};


export default InpTelephone;
