import React, { useState } from 'react';
import OnBoarding from '../components/Onboarding';
import { useRouter } from 'next/router';
import { Stack, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, MobileDatePicker } from '@mui/lab';

const Birth = () => {
    const router = useRouter();
    const handleBack = () => router.push('/picture');
    const handleNext = () => router.push('/description');

    const [value, setValue] = useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <OnBoarding next='/description' activeStep={5} handleBack={handleBack} handleNext={handleNext}>
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
                    What’s your date of birth?
                </h1>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Stack>
        </OnBoarding>
    )
};

export default Birth;
