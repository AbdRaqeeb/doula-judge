import React, { ReactElement, ReactNode, useState } from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
    Grid
} from '@mui/material';
import Articles from '../assets/Articles.svg'
import Home from '../assets/Home.svg'
import Community from '../assets/Community.svg'
import BirthPlan from '../assets/Birthplan.svg'
import WellBeing from '../assets/Wellbeing.svg'

export interface INavigationProps {
    children: ReactNode | ReactElement
}

const Navigation = ({ children}: INavigationProps) => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Grid
                container
                sx={{width: '100%', height: '91%'}}
            >
                {children}
            </Grid>
            <Grid
                sx={{width: '100%', height: '9%', position: 'relative', padding: '0 20px' }}
            >
                <Paper sx={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 40px'}} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event: any, newValue: number) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Home" icon={<Home />} />
                        <BottomNavigationAction label="Wellbeing" icon={<WellBeing/>} />
                        <BottomNavigationAction label="Articles" icon={<Articles />} />
                        <BottomNavigationAction label="Community" icon={<Community />} />
                        <BottomNavigationAction label="Birthplan" icon={<BirthPlan />} />
                    </BottomNavigation>
                </Paper>
            </Grid>
        </>
    )
};

export default Navigation;
