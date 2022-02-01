import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <CssBaseline />
      <Button variant="contained">DocHub!</Button>
      <SignIn />
    </>
  );
}

export default App;
