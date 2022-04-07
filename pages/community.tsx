import React from 'react';
import Navigation from '../components/Navigation';
import { Stack } from '@mui/material';
import Header from '../components/Header';
import Trending from '../assets/Trending.svg';
import Louise from '../assets/Louise.svg';
import Cherelle from '../assets/Cherelle.svg';

const Community = () => {

    return (
        <Navigation value={3}>
            <Stack direction='column' spacing={2}
                   sx={{padding: '20px', height: '100%', width: '100%' }}>
                <Header text='Community' />
                <Stack
                    sx={{width: '100%'}}
                    justifyContent='center'
                    alignItems='center'
                >
                    <Trending />
                </Stack>
                <Cherelle />
                <Louise />
            </Stack>
        </Navigation>
    )
};

export default Community;
