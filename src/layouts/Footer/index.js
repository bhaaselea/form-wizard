import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright(props) {
  return (
    <React.Fragment>
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ backgroundColor: '#0E103D', padding: '8px 0px', color: 'white' }}
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.getelea.com/"
        onClick={() => chrome.tabs.create({ url: 'https://www.getelea.com/' })}
      >
        Elea
      </Link>{' '}
      {new Date().getFullYear()}
      {'. '}
      (Beta) Version 0.0.4
    </Typography>
    </React.Fragment>
  );
}

export default function Footer(props) {
  return (
    <React.Fragment>
      <Copyright {...props} />
    </React.Fragment>
  );
}
