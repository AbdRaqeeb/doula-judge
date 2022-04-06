import React, { ReactElement, ReactNode } from 'react';
import { Grid, Stack } from '@mui/material';
import Progress from '../components/Progress';
import Link from 'next/link';
import ArrowRight from '../assets/ArrowRight.svg';

export interface IOnBoardingProps {
    activeStep: number;
    handleNext?: () => void;
    handleBack?: () => void;
    children: ReactNode | ReactElement;
    next: string;
}

const OnBoarding = ({ activeStep, handleBack, handleNext, children, next }: IOnBoardingProps) => {
    return (
        <>
            <Progress activeStep={activeStep} handleBack={handleBack} handleNext={handleNext}/>
            <Grid
                container
                sx={{width: '100%', height: '70%'}}
            >
                {children}
            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                sx={{width: '100%', height: '30%', padding: '25px'}}
            >
                <Stack
                    direction='row'
                    spacing={2}
                    alignItems='center'
                    justifyContent='flex-end'
                >
                    <p>Next</p>
                    <Link href={next}>
                        <a>
                            <ArrowRight style={{ cursor: 'pointer' }} />
                        </a>
                    </Link>
                </Stack>
            </Grid>
        </>
    )
};

export default OnBoarding;
