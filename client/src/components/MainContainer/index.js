import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Fire = styled(LocalFireDepartmentTwoToneIcon)(({ theme }) =>({
    color: theme.palette.error.main,
}));

const NotFire = styled(LocalFireDepartmentTwoToneIcon)(({ theme }) =>({
    color: theme.palette.text.primary,
}));

const Space = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'left',
  fontSize: 30,
  color: theme.palette.primary.contrastText,
}));

const Body = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    fontSize: 16,
    color: theme.palette.primary.text,
  }));

  const DocRating = styled(Paper)(({ theme }) => ({
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.primary.text,
  }));
  
  const AddRevision = styled(Button)(({ theme }) => ({
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),
    textAlign: 'left',
    fontSize: 14,
    color: theme.palette.primary.contrastText,
  }));
  
  const HoistMe = styled(Button)(({ theme }) => ({
    ...theme.typography.subtitle1,
    padding: theme.spacing(1),
    textAlign: 'left',
    fontSize: 14,
    color: theme.palette.secondary.contrastText,
  }));

  const HoistMeCount = styled('div')(({ theme }) => ({
    ...theme.typography.h1,
    padding: theme.spacing(1),
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.primary.contrastText,
  }));


export default function MainGridUi() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Space>
          Hello, Whats the good word? French Fries! Tacos!
          </Space>
        </Grid>
        <Grid item xs={6}>
            <DocRating>RATE THIS DOCUMENTATION
                <Fire/>
                    <Fire/>
                        <Fire/>
                            <NotFire/>
                                <NotFire/>
            </DocRating>
        </Grid>
        <Grid item xs={3}>
            <Button>
            <AddRevision>
                Add Revision
                <AddCircleTwoToneIcon/>
            </AddRevision>
            0 Revisions  
            </Button> 
        </Grid>
        <Grid item xs={3}>
                <Button>
                    <HoistMe>
                    Hoist Me
                    <BeachAccessIcon/>
                    </HoistMe>
                    <HoistMeCount>(34)</HoistMeCount>
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