import React from "react";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <Typography
        variant='h1'
        style={{ display: "flex", justifyContent: "center" }}
      >
        Calendar App
      </Typography>
      <Typography
        variant='body1'
        style={{ display: "flex", justifyContent: "center" }}
      >
        Brought to you by the AstroHAPSquad
      </Typography>
    </>
  );
}

export default App;
