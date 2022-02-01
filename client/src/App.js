import * as React from "react";
// import ReactDOM from "react-dom";

import SideBar from './components/SideBar';

// CSS baseline reset to add consistency among different browser types.
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <SideBar />
    </>
  );
}

export default App;
