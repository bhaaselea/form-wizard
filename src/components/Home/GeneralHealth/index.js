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
import FormTextArea from '../../FormTextArea/index.js';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function GeneralHealth() {
  const [editable, setEditable] = useState(false);
  const [allergies, setAllergies] = useState([{}]);

  const handleEditButton = () => {
    if (editable === false) {
      setEditable(true);
    } else {
      setEditable(false);
    }
  };
  const addAllergy = () => {
    const newAllergy = {};
    setAllergies([...allergies, newAllergy]);
  };

  const removeAllergy = (index) => {
    const updatedAllergies = allergies.filter((allergy, i) => i !== index);
    setAllergies(updatedAllergies);
  };

  return (
    <React.Fragment>
      <Box component="form" sx={{ whiteSpace: 'initial' }}>
        <Grid
          container
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '35ch' },
          }}
        >
          <FormInputField
            label="Child’s Health Concerns"
            id="health-concerns"
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Child’s General State Of Health"
            id=""
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Current Diagnoses"
            id=""
            type="text"
            editable={editable}
          />
          <FormInputField
            label="Serious Conditions, Illnesses and Hospitalizations"
            id=""
            type="text"
            wrap="true"
            editable={editable}
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
            mt: 4,
          }}
        >
          Allergies
        </Typography>

        {allergies.map((allergy, index) => (
          <Grid
            container
            sx={{
              justifyContent: 'flex-start',  alignItems: 'end',
              '& > :not(style)': { m: 1, mt: 4, width: '35ch'},
            }}
          >
            <FormInputField
              label="Allergy"
              id="childAllergy"
              type="text"
              editable={editable}
            />
            <FormInputField
              label="Reaction"
              id="childReaction"
              type="text"
              editable={editable}
            />
            <FormInputField
              label="Treatment"
              id="childTreatment"
              type="text"
              editable={editable}
            />
            <Button
              onClick={() => removeAllergy(index)}
              sx={{
                backgroundColor: '#d11a2a',
                color: '#FFFFFF',
                margin: '1rem',
                width: '12rem',
                height: '2rem',
                mt: 'auto',
                ':hover': { backgroundColor: '#df2235', color: '#FFFFFF' },
              }}
              size="small"
              // onClick={}
              variant="contained"
              startIcon={<DeleteForeverIcon />}
            >
              Remove Allergy
            </Button>
          </Grid>
        ))}
        <Button
          onClick={addAllergy}
          sx={{
            backgroundColor: '#0E103D',
            color: '#FFFFFF',
            margin: '1rem',
            ':hover': { backgroundColor: '#121550', color: '#FFFFFF' },
          }}
          size="small"
          // onClick={}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Allergy
        </Button>
        <Grid
          container
          sx={{
            justifyContent: 'flex-start',
            '& > :not(style)': { m: 1, mt: 4, width: '100ch' },
          }}
        >

          <FormInputField
            label="Additional Notes"
            id="childAllergyNotes"
            type="text"
            editable={editable}
            multiline
            rows={4}
          />
        </Grid>

        <Container component="main" sx={{ textAlign: 'end' }}>
          <EditButton
            alertText="General health information saved!"
            handleEditButton={handleEditButton}
            editable={editable}
          />
        </Container>
      </Box>
    </React.Fragment>
  );
}
