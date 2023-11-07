import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChildInformation from './ChildInformation';
import GeneralHealth from './GeneralHealth';
import CurrentFunctioning from './CurrentFunctioning';
import Education from './Education';
import { Box } from '@mui/material';

export default function Home() {


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      
       {/* <Box component="form"> */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ECEDFB',
          height: 'auto',

        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <Typography variant="h5" sx={{ margin: "-20px 0px -12px", fontWeight: "700", color: "#0E103D" }}>Child's Information</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <ChildInformation />
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ECEDFB',
          height: 'auto',
          width: 'inherit'
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <Typography variant="h5" sx={{ margin: "-20px 0px -12px", fontWeight: "700", color: "#0E103D" }}>General Health</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <GeneralHealth />
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ECEDFB',
          height: 'auto',
          width: 'inherit'
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <Typography variant="h5" sx={{ margin: "-20px 0px -12px", fontWeight: "700", color: "#0E103D" }}>Current Functioning</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <CurrentFunctioning />
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ECEDFB',
          height: 'auto',
          width: 'inherit'
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel3bh-header"
        >
        <Typography variant="h5" sx={{ margin: "-20px 0px -12px", fontWeight: "700", color: "#0E103D" }}>Education</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <Education />
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* </Box> */}

   </React.Fragment>
  );
}