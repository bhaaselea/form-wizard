// Create context for the user in order to handle authentication and account information
import React, { useState, createContext, useEffect } from 'react';
import { loadStorageObjs } from './helpers';

// Context to use in child components
export const UserContext = createContext({ name: '', email: '', auth: false });

// Provider
export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: '', email: '', auth: false });

  // Check login status once at initial render
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Function to check the login status from extension's local storage (this will be handled differently with server authentication)
  const checkLoginStatus = async () => {
    const [nameVal, loggedInVal, emailVal] = await loadStorageObjs([
      'firstName',
      'loggedIn',
      'email',
    ]);
    if (loggedInVal) {
      setUser((user) => ({
        name: nameVal,
        email: emailVal,
        auth: true,
      }));
    }
  };

  // Login updates the user data with a name parameter
  const login = async (email, pw) => {
    // let usersArr;
    const [nameVal, emailCheck, pwCheck] = await loadStorageObjs(['firstName', 'email', 'pw']);
    if (email === emailCheck && pw === pwCheck) {
      chrome.storage.local.set({ loggedIn: true });
      setUser((user) => ({
        name: nameVal,
        email: email,
        auth: true,
      }));
    } else {
      return user.auth;
    }
  };

  // Logout updates the user data to default
  const logout = () => {
    chrome.storage.local.set({ loggedIn: false });
    setUser((user) => ({
      name: '',
      email: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, checkLoginStatus }}>
      {children}
    </UserContext.Provider>
  );
};
