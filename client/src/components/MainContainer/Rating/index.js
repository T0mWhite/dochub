import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#d60e00',
    },
    '& .MuiRating-iconHover': {
        color: '#d60e00',
    },
    '& .MuiRating-iconEmpty': {
        color: '#0091ea',
    },
  });

  const labels = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  };



  export default function DocRating() {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend"></Typography>
        <StyledRating
          name="#0091ea"
          value={value}
          defaultValue={1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1.0}
          icon={<LocalFireDepartmentTwoToneIcon fontSize="inherit" color="#0091ea" />}
          emptyIcon={<LocalFireDepartmentTwoToneIcon fontSize="inherit" color="#0091ea" opacity=".50" />}
        />
         {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      </Box>
    );
  }