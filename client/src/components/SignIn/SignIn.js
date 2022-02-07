import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";

// ============= AUTH + GQL ===========
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

// ============= COPYRIGHT TEXT =======
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        DocumentationHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// ============ SIGN IN ============
export default function SignIn() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, {loading, data}] = useMutation(LOGIN_USER);
    console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log(mutationResponse);
      const token = mutationResponse.data.login.token;
      console.log(token);
      Auth.login(token);
    } catch (error) {
      console.log(error);
      console.log(formState);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
        
     
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 5 }}
            >Email Address
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoFocus
                onChange={handleChange}
                sx={{ 
                  color: 'secondary.dark, .25',
                  fontStyle: 'italic',
                  borderColor: 'primary.text',
                  border: 1,
                }}
              />Password
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
                sx={{ 
                  color: 'secondary.dark, .25',
                  fontStyle: 'italic',
                  borderColor: 'primary.text',
                  border: 1,
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  border: 1,
                  mt: 3, 
                  mb: 2,
                  borderColor: 'secondary.main',
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2"
                  sx={{
                    color: 'secondary.main'
                  }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
      </Container>
    </>
  );
}
