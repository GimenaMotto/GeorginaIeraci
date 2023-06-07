import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Circle } from '@mui/icons-material';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', mt: 3 }} className='myAppBar'>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.1em', mt: 2, ml: 24 }} className='Geor'>
                            GEORGINA
                            <br />
                            <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.1em', ml: 2, mt: 0.8 }} className='Geor' >
                                Ieraci
                            </Typography>
                        </Typography>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 4, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400 }} className='navLink' >
                            2D
                        </Typography>
                        <Link to='/'>
                            <Circle sx={{ mt: 1, ml: 8.5 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400 }} className='navLink' >
                            3D
                        </Typography>
                        <Link to='/'>
                            <Circle sx={{ mt: 1, ml: 8.5 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400 }} className='navLink'>
                            Curadurías
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, ml: 9 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400 }} className='navLink' >
                            Txts
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, ml: 9 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400 }} className='navLink' >
                            Bio
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, ml: 9 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, mr: 20, fontFamily: 'Geologica', fontWeight: 400 }} className='navLink'>
                            Statement
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, mr: 11 }} className='Circle' />
                        </Link>
                    </Box>


                </Toolbar>
            </AppBar>
        </div >
    );
};

export default NavBar;


