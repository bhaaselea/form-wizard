import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { alpha, styled } from '@mui/material/styles';
import {
  loadStorageObjs,
  loadStorageObject,
  saveStorageObject,
} from '../../lib/helpers';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#0E103D' : '#2D3843',
    fontSize: '1rem',
    padding: '8px 10px',
    width: '100%',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function FormTextArea({ label, id, type, editable, ...others }) {
  const [inputValue, setInputValue] = useState();
  // const [name, setName] = React.useState();

  const storageObj = {
    value: '',
    aliases: [],
  };

  return (
    <React.Fragment>
      <Grid item sx={{ pr: '24px' }}>
        <Box component="form" noValidate fullWidth>
          <FormControl variant="standard">
            <InputLabel
              shrink
              htmlFor={id}
              sx={{
                color: '#0E103D',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                minWidth: '133%',
                whiteSpace: 'initial',
              }}
            >
              {label}
            </InputLabel>

            <StyledTextarea
              aria-label="form text area"
              id={id}
              name={id}
              type={type}
              value={inputValue}
              disabled={editable === false}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              {...others}
              minRows={3}
              maxRows={6}
            />
          </FormControl>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
