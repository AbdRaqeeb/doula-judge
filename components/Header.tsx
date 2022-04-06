import React from 'react';
import { Stack } from '@mui/material';
import Search from '../assets/Search.svg';
import Girl from '../assets/Girl.svg';
import Message from '../assets/Message.svg';

export interface IHeaderProp {
    search?: boolean;
    text: string;
}

const Header = ({ search, text }: IHeaderProp) => {
    return (
        <div style={styles}>
            <h1 style={{ fontWeight: 'bold' }}>{text}</h1>
            <div style={divStyle}>
                <Stack direction='row' spacing={2}>
                    {search && <Search />}
                    <Girl />
                    <Message />
                </Stack>
            </div>
        </div>
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