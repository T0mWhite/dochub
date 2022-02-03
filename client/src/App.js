import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from "react-dom";

// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

// =========== COMPONENTS =============
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CustomizedList from './components/SideBar';
import PrimarySearchAppBar from "./components/NavBar/index";

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
  },
});

// ============ APP ============

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
        <CssBaseline />
        <CustomizedList/>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
