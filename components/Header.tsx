import React from 'react';
import { Stack } from '@mui/material';
import Search from '../assets/Search.svg';
import GirlSmall from '../assets/GirlSmall.svg';
import Message from '../assets/Message.svg';

export interface IHeaderProp {
    search?: boolean;
    text: string;
    style?: any;
}

const Header = ({ search, text, style }: IHeaderProp) => {
    return (
        <Stack sx={{ width: '100%', ...style }} direction='row' justifyContent='space-between'>
            <h1 style={{ fontWeight: 'bold' }}>{text}</h1>
            <div style={divStyle}>
                <Stack direction='row' spacing={2}>
                    {search && <Search />}
                    <GirlSmall />
                    <Message />
                </Stack>
            </div>
        </Stack>
    )
};

export default Header;

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
};