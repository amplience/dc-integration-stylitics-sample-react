import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

/**
 * Navbar Component
 * @param props 
 * @returns 
 */
const Navbar: React.FunctionComponent = (props) => {
    return (
        <AppBar position='sticky'>
            <Toolbar variant='dense'>
                <Typography variant='h6' color='inherit' component='div'>
                    Amplience Stylitics React Sample
                </Typography>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button href='/' sx={{ color: '#fff' }}>
                        Home
                    </Button>
                    <Button href='/classic' sx={{ color: '#fff' }}>
                        Classic
                    </Button>
                    <Button href='/hotspots' sx={{ color: '#fff' }}>
                        Hotspots
                    </Button>
                    <Button href='/moodboard' sx={{ color: '#fff' }}>
                        Moodboard
                    </Button>
                    <Button href='/main-and-detail' sx={{ color: '#fff' }}>
                        Main and Detail
                    </Button>
                    <Button href='/gallery' sx={{ color: '#fff' }}>
                        Gallery
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;