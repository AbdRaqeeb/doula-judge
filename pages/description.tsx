import React from 'react';
import OnBoarding from '../components/Onboarding';
import { useRouter } from 'next/router';
import { Stack, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const Description = () => {
    const router = useRouter();
    const handleBack = () => router.push('/birth');
    const handleNext = () => router.push(next);
    const next = '/date';

    return (
        <OnBoarding activeStep={6} next={next} handleNext={handleNext} handleBack={handleBack}>
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
                    What describes you best?
                </h1>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel checked value="female" control={<Radio />} label="I’m pregnant" />
                        <FormControlLabel value="male" control={<Radio />} label="I’m expecting" />
                        <FormControlLabel value="other" control={<Radio />} label="I’m partner" />
                        <FormControlLabel value="other" control={<Radio />} label="I’m just playing arround" />
                    </RadioGroup>
                </FormControl>
            </Stack>
        </OnBoarding>
    )
};

export default Description;
