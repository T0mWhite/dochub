import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// ============= AUTH + GQL ===============
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { ListItemSecondaryAction } from '@mui/material';

// ========== COPYRIGHT TEXT =========
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        DocumentationHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// ================ SIGN UP ==============

export default function SignUp() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
    try {
      console.log('cucumber acquired');
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      console.log(mutationResponse);
      console.log(token);
      Auth.login(token);
      
    } catch (error) {
      console.log(error);
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
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={4} justifyContent='center'>
              <Grid item xs={10}>Username
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="username"
                  autoFocus
                  onChange={handleChange}
                  sx={{ 
                    color: 'secondary.dark, .25',
                    fontStyle: 'italic',
                    borderColor: 'primary.text',
                    border: 1,
                  }}
                />
              </Grid>
              <Grid item xs={10} sx={{ justifyContent: 'center'}}>Email Address
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  onChange={handleChange}
                  sx={{ 
                    color: 'secondary.dark, .25',
                    fontStyle: 'italic',
                    borderColor: 'primary.text',
                    border: 1,
                  }}
                />
              </Grid>
              <Grid item xs={10}>Password
                <TextField
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
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="If you feel like clicking this check-box, go ahead, we won't send you any emails regardless. It's just for fun."
                />
              </Grid>
            </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}