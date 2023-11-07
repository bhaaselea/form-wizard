import * as React from 'react';
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


export default function ProfileData() {
  return (
    <>
      <Container component="main" maxWidth="xs" sx={{textAlign: 'center' }}>
        <Box>
          <Button variant="contained" sx={{ml: 'auto', backgroundColor: "#028A0F", ":hover": {backgroundColor: "#01ac12"} }}>Autofill</Button>
        </Box>
      </Container>
    </>
  );
}
