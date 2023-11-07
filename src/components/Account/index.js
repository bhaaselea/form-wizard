import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import EditButton from '../EditButton/index.js';
import loadStorageObjs from '../../lib/helpers';
import FormInputField from '../FormInputField';
import { saveStorageObject } from '../../lib/helpers';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const getFieldData = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    firstName: data.get('first-name'),
    lastName: data.get('last-name'),
  });
  chrome.runtime.sendMessage({ type: 'LOAD_DATA', value: 'brandon' });
  chrome.storage.local.get(['firstName']).then((result) => {
    chrome.runtime.sendMessage({
      type: 'LOAD_DATA',
      value: result.firstName[0],
    });
  });
  // chrome.storage.local.set({ firstName: [data.get('first-name')] }).then(() => {
  //   console.log('First name saved');
  // });
};
async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
export default function Account() {
  const [editable, setEditable] = useState(false);

  const handleEditButton = () => {
    if (editable === false) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  };

  const currTab = getCurrentTab;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    console.log('Email and password is set');
    saveStorageObject(
      'firstName',
      data.get('firstName', ['fname, first-name'])
    );
    saveStorageObject('lastName', data.get('lastName', ['lname', 'last-name']));
    saveStorageObject('email', data.get('email', []));

  };

  const input = [
    {
      label: 'First Name',
      id: 'firstName',
      type: 'text',
      value: '',
    },
  ];



  return (
    <React.Fragment>
      <Box component="form" noValidate autoComplete="off">

        <Grid
          container
          // 
          sx={{ justifyContent: 'flex-start', '& > :not(style)': { m: 1, mt: 4, width: '35ch' } }}
        >
          <FormInputField
            label={'First Name'}
            id={'firstName'}
            type={'text'}
            editable={editable}
          />
          <FormInputField label={'Last Name'} id={'lastName'} type={'text'} editable={editable}
/>
        </Grid>
        <Grid
          container
          // 
          sx={{ justifyContent: 'flex-start', '& > :not(style)': { m: 1, mt: 4, width: '35ch' } }}
        >
          <FormInputField label={'Phone Number'} id={'tel'} type={'tel'} editable={editable}
            />
          <FormInputField label={'Email'} id={'email'} type={'email'} editable={editable}
             />
          <FormInputField
            label={'Preferred Contact'}
            id={'prefContact'}
            type={'text'}
            editable={editable}
          />
        </Grid>
        <Grid
          container
          // 
          sx={{ justifyContent: 'flex-start', '& > :not(style)': { m: 1, mt: 4, width: '35ch' } }}
        >
          <FormInputField
            label={'Street Address'}
            id={'address'}
            type={'text'}
            editable={editable}
          />
          <FormInputField label={'City'} id={'city'} type={'text'} editable={editable}
             />

          <FormInputField label={'State'} id={'state'} type={'text'} editable={editable}
            />
          <FormInputField label={'Zip Code'} id={'zipCode'} type={'text'} editable={editable}
            />
        </Grid>
        <Grid
          container
          // 
          sx={{ justifyContent: 'flex-start', '& > :not(style)': { m: 1, mt: 4, width: '35ch' } }}
        >
          <FormInputField
            label={'Relation to Child'}
            id={'childRelation'}
            type={'text'}
            editable={editable}
          />
        </Grid>
        <Grid
          container
          // 
          sx={{ justifyContent: 'flex-start', '& > :not(style)': { m: 1, mt: 4, width: '35ch' } }}
        >
          <FormInputField
            label={'How Did You Hear About us?'}
            id={'discovery'}
            type={'text'}
            editable={editable}
          />
        </Grid>
        <Container component="main" sx={{ textAlign: 'end' }}>
          <EditButton
            alertText="Profile information saved!"
            handleEditButton={handleEditButton}
            editable={editable}
          />
        </Container>
      </Box>
    </React.Fragment>
  );
}
