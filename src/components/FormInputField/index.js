import React, { useState, useEffect, useRef, forwardRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { alpha, styled } from '@mui/material/styles';
import {
  loadStorageObjs,
  loadStorageObject,
  saveStorageObject,
} from '../../lib/helpers';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ChildContext } from '../../lib/ChildContext';

const StyledInput = styled(InputBase)(({ theme }) => ({
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



export default function FormInputField({
  label,
  id,
  type,
  editable,
  wrap,
  ...others
}) {
  const [inputValue, setInputValue] = useState();
  const [save, setSave] = useState();
  const [openCopySnackbar, setOpenCopySnackbar] = React.useState(false);
  const handleClick = () => {
    setOpenCopySnackbar(true);
  };
  const { activeChildIndex, editChild } = useContext(ChildContext);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenCopySnackbar(false);
  };
  // const [name, setName] = React.useState();
  const storageObjs = {
    value: '',
    aliases: [],
  };

  const handleChild = (val) => {
    editChild(activeChildIndex, val);
  }

  const loadInputValue = async () => {
    console.log('hi');
    let inputVal = await loadStorageObject(id);
    try {
    storageObjs.value = inputVal.value;
    storageObjs.aliases = inputVal.aliases;
    if (typeof storageObjs.value === 'object') {
      // Value is empty, don't set InputValue
    } else {


      setInputValue(storageObjs.value);

    }}
    catch {}
  };


  useEffect(() => {

    // Load value from storage
console.log(id);
    loadInputValue(id);


  }, []);



  useEffect(() => {
    console.log('child')
    if ((id === 'childFirstName') && (!editable) && (inputValue !== undefined)) {
      console.log('childFirstName:' + inputValue);
      handleChild(inputValue);
    } else {
      console.log('child');
    }

  }, [editable]);


  return (
    <React.Fragment>
      <Grid item sx={{ pr: '24px' }}>
        <Box component="form" noValidate fullWidth>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            {wrap === 'true' ? (
              <InputLabel
                shrink
                htmlFor={id}
                sx={{
                  color: '#0E103D',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  minWidth: '133%',
                  whiteSpace: 'initial',
                  top: '-20px',
                }}
              >
                {label}
              </InputLabel>
            ) : (
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
            )}
            {editable === false ? (
              
              <React.Fragment>
                <br />
                <Typography
                  sx={{ ':pointer': { cursor: 'pointer' } }}
                  onClick={() => {
                    navigator.clipboard.writeText(inputValue);
                    handleClick();
                  }}
                >
                  {inputValue}
                  
                </Typography>

              </React.Fragment>
            ) : (
              <StyledInput
                id={id}
                name={id}
                type={type}
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value); 
                }}
                {...others}
              />
            )}
          </FormControl>
        </Box>
      </Grid>
      <Snackbar
        open={openCopySnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Copied text field!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
}
