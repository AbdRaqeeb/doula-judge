import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import { Stack, ImageList, Paper } from '@mui/material';
import ArticleTag from '../assets/ArticleTag.svg';
import Appointment from '../assets/Appointment.svg';
import Cravings from '../assets/Cravings.svg';
import Announce from '../assets/Announce.svg';
import Symptom from '../assets/Symptom.svg';
import Belly from '../assets/Belly.svg';
import Smoke from '../assets/Smoke.svg';

const Articles = () => {

    return (
        <Navigation value={2}>
            <Stack direction='column' spacing={2}
                   sx={{padding: '20px', height: '100%', width: '100%', overflow: 'hidden' }}>
                <Header text='Articles' search />
                <ArticleTag />
                <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>Your daily insight</h4>
                <ImageList
                    sx={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
                        gridAutoColumns: "minmax(160px, 1fr)"
                    }}
                >
                    <Cravings />
                    <Symptom />
                    <Belly />
                    <Announce />
                    <Appointment />
                </ImageList>
                <h4 style={{fontSize: '20px', fontWeight: 'bold'}}>You should read up about these </h4>
                <p style={{fontSize: '14px', fontWeight: '400', color: '#7C7195'}}>We’ve curated list of article for you</p>
                <Smoke />
            </Stack>
        </Navigation>
    )
};

export default Articles;
