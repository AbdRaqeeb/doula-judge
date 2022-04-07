import React, { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
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
    value: number;
    href?: string
}

const Navigation = ({ children, value}: INavigationProps) => {
    const router = useRouter();

    const onLink = (href: string): void => {
        router.push(href);
    };

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
                    >
                        <BottomNavigationAction
                            label="Home"
                            icon={<Home />}
                           onClick={() => onLink('/dashboard')}
                        />
                        <BottomNavigationAction
                            label="Wellbeing"
                            icon={<WellBeing/>}
                            onClick={() => onLink('/wellbeing')}
                        />
                        <BottomNavigationAction
                            label="Articles"
                            icon={<Articles />}
                            onClick={() => onLink('/articles')}
                        />
                        <BottomNavigationAction
                            label="Community"
                            icon={<Community />}
                            onClick={() => onLink('/community')}
                        />
                        <BottomNavigationAction
                            label="Birthplan"
                            icon={<BirthPlan />}
                            onClick={() => onLink('/birthplan')}
                        />
                    </BottomNavigation>
                </Paper>
            </Grid>
        </>
    )
};

export default Navigation;
