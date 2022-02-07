import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import DocRating from "./Rating";
import Typography from "@mui/material/Typography";

import Constex from "../../static/images/Constexample.PNG";
import Letex from "../../static/images/Letexample.PNG";

const DocTitle = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2, 4),
  position: "relative",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  fontSize: 30,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const SubTitle = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2, 4),
  position: "relative",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  fontSize: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const Body = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  position: "relative",
  display: "flex",
  textAlign: "center",
  fontSize: 16,
  color: theme.palette.primary.text,
}));

const AddRevision = styled(Button)(({ theme }) => ({
  ...theme.typography.subtitle1,
  padding: theme.spacing(1),
  position: "relative",
  margin: "auto",
  display: "flex",
  textAlign: "center",
  fontSize: 14,
  color: theme.palette.primary.contrastText,
}));

const HoistMe = styled(Button)(({ theme }) => ({
  ...theme.typography.subtitle1,
  padding: theme.spacing(1),
  position: "relative",
  display: "flex",
  textAlign: "center",
  fontSize: 14,
  color: theme.palette.secondary.contrastText,
}));

const HoistMeCount = styled("div")(({ theme }) => ({
  ...theme.typography.h1,
  padding: theme.spacing(1),
  position: "relative",
  display: "flex",
  textAlign: "center",
  fontSize: 16,
  color: theme.palette.primary.contrastText,
}));

export default function MainGridUi() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", margin: "1vw" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DocTitle>Javascript</DocTitle>
          <SubTitle>Variables</SubTitle>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            flexGrow: 1,
            display: "flex",
            textAlign: "center",
          }}
        >
          Rate this Doc...
          <DocRating />
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{
              border: 1,
              borderColor: "secondary.main",
            }}
          >
            <AddRevision
              sx={{
                textAlign: "center",
              }}
            >
              Add Revision
              <AddCircleTwoToneIcon />
            </AddRevision>
            0 Revisions
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{
              border: 1,
              borderColor: "secondary.contrastText",
            }}
          >
            <HoistMe>
              Hoist Me
              <BeachAccessIcon />
            </HoistMe>
            <HoistMeCount
              sx={{
                color: "secondary.main",
              }}
            >
              (34)
            </HoistMeCount>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom component="div" sx={{
            color: 'secondary.main',
          }}>
            Var:</Typography>
          <Typography variant="body1" gutterBottom>
            Deprecated variable declaration. Not recommended for use.
          </Typography>
          <Typography variant="h6" gutterBottom component="div" sx={{
            color: 'secondary.main',
          }}>
            Let:</Typography>
          <Typography variant="body1" gutterBottom>
            Standard variable declaration. Use let to create a variable that you
            will want to change or edit. (Mutable variable)
          </Typography>
          <Typography variant="h6" gutterBottom component="div" sx={{
            color: 'secondary.main',
          }}>
            Const:</Typography>
          <Typography variant="body1" gutterBottom>
            Use const(ant) to create a variable that you don't want to change.
            (Immutable variable)
          </Typography>
          <Typography variant="h6" gutterBottom component="div" sx={{
            color: 'secondary.contrastText',
          }}>
            Examples:
          </Typography>
          <Typography variant="h6" gutterBottom component="div" sx={{
            color: 'secondary.main',
          }}>
            Const:
            </Typography>
          <img
          src={Constex}
          alt="ex1"
          padding="2"
        />
          <Typography variant="h6" gutterBottom component="div" sx={{
            color: 'secondary.main',
          }}>
            Let:
          </Typography>
          <img
          src={Letex}
          alt="ex1"
        />
          <Typography>
            References:
          </Typography>
          <Typography>
          <Link href="https://www.w3schools.com/jsref/jsref_var.asp" variant="body2" sx={{
            color: 'error.main',
          }}>
          https://www.w3schools.com/jsref/jsref_var.asp
          </Link>
          </Typography>
          <Typography>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var" variant="body2" sx={{
            color: 'error.main',
          }}>
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
          </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
