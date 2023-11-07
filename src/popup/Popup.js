import React, { useState, useContext } from 'react';
import { UserContext } from '../lib/UserContext.js';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Autofill from '../pages/Autofill';
import Footer from '../layouts/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export default function Popup() {
  const { user, checkLoginStatus } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = useState(() => {
    getInitState();
  });
  const [currentPage, setCurrentPage] = useState('SignIn');

  async function getInitState() {
    let result = await chrome.storage.local.get(['loggedIn']);
    console.log('Value currently is ' + result.loggedIn);
    setLoggedIn(result.loggedIn);
  }

  const handlePageChange = (page) => setCurrentPage(page);
  const handleLoggedIn = (bool) => setLoggedIn(bool);

  const renderPage = () => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.loggedIn) {
        setLoggedIn(true);
      } else setLoggedIn(false);
    });
    if (user.auth) {
      return (
        <div
          sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Autofill
            handlePageChange={handlePageChange}
            handleLoggedIn={handleLoggedIn}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Footer
              handlePageChange={handlePageChange}
              sx={{
                backgroundColor: '#white',
                padding: '8px 0px',
                color: 'black',
              }}
            />
          </Box>
        </div>
      );
      // chrome.action.setPopup({popup: 'sidepanel.html'});
    } else if (currentPage === 'SignIn') {
      return (
        <div
          sx={{
            height: '100%',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <SignIn
            handlePageChange={handlePageChange}
            handleLoggedIn={handleLoggedIn}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Footer
              handlePageChange={handlePageChange}
              sx={{
                backgroundColor: '#white',
                padding: '8px 0px',
                color: 'black',
              }}
            />
          </Box>
        </div>
      );
    } else if (currentPage === 'SignUp') {
      return (
        <div
          sx={{
            height: '100%',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <SignUp
            handlePageChange={handlePageChange}
            handleLoggedIn={handleLoggedIn}
          />
            <Footer
              handlePageChange={handlePageChange}
              sx={{
                backgroundColor: '#white',
                padding: '8px 0px',
                color: 'black',
              }}
            />

        </div>
      );
    }
    // chrome.runtime.openOptionsPage();
  };

  return <React.Fragment>{renderPage()}</React.Fragment>;
}
