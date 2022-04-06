import React from 'react';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import OnBoarding from '../components/Onboarding';
import OTPInput from '../components/Otp';
import style from '../styles/Code.module.scss'


const Code = () => {
    const router = useRouter();
    const handleBack = () => router.push('/phone');
    const handleNext = () => router.push('/name');

    return (
        <OnBoarding activeStep={2} handleBack={handleBack} handleNext={handleNext} next='/name'>
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
                    Enter the four digit code
                    we sent to your phone
                </h1>
                <OTPInput
                    autoFocus
                    length={6}
                    className={style.otpContainer}
                    inputClassName={style.otpInput}
                    onChangeOTP={(otp) => console.log("String OTP: ", otp)}
                />
            </Stack>
        </OnBoarding>
    )
};

export default Code;
