import * as React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

// =========== COMPONENTS =============
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import CustomizedList from "./SideBar/index";
import MainGridUi from "./MainContainer/index";
import ResponsiveAppBar from "./Nav/index";
// import PrimarySearchAppBar from "./NavBar/index";

function Home() {
  return (
    <>
    <CssBaseline />
      <ResponsiveAppBar position="fixed" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CustomizedList item />
          </Grid>
          <Grid item xs={9}>
            <MainGridUi />
          </Grid>
        </Grid>
      </Box>
      </>
  );
}

export default Home;
