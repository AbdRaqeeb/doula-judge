import React from 'react';
import { useRouter } from 'next/router';
import { Stack, TextField } from '@mui/material';
import OnBoarding from '../components/Onboarding';

const Name = () => {
    const router = useRouter();
    const handleBack = () => router.push('/code');
    const handleNext = () => router.push('/picture');

    return (
        <OnBoarding activeStep={3} handleBack={handleBack} handleNext={handleNext} next='/picture'>
            <Stack
                direction='column'
                spacing={2}
                alignItems='center'
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
                    What is your name
                </h1>
                <TextField label fullWidth id='fullWidth' defaultValue='Maria' />
            </Stack>
        </OnBoarding>
    )
};

export default Name;
