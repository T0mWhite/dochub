import * as React from "react";
import ReactDOM from "react-dom";
// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

// =========== COMPONENTS =============
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

// ============ APP ============

function App() {
  return (
    <>
      <CssBaseline />
      <SignIn />
      <SignUp />

    </>
  );
}

export default App;
