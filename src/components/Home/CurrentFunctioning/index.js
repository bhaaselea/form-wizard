import React, { useState, useEffect, useRef, forwardRef } from 'react';
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

export default function CurrentFunctioning() {
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
            '& > :not(style)': { m: 1, mt: 4, width: '50ch' },
          }}
        >
          <FormInputField
            label="Communication Skills"
            id="childCommSkills"
            type="text"
            multiline
            rows={5}
            editable={editable}
          />
          <FormInputField
            label="Motor Skills"
            id="childMotorSkills"
            type="text"
            multiline
            rows={5}
            editable={editable}
          />
          <FormInputField
            label="Social Skills"
            id="childSocialSkills"
            type="text"
            multiline
            rows={5}
            editable={editable}
          />
        </Grid>
        <Grid
          container
          
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '50ch' },
          }}
        >
          <FormInputField
            label="Daily Living Activities"
            id="childActivities"
            type="text"
            multiline
            rows={5}
            editable={editable}
          />
          <FormInputField
            label="Behaviors Skills"
            id="childBehaviors"
            type="text"
            multiline
            rows={5}
            editable={editable}
          />
          <FormInputField
            label="What They Like/Dislike"
            id="childLikesDislikes"
            type="text"
            multiline
            rows={5}
            editable={editable}
          />
        </Grid>

        <Container component="main" sx={{ textAlign: 'end' }}>
          <EditButton
            alertText="Current functioning information saved!"
            handleEditButton={handleEditButton}
            editable={editable}
          />
        </Container>
      </Box>

    </React.Fragment>
  );
}
