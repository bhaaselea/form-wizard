import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import './SidePanel.css';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Autofill from '../pages/Autofill';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Home from '../components/Home';
import Account from '../components/Account';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function SidePanel() {

  return (
    // <React.Fragment>
    <div className="App">
      {/* <ProfileData /> */}
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: '100%',
            overflow: 'auto',
          }}
        >
      <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
      <Account sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }} />
      </Container>
      </Box>
      {/* <Footer handlePageChange={handlePageChange}/> */}
    </div>
    // </React.Fragment>
  );
}
