import React from "react";
import { navigate } from "@reach/router";
import { auth } from "../firebase";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
  },
  item: {
    marginTop: 40,
  },
}));

export default function Home() {
  const classes = useStyles();

  function handleNav() {
    if (auth.currentUser) {
      navigate("/events");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className={classes.root}>
      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <Typography className={classes.item} variant='h1'>
            Welcome to Astro
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.item}
            style={{ textAlign: "center", width: 600 }}
            variant='h6'
          >
            The new state of the art planning and calendar app that combines
            personal and professional life.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            className={classes.item}
            onClick={handleNav}
          >
            {/* for now goes to events page but with authentication should go to signUp page */}
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
