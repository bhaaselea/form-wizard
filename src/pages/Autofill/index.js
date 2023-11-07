import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../../layouts/Header';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { UserContext } from '../../lib/UserContext.js';
import GlobalStyles from '@mui/material/GlobalStyles';

// import './index.css';

export default function Autofill({ handlePageChange }) {
  const { user, logout } = useContext(UserContext);

  const handleLogout = (event) => {
    event.preventDefault();
    console.log('handleclick:' + event.currentTarget.id);
    handlePageChange('SignIn');
    logout();
    chrome.storage.local.set({ loggedIn: false });
  };

  const handleDashboard = (event) => {
    event.preventDefault();
    chrome.runtime.openOptionsPage();
    // chrome.storage.local.set({ loggedIn: false })
  };

  const LogoutButton = () => {
    return (
      <Button
        sx={{
          backgroundColor: '#ECEDFB',
          color: '#0E103D',
          mb: 1,
          ':hover': { backgroundColor: '#121550', color: '#FFFFFF' },
        }}
        size="small"
        onClick={handleLogout}
        variant="contained"
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    );
  };

  const DashboardButton = () => {
    return (
      <Button
        sx={{
          backgroundColor: '#ECEDFB',
          color: '#0E103D',
          mb: 1,
          ':hover': { backgroundColor: '#121550', color: '#FFFFFF' },
        }}
        size="small"
        onClick={handleDashboard}
        variant="contained"
        end={<DashboardIcon />}
      >
        Go to Dashboard
      </Button>
    );
  };

  document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ msg: 'autofill' }, function (resp) {
      console.log(JSON.stringify(resp));
    });
  });

  function autofill() {
    // Child's First Name
    document.querySelector('input#first_44').value = 'Alex';

    //Child's Last Name
    document.querySelector('input#last_44').value = 'Smith';

    // Child's Birthdate
    document.querySelector('input#lite_mode_45').value = '10/24/2014';

    // Child's Gender
    document.querySelector('input#input_267_0').checked = true;

    // Child's Address
    document.querySelector('input#input_69_addr_line1').value =
      '100 Anywhere Rd';
    document.querySelector('input#input_69_city').value = 'Anytown';
    document.querySelector('input#input_69_state').value = 'Connecticut';
    document.querySelector('input#input_69_postal').value = '12345';

    // Parent/Guardian's First Name
    document.querySelector('input#first_47').value = 'Bob';

    // Parent/Guardian's Last Name
    document.querySelector('input#last_47').value = 'Smith';
  }

  const handleAutofill = () => {
    chrome.tabs.query({ active: true }, function (tabs) {
      let tab = tabs[0];

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: autofill,
      });
    });
  };

  return (
    <React.Fragment>
      <Container
        sx={{
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <GlobalStyles
          styles={{
            html: { backgroundColor: '#ECEDFB' },
            '#popup-container': {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 'inherit',
            },
          }}
        />
        <Header />
        <Container
          component="main"
          sx={{ textAlign: 'center', mt: 5 }}
          disableGutters
        >
          <Box>
            <Button
              onClick={handleAutofill}
              variant="contained"
              sx={{
                height: '3rem',
                width: '12rem',
                ml: 'auto',
                mb: 10,
                backgroundColor: '#0E103D',
                ':hover': { backgroundColor: '#121550' },
              }}
            >
              Alex
            </Button>
          </Box>
          <Box>
            <Button
              onClick={handleAutofill}
              variant="contained"
              sx={{
                height: '3rem',
                width: '12rem',
                ml: 'auto',
                mb: 10,
                backgroundColor: '#028A0F',
                ':hover': { backgroundColor: '#01ac12' },
              }}
            >
              Autofill
            </Button>
          </Box>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <LogoutButton />
          <DashboardButton />
        </Container>
      </Container>
    </React.Fragment>
  );
}
