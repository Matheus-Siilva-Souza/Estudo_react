import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function InpTelephone({state, value}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1, minWidth: 223, margin: 1 },
      }}
    >
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        type="date"
        onChange={state}
        value={value}
      />
    </Box>
  );
};


export default InpTelephone;
