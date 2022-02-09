import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import DocRating from "./Rating";
import { useParams } from 'react-router-dom';
import Typography from "@mui/material/Typography";

import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TECHNOLOGY_MAIN } from "../../utils/queries";
import { Button } from "@mui/material";

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
  const { technologyName } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TECHNOLOGY_MAIN, {
    variables: { technologyName: technologyName },
  });

  // technologyContents: [{contentBody: []}]
  
  if (loading) {
    return null;
  }
  
  const { technology } = data;

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", margin: "1vw" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DocTitle>{technology.technologyName}</DocTitle>
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
          <AddRevision
            sx={{
              border: 1,
              borderColor: "secondary.main",
              textAlign: "center",
            }}
          >
            Add Revision
            <AddCircleTwoToneIcon />
          </AddRevision>
          0 Revisions
        </Grid>
        <Grid item xs={3}>
          <HoistMe
            sx={{
              border: 1,
              borderColor: "secondary.contrastText",
            }}
          >
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
        </Grid>
        {technology.technologyContents.map((technologyContent) => (
          <Grid item xs={12}>
            <SubTitle>{technologyContent.contentTitle}</SubTitle>
            {technologyContent.contentBody.map((content) => (
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{
                    color: "secondary.main",
                  }}
                >
                  {content.featureName}:
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {content.featureBody}
                </Typography>
                <Typography>Examples:</Typography>
                {content.featureExample.map((example) => (
                  <Typography>{example}</Typography>
                ))}
                <Typography>References:</Typography>
                {content.featureReference.map((reference) => (
                  <Typography>
                    <Link
                      href={reference}
                      variant="body2"
                      sx={{
                        color: "error.main",
                      }}
                    >
                      {reference}
                    </Link>
                  </Typography>
                ))}
              </>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
