import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (path: any) => {
        setActiveLink(path);
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: '122px', xs: '40px' },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none',
            }}
            px="20px"
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
            </Link>
            <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" fontFamily="Raleway, Arial">
                <Link
                    to="/"
                    onClick={() => handleLinkClick('/')}
                    style={{
                        textDecoration: 'none',
                        color: '#3A1212',
                        borderBottom: activeLink === '/' ? '3px solid #3DE952' : 'none',
                    }}
                >
                    Home
                </Link>
                <Link
                    to="/CalculateExercise"
                    onClick={() => handleLinkClick('/CalculateExercise')}
                    style={{
                        textDecoration: 'none',
                        color: '#3A1212',
                        borderBottom: activeLink === '/CalculateExercise' ? '3px solid #3DE952' : 'none',
                    }}
                >
                    Calculate exercise
                </Link>
            </Stack>
        </Stack>
    );
};

export default NavBar;