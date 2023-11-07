import React, { useState, useContext } from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Footer from '../layouts/Footer';
import { UserContext } from '../lib/UserContext.js';
import './Options.css';

export default function Options() {
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
      // handlePageChange('Home');
      return (
        <React.Fragment>
          <Dashboard handlePageChange={handlePageChange} currentPage={currentPage} />
          <Footer
            handlePageChange={handlePageChange}
            sx={{
              backgroundColor: '#0E103D',
              padding: '8px 0px',
              color: 'white',
            }}
          />
        </React.Fragment>
      );
    } else if ((currentPage === 'SignIn')) {
      // handlePageChange('Home');
      return (
        <React.Fragment>
          <SignIn
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
        </React.Fragment>
      );
    } else if (currentPage === 'SignUp') {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
  };

  return <div className="App">{renderPage()}</div>;
}
