import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import EditButton from '../../EditButton/index.js';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FormInputField from '../../FormInputField/index.js';
import { Box } from '@mui/material';

export default function Education() {
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
            label="School Name"
            id="childSchoolName"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="School Phone Number"
            id="childSchoolTel"
            type="tel"
            editable={editable}
          />
          <FormInputField
            label="School Email"
            id="childSchoolEmail"
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
            id="childSchoolStreet"
            type="text"
            editable={editable}
          />
          <FormInputField label=" City" id="childSchoolCity" type="text" editable={editable} />
          <FormInputField label="State" id="childSchoolState" type="text" editable={editable} />
          <FormInputField
            label="Zip Code"
            id="childSchoolZipCode"
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
            label="Teacher Name"
            id="childSchoolTeacherName"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Teacher Email"
            id="childSchoolTeacherEmail"
            type="text"
            editable={editable}
          />
        </Grid>
        <Grid
          container
          
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '100ch' },
          }}
        >
          <FormInputField
            label="Additional Notes"
            id="childEducationNotes"
            type="text"
            editable={editable}
            multiline
            rows={4}
            
          />
        </Grid>
        <Divider
          variant="middle"
          sx={{ m: 1, backgroundColor: 'black', mt: 4 }}
        />
        <Typography
          variant="h5"
          sx={{
            margin: '0px 0px 20px',
            fontWeight: '700',
            color: '#0E103D',
            pl: '16px',
          }}
        >
          Academic History
        </Typography>
        <Grid
          container
          
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '100ch' },
          }}
        >
          <FormInputField
            label="Areas of Academic Difficulty and/or Personal Challenges"
            id="childAcademicDifficulties"
            type="text"
            editable={editable}
            multiline
            rows={4}
          />
        </Grid>
        <Grid
          container
          
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '100ch' },
          }}
        >
          <FormInputField
            label="Talents, Interests, Academic and/or Personal Strengths"
            id="childAcademicStrengths"
            type="text"
            editable={editable}
            multiline
            rows={4}
          />
        </Grid>
        <Grid
          container
          
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '100ch' },
          }}
        >
          <FormInputField
            label="Does he/she receieve support/services through an Individualized Education Plan (IEP) or 504-Accommodation Plan? If so, please specify which plan."
            id="childAcademicSupportServices"
            type="text"
            editable={editable}
            wrap="true"
            multiline
            rows={4}
          />
        </Grid>
        <Container component="main" sx={{ textAlign: 'end' }}>
          <EditButton
            alertText="Education information saved!"
            handleEditButton={handleEditButton}
            editable={editable}
          />
        </Container>
      </Box>
    </React.Fragment>
  );
}
