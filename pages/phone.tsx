import React from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@mui/material';
import { Input, Cascader } from 'antd';
import OnBoarding from '../components/Onboarding';

const Phone = () => {
    const router = useRouter();
    const handleNext = () => router.push('/code');
    return (
        <OnBoarding activeStep={1} handleNext={handleNext} next='/code'>
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
                    What’s your phone no
                </h1>
                <Input
                    addonBefore={<Cascader placeholder="🇬🇧+44🇬🇧🇬🇧🇬🇧🇬🇧" style={{width: 100}}/>}
                   style={{ height: '30px' }}
                />
            </Stack>
        </OnBoarding>
    )
};

export default Phone;
