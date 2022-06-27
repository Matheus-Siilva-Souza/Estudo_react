import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import UserdataRegister from './UserDataRegister';

export default function LetterAvatars({ name, lastNome, email, tel, birth, pos, desc, sex }) {
    return (
        <Stack direction="row" className='avatarRegister' spacing={2}>
            <Avatar sx={{ bgcolor: pink[500], width: 50, height: 50 }}>
                <PersonIcon sx={{ width: 30, height: 30 }} />
            </Avatar>
            <div className='table-user'>
                <UserdataRegister data={name} lastName={lastNome} />
                <UserdataRegister data={email} />
                <UserdataRegister data={tel} />
                <UserdataRegister data={birth} />
                <UserdataRegister data={pos} />
                <UserdataRegister data={desc} />
                <UserdataRegister data={sex} />
            </div>
        </Stack>
    );
}
