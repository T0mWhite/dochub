import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from "react-dom";

// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

// =========== COMPONENTS =============
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import SideBar from './components/SideBar';
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
  },
});

// ============ APP ============

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
      <CssBaseline />
      <SideBar />
      <SignIn />
      <SignUp />
    </ThemeProvider>
    </>
  );
}

export default App;
