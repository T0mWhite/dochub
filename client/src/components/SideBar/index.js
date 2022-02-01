import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import styles from "./style.module.css";
import { createTheme } from '@mui/material/styles';

export default function SideBar() {
  
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


  return (
    <div>
      <div className={styles.container}>
        <ThemeProvider>
          <Stack spacing={2} direction="column">
            <Button className={styles.btn} variant="outlined">
              Javascript
            </Button>
            <Button variant="outlined">React.js</Button>
            <Button variant="outlined">Material UI</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </ThemeProvider>
      </div>
    </div>
  );
}
