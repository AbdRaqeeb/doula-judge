import React from 'react';
import { useRouter } from 'next/router';
import OnBoarding from '../components/Onboarding';
import { Stack } from '@mui/material';
import Girl from '../assets/Girl.svg';

const Picture = () => {
    const router = useRouter();
    const handleBack = () => router.push('/name');
    const handleNext = () => router.push('/birth');

    return (
        <OnBoarding activeStep={4} handleBack={handleBack} handleNext={handleNext} next='/birth'>
            <Stack
                direction='column'
                spacing={2}
                alignItems='flex-start'
                justifyContent='flex-start'
                sx={{
                    padding: '30px',
                    width: '100%'
                }}
            >
                <h1
                    style={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: '100%'
                    }}
                >
                    Add your picture
                </h1>
                <Girl />
            </Stack>
        </OnBoarding>
    )
};

export default Picture;
