import React, { useState, useEffect } from "react";
import {
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";
import { auth } from "../firebase";

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: "green",
    color: "white",
  },
  text: {
    color: "white",
    textDecoration: "none",
    textDecorationLine: "none",
  },
  about: {
    marginRight: 30,
  },
  account: {
    marginRight: 10,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          justify='space-evenly'
          align='center'
          alignItems='center'
        >
          <Grid item xs={4}>
            <Grid container justify='flex-start'>
              <MenuIcon />
              <Link to='/calendar' className={classes.text}>
                <Typography style={{ marginLeft: 30 }}>Events</Typography>
              </Link>
              <Link to='/assignments' className={classes.text}>
                <Typography style={{ marginLeft: 50 }}>Assignments</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Link to='/' className={classes.text}>
              <Typography variant='h3'>ASTRO</Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify='flex-end'>
              <Link to='/about' className={classes.text}>
                <Typography className={classes.about}>About Us</Typography>
              </Link>
              {currentUser == null ? (
                <Link to='/login' className={classes.text}>
                  <Typography className={classes.about}>Login</Typography>
                </Link>
              ) : (
                <Link to='/sign-out' className={classes.text}>
                  <Typography className={classes.about}>Sign Out</Typography>
                </Link>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}
