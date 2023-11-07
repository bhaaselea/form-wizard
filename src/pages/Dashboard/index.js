import React, { useState, useContext, useEffect, createContext} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import Home from '../../components/Home';
import Account from '../../components/Account';
import Logo from '../../assets/images/logo-transparent.png';
import './index.css';
import { UserContext } from '../../lib/UserContext.js';
import Paper from '@mui/material/Paper';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomTabs from '../../components/CustomTabs';
import { ChildProvider } from '../../lib/ChildContext';

const drawerWidth = 230;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    boxShadow: 'rgba(0, 0, 0, 0.14) 2px 0px 5px 1px',
    backgroundColor: '#0E103D',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function Dashboard({ handlePageChange, currentPage }) {
  const { user, logout } = useContext(UserContext);
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [expand, setExpand] = useState(true);

  const [selectedIndex, setSelectedIndex] = React.useState(0);


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    console.log(event);
  };



  const renderPage = () => {
    if (selectedIndex === 0) {
      return (
        // <Grid item>
        <Box>
          <CustomTabs />
        </Box>

        // </Grid>
      );
    } else if (selectedIndex === 1) {
      return (
        // <Grid item>
        <Box>
          {/* <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#ECEDFB' }}> */}
          <Paper sx={{ p: 4, backgroundColor: '#ECEDFB' }}>
            <Account />
          </Paper>
        </Box>
        // </Grid>
      );
    }
  };


  const handleClick = (event) => {
    event.preventDefault();
    console.log('handleclick:' + event.currentTarget.id);
    handlePageChange('SignIn');
    logout();
    // chrome.storage.local.set({ loggedIn: false })
  };

  const mainListItems = (
    <React.Fragment>
      <Container sx={{ alignItems: 'center', overflow: 'hidden' }}>
        <img id="logo-png" src={Logo} alt="Elea Logo" />
      </Container>
      <ListItemButton
        id="Home"
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <HomeIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Home" sx={{ color: 'white' }} />;
      </ListItemButton>
      <ListItemButton
        id="Account"
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <AccountCircleIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Account" sx={{ color: 'white' }} />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <MedicalInformationIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Forms" sx={{ color: 'white' }} />
      </ListItemButton>
    </React.Fragment>
  );

  const secondaryListItems = (
    <React.Fragment>
      <a style={{ textDecoration: 'none' }} href="mailto:info@getelea.com">
        <ListItemButton id="help">
          <ListItemIcon>
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Help" sx={{ color: 'white' }} />
        </ListItemButton>
      </a>
      <ListItemButton id="logout" onClick={handleClick}>
        <ListItemIcon>
          <LogoutIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Logout" sx={{ color: 'white' }} />
      </ListItemButton>
    </React.Fragment>
  );

  return (
    <ChildProvider>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{ backgroundColor: '#0E103D', padding: '0px' }}
        >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}
            >
              Welcome, {user.name}!
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{}}>
          <List
            component="nav"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'normal',
              height: '100%',
              padding: '0px',
            }}
          >
            <Box sx={{ height: 'inherit' }}>{mainListItems}</Box>
            <Box sx={{ height: 'auto', pb: '1rem' }}>
              <Divider
                variant="middle"
                sx={{ my: 1, backgroundColor: 'white' }}
              />
              {secondaryListItems}
            </Box>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
            {/* <Grid container spacing={4}> */}
            {/* Main Dashboard Page */}
            {renderPage()}
            {/* </Grid> */}
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
        <Divider />
      </Box>
    </ChildProvider>
  );
}
