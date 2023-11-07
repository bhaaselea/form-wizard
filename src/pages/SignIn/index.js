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
import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container';
import { UserContext } from '../../lib/UserContext.js';
import Header from '../../layouts/Header';


export default function SignIn({ handlePageChange, handleLoggedIn }) {
  const { user , login } = useContext(UserContext);
  const [error,setError]=useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let email = data.get('email');
    let pw = data.get('password');

    console.log(email + pw)

    console.log('hi');

    login(email, pw).then((result) => {
      if (result) {
        chrome.runtime.openOptionsPage();
      } else {
        setError('Incorrect email or password!');
        
      }
    });

  };

  return (
    <React.Fragment>
      <Header />
      <Container component="main" disableGutters maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 

          <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
              sx={{ mt: 1, mb: 3, backgroundColor: "#0E103D" }}
              onClick={() => handleSubmit}
            >
              Sign In
            </Button>
          {error?<Alert severity="error" sx={{mb: 1}}>{error}</Alert>:null}
                <Link onClick={() => handlePageChange('SignUp')} variant="body1" sx={{display: "block", textAlign:"center"}}>
                  Don't have an account? Sign Up
                </Link>
          </Box>
        </Box>
      </Container>
      </React.Fragment>
  );
}
