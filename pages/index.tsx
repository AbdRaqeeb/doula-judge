import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link'
import { Grid, Stack } from '@mui/material';
import Doula from '../assets/Doula.svg'
import ArrowRight from '../assets/ArrowRight.svg'



const Home: NextPage = () => {
    return (
        <>
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                sx={{width: '100%', height: '70%'}}
            >
                <Doula/>
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
                    <p>Get Started</p>
                    <Link href='/'>
                        <a>
                            <ArrowRight style={{ cursor: 'pointer' }} />
                        </a>
                    </Link>
                </Stack>
            </Grid>
        </>
    )
};

export default Home
