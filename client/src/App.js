import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

// =========== COMPONENTS =============
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CustomizedList from './components/SideBar/index';
import MainGridUi from './components/MainContainer/index.js';
import PrimarySearchAppBar from "./components/NavBar/index";

// ============ THEME ============

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
      contrastText: '#1cfb3a',
      light: '#272727',
    },
    secondary: {
      main: '#00f5b5',
      contrastText: 'rgba(226,230,86,0.87)',
    },
    background: {
      default: '#000000',
      paper: '#181818',
    },
    text: {
      primary: '#00b7ff',
    },
    error: {
      main: '#d60e00',
    },
  },
});

// ============ APP ============

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar position="fixed"/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <CustomizedList item/>
          </Grid>
          <Grid item xs={10}>
            <MainGridUi />
          </Grid>
        </Grid>
      </Box>
      <CssBaseline />
    
    </ThemeProvider>
    </>
  );
}

export default App;
