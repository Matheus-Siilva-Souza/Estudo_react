import * as React from 'react';
import Stack from '@mui/material/Stack';
import UserdataRegister from './UserDataRegister';
import Box from '@mui/material/Box';

export default function LetterAvatars({ name, lastNome, email, tel, birth, pos, desc, sex ,cap}) {
    return (
        <Stack direction="row" className='avatarRegister' spacing={2}>
            <Box component="span" sx={{ p: 2, border: '1px dashed grey', width: 1 }}>
                <UserdataRegister data={name} lastName={lastNome} />
                <UserdataRegister data={email} />
                <UserdataRegister data={tel} />
                <UserdataRegister data={birth} />
                <UserdataRegister data={pos} />
                <UserdataRegister data={desc} />
                <UserdataRegister data={sex} />
                <UserdataRegister data={cap} />
            </Box>
        </Stack>
    );
}
