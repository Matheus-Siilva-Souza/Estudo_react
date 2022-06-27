import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function CleanButton() {
  return (
    <Stack direction="row" spacing={8}>
      <Button variant="outlined" startIcon={<HowToRegIcon />} className="btnRegister">
        Cadastrar
      </Button>
      <Button variant="outlined" color="error" startIcon={<DeleteIcon />} className="btnRegister">
        Limpar
      </Button>
    </Stack>
  );
}
