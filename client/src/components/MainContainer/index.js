import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DocRating from './Rating';

const DocTitle = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2, 4),
  position: 'relative',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: 30,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const SubTitle = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2, 4),
  position: 'relative',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: 20,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const Body = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4),
    position: 'relative',
    display: 'flex',
    textAlign: 'center',
    fontSize: 16,
    color: theme.palette.primary.text,
  }));
  
  const AddRevision = styled(Button)(({ theme }) => ({
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),  
    position: 'relative',
    margin: 'auto',
    display: 'flex',
    textAlign: 'center',
    fontSize: 14,
    color: theme.palette.primary.contrastText,
  }));
  
  const HoistMe = styled(Button)(({ theme }) => ({
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),
    position: 'relative',
    display: 'flex',
    textAlign: 'center',
    fontSize: 14,
    color: theme.palette.secondary.contrastText,
  }));

  const HoistMeCount = styled('div')(({ theme }) => ({
    ...theme.typography.h1,
    padding: theme.spacing(1),
    position: 'relative',
    display: 'flex',
    textAlign: 'center',
    fontSize: 16,
    color: theme.palette.primary.contrastText,
  }));


export default function MainGridUi() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', margin: '1vw'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DocTitle>
          Document Title
          </DocTitle>
          <SubTitle>
            Subtitle
          </SubTitle>
        </Grid>
        <Grid item xs={3} sx={{ 
          flexGrow: 1,
          display: 'flex',
          textAlign: 'center', 
          }}>
          Rate this Doc...
            <DocRating/>
        </Grid>
        <Grid item xs={3}>
            <Button sx={{
              border: 1,
              borderColor: 'secondary.main',
            }}>
            <AddRevision sx={{
              textAlign: 'center',
            }}>
                Add Revision
                <AddCircleTwoToneIcon/>
            </AddRevision>
            0 Revisions  
            </Button> 
        </Grid>
        <Grid item xs={3}>
                <Button sx={{
              border: 1,
              borderColor: 'secondary.contrastText',
            }}>
                    <HoistMe>
                    Hoist Me
                    <BeachAccessIcon/>
                    </HoistMe>
                    <HoistMeCount sx={{
                      color: 'secondary.main',
                    }}>
                      (34)</HoistMeCount>
                </Button>
                
        </Grid>
        <Grid item xs={12}>
            <Body>
                dsfoalkujgnbwaw gfoi  wgal nkjergfsdo ihergw loi hgwrer lih waer lihlgawerhli glhisderglhi reg ilhgserilhf eiouhwfae kue wfah ukfewa h oiauwefo hoawekuh few lkifwekliu fawekufwe hklfweruhawefglkuufwe hwe okhuif hwe uklwsergak uh
            sdaflkjnbasgikjbnweoui  awkihnw oihaew oawer oihagoihaw erujsgurashbgoiergg akgiaujbh a igahfouj werikgraukjr g hergiouherg ikuujerg  uhrweikuhbkujhsderfaku ergukreg ui rgiukuhrgeu
            </Body>
        </Grid>
      </Grid>
    </Box>
  );
}