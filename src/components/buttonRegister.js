import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function IconButtonsRegister() {
  return (
    <Stack direction="row" spacing={8}>
      <Button variant="outlined" startIcon={<HowToRegIcon />} className="btnRegister">
        Cadastrar
      </Button>
    </Stack>
  );
}
