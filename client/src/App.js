import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom";

// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

// =========== COMPONENTS =============
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

// import PrimarySearchAppBar from "./components/NavBar/index";

// ============ AUTH / APOLLO ==============
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Switch } from "@mui/material";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
      main: '#00cfff',
      contrastText: '#18fd64',
    },
    secondary: {
      main: '#18ccff',
      contrastText: 'rgba(226,230,86,0.87)',
    },
    background: {
      paper: '#2d2d2d',
      default: '#000000',
    },
    text: {
      primary: '#19fd0d',
      secondary: '#0993f9',
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
          <Router>
            <RouterSwitch>
              <Route exact path="/" component={Home} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
            </RouterSwitch>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
