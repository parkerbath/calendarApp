import React from "react";
import { Typography, Button, makeStyles, Grid } from "@material-ui/core";
import { navigate } from "@reach/router";
import { auth } from "../firebase";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 150,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "#88cc88",
      boxShadow: "none",
    },
  },
}));

export default function SignOut() {
  const classes = useStyles();

  function handleSignOut() {
    auth
      .signOut()
      .then(() => {
        console.log("signed out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <Grid
      className={classes.root}
      direction='column'
      justify='center'
      align='center'
    >
      <Grid item>
        <Typography variant='h5'>Are you sure you want to sign out?</Typography>
      </Grid>
      <Grid item>
        <Button
          onClick={handleSignOut}
          className={classes.button}
          variant='contained'
        >
          Sign Out
        </Button>
      </Grid>
    </Grid>
  );
}
