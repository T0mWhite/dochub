import * as React from "react";
import PrimarySearchAppBar from "./components/NavBar/index";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

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

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
      <CssBaseline />
      <Button variant="contained">DocHub!</Button>
      </ThemeProvider>;
    </>
  );
}

export default App;
