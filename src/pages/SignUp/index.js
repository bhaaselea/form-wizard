import React, { useState, useContext} from 'react';
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
import { saveStorageObject } from '../../lib/helpers';
import Header from '../../layouts/Header';

export default function SignUp({ handlePageChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    console.log('Email and password is set');
    saveStorageObject('firstName', data.get('firstName'), ['fname, first-name']);
    saveStorageObject('lastName', data.get('lastName'), ['lname', 'last-name']);
    saveStorageObject('email', data.get('email'), []);
    chrome.storage.local.set({ pw: data.get('password') })
    // chrome.storage.local
    //   .set({ [data.get('email')]: data.get('password') })
    //   .then(() => {
    //     console.log('Email and password is set');
    //   });
      handlePageChange('SignIn');
  };

  return (
    <React.Fragment>
      <Header />
      <Container component="main" disableGutters maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0 }}
          >

                <TextField
                  margin="normal"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  sx={{mb: 0}}
                />

                <TextField
                margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx={{mb: 0}}
                />

                <TextField
                margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{mb: 0}}
                />

                <TextField
                margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{mb: 0}}
                />
                            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
                  <Link href="#" variant="body1">
                  Forgot password?
                </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, backgroundColor: "#028A0F", ":hover": {backgroundColor: "#01ac12"} }}
            >
              Sign Up
            </Button>
                <Link onClick={() => handlePageChange('SignIn')} variant="body1" sx={{display: "block", textAlign:"center"}}>
                  Already have an account? Sign in
                </Link>
              </Box>
        </Box>
      </Container>
      </React.Fragment>
  );
}
