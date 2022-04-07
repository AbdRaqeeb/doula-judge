import React from 'react';
import Navigation from '../components/Navigation';
import { Stack } from '@mui/material';
import Header from '../components/Header';
import Plan from '../assets/Plan.svg';
import Giving from '../assets/Giving.svg';
import Companion from '../assets/Companion.svg';
import Pain from '../assets/Pain.svg';
import Care from '../assets/Care.svg';

const BirthPlan = () => {

    return (
        <Navigation value={4}>
            <Stack direction='column' spacing={2}
                   sx={{padding: '20px', height: '100%', width: '100%' }}>
                <Header text='Birth Plan' />
                <Plan />
                <h4 style={{fontSize: '20px', fontWeight: 'bold', paddingLeft: '15px'}}>Birth plans</h4>
                <Giving />
                <Companion />
                <Pain />
                <Care />
            </Stack>
        </Navigation>
    );
};

export default BirthPlan;
