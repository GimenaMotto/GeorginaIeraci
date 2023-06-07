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
                        <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em', mt: 2, ml: 24 }} className='Geor'>
                            GEORGINA
                            <br />
                            <Typography variant='h5' sx={{ fontFamily: 'Geologica', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.05em', ml: 3.3, mt: 0.8 }} className='Geor' >
                                IERACI
                            </Typography>
                        </Typography>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 4, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem' }} className='navLink' >
                            2D
                        </Typography>
                        <Link to='/2D'>
                            <Circle sx={{ mt: 1, ml: 8.9 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem' }} className='navLink' >
                            3D
                        </Typography>
                        <Link to='/3D'>
                            <Circle sx={{ mt: 1, ml: 8.9 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem' }} className='navLink'>
                            Curadurías
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, ml: 9.2 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem' }} className='navLink' >
                            Txts
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, ml: 9.4 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3, mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem' }} className='navLink' >
                            Bio
                        </Typography>
                        <Link to='/' >
                            <Circle sx={{ mt: 1, ml: 9.4 }} className='Circle' />
                        </Link>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
                        <Typography variant='h5' sx={{ ml: 9, mr: 20, fontFamily: 'Geologica', fontWeight: 400, fontSize: '1.3rem' }} className='navLink'>
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


