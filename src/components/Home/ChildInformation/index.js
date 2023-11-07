import React, { useState, useEffect, useRef, forwardRef, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import EditButton from '../../EditButton/index.js';
import Grid from '@mui/material/Grid';
import FormInputField from '../../FormInputField/index.js';
import { Box } from '@mui/material';
import { saveStorageObject } from '../../../lib/helpers.js';

export default function ChildInformation() {
  const [editable, setEditable] = useState(false);


  const handleEditButton = () => {
    if (editable === false) {
      setEditable(true);
    } else {
      setEditable(false);

    }
  };
  return (
    <React.Fragment>

      <Box component="form">
        <Grid
          container
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '35ch' },
          }}
        >
          <FormInputField
            label="First Name"
            id="childFirstName"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Last Name"
            id="childLastName"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Birth Date"
            id="childBirthDate"
            type="date"
            editable={editable}
          />
          <FormInputField
            label="Gender"
            id="childGender"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Ethnicity"
            id="childEthnicity"
            type="text"
            editable={editable}
          />
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '35ch' },
          }}
        >
          <FormInputField
            label="Street Address"
            id="childAddress"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="City"
            id="childCity"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="State"
            id="childState"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Zip Code"
            id="childZipCode"
            type="text"
            editable={editable}
          />
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '35ch' },
          }}
        >
          <FormInputField
            label="Height Feet"
            id="childHeightFt"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Height Inches"
            id="childHeightIn"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Weight (lbs.)"
            id="childWeight"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Blood Type"
            id="childBloodType"
            type="text"
            editable={editable}
          />
        </Grid>
        <Container component="main" sx={{ textAlign: 'end' }}>
          <EditButton
            alertText="Child information saved!"
            handleEditButton={handleEditButton}
            editable={editable}
          />
        </Container>
      </Box>

    </React.Fragment>
  );
}
