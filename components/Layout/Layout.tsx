import React, { ReactNode, ReactElement } from 'react';
import { Container, Box, CssBaseline, Grid } from '@mui/material';
import HeaderIcon from '../../assets/HeaderIcon.svg'

export interface IContainerProps {
    children: ReactElement | ReactNode;
}

const Layout = ({children}: IContainerProps) => {
    return (
        <>
            <CssBaseline/>
            <Container fixed sx={{
                bgcolor: '#D5D5D5',
                position: 'relative',
            }}>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        height: '100vh',
                        width: '100%',
                    }}
                >
                    <Grid item>
                        <Box sx={{
                            bgcolor: '#fff',
                            height: '812px',
                            width: '375px'
                        }}>
                            <HeaderIcon style={{ height: '5%'}} />
                            <div style={{ height: '95%', position: 'relative' }}>
                                {children}
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Layout;
