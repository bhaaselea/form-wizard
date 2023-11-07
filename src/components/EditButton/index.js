import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { saveStorageObject } from '../../lib/helpers';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EditButton({ alertText, handleEditButton, editable }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (editable) {
      setOpen(true);
    }
    handleEditButton(!editable);
    // chrome.action.setPopup({ popup: 'sidepanel.html' });

    if (editable) (
      console.log('click?')

    )
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ mt: 5, backgroundColor: '#028A0F', ':hover': { backgroundColor: '#009c10' } }}
        onClick={handleClick}
      >
        {editable ? 'Save' : 'Edit'}
      </Button>
      {/* {editable ? (
        <React.Fragment />
      ) : (
        
      )} */}
      <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            {alertText}
          </Alert>
        </Snackbar>
    </React.Fragment>
  );
}
