import * as React from 'react';

export default function UserdataRegister({ data, lastName}) {
    return (
        <div className='contentDataRegister'>{data} {lastName}</div>
    );
}