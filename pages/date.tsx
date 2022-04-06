import React from 'react';
import OnBoarding from '../components/Onboarding';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import DueDate from '../assets/DueDate.svg';

const Date = () => {
    const router = useRouter();
    const handleBack = () => router.push('/description');
    const next = '/dashboard';
    return (
        <OnBoarding activeStep={7} handleBack={handleBack} next={next}>
            <Stack
                direction='column'
                spacing={2}
                alignItems='flex-start'
                justifyContent='flex-start'
                sx={{
                    width: '100%'
                }}
            >
                <h1
                    style={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: '100%',
                        padding: '30px'
                    }}
                >
                    When is your due date?
                </h1>
                <DueDate />
            </Stack>
        </OnBoarding>
    )
};

export default Date;
