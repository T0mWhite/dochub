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
import CustomizedList from "./components/SideBar/index";
import MainGridUi from "./components/MainContainer/index";
import ResponsiveAppBar from "./components/DrawerTest/index";
// import PrimarySearchAppBar from "./components/NavBar/index";

// ============ AUTH / APOLLO ==============
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
 
  const token = localStorage.getItem('id_token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
 
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// ============ APP ============

function App() {
  return (
    <>
   <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar position="fixed"/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CustomizedList item/>
          </Grid>
          <Grid item xs={9}>
            <MainGridUi />
          </Grid>
        </Grid>
      </Box>
      <CssBaseline/>
    </ThemeProvider>
   </ApolloProvider>
    </>
  );
}

export default App;
