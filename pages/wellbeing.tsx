import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Stack, Paper } from '@mui/material';
import Mindful from '../assets/Mindful.svg';
import Breathing from '../assets/Breathing.svg';
import WaterTracker from '../assets/WaterTracker.svg';
import Vitamin from '../assets/Vitamin.svg';
import Exercise from '../assets/Exercise.svg';
import Contraction from '../assets/Contraction.svg';

const WellBeing = () => {

    return (
        <>
            <Navigation value={1}>
                <Stack direction='column' spacing={2}
                       sx={{padding: '20px', height: '100%', width: '100%', overflowY: 'scroll'}} >
                    <Header search text='Wellbeing'/>
                    <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>Meditation</h4>
                    <Paper sx={{width: '100%', height: '100%', padding: '10px 0'}} elevation={1}>
                        <Stack sx={{width: '100%', height: '100%'}} justifyContent='center' alignItems='center'
                               direction='column' spacing={2}>
                            <Mindful style={{cursor: 'pointer'}}/>
                            <Breathing style={{cursor: 'pointer'}}/>
                        </Stack>
                    </Paper>
                    <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>Nutrition</h4>
                    <Paper sx={{width: '100%', height: '100%', padding: '10px 0'}} elevation={1}>
                        <Stack sx={{width: '100%', height: '100%'}} justifyContent='center' alignItems='center'
                               direction='column' spacing={2}>
                            <WaterTracker style={{cursor: 'pointer'}} />
                            <Vitamin style={{cursor: 'pointer'}}/>
                        </Stack>
                    </Paper>
                    <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>Exercise</h4>
                    <Paper sx={{width: '100%', height: '100%', padding: '10px 0'}} elevation={1}>
                        <Stack sx={{width: '100%', height: '100%'}} justifyContent='center' alignItems='center'
                               direction='column' spacing={2}>
                            <Exercise style={{cursor: 'pointer'}}/>
                        </Stack>
                    </Paper>
                    <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>Body</h4>
                    <Paper sx={{width: '100%', height: '100%', padding: '10px'}} elevation={1}>
                        <Stack sx={{width: '100%', height: '100%'}} justifyContent='center' alignItems='flex-start'
                               direction='column' spacing={2}>
                            <Contraction style={{cursor: 'pointer'}}/>
                        </Stack>
                    </Paper>
                </Stack>
            </Navigation>
        </>
    )
};

export default WellBeing;
