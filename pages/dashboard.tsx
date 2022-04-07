import React from 'react';
import Image from 'next/image';
import { Stack } from '@mui/material';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Navigation from '../components/Navigation';
import Navbar from '../assets/Navbar.svg';
import baby from '../assets/baby.png';
import Today from '../assets/Today.svg';

const placeholder = 'Search wellbeing, people, articles';

const Dashboard = () => {
    return (
        <Navigation value={0}>
            <Stack direction='column' spacing={2} sx={{padding: '20px', height: '100%'}}>
                <Navbar style={{width: '100%'}}/>
                <Input size="large" placeholder={placeholder} prefix={<SearchOutlined/>}/>
                <div>
                    <p style={{fontSize: '20px', fontWeight: 'bold'}}>Rise and shine Maria 🌞, </p>
                    <span
                        style={{color: '#7C7195', fontSize: '14px', fontWeight: '400'}}
                    >
                    You may feel acne on your face, <br />
                    Don’t panic, it’s normal.
                </span>
                </div>
                <Image src={baby} alt='baby' />
                <p style={{fontSize: '20px', fontWeight: 'bold'}}>Today ‘s  activities</p>
                <Today />
            </Stack>
        </Navigation>
    )
};

export default Dashboard;
