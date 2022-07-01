import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ControlledSwitches({ setCap }) {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        setCap(event.target.checked)
    };

    return (
        <FormGroup className='input-style capitao-inp'>
            <FormControlLabel control={<Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />} label="Capitão" />
        </FormGroup>
    );
}
