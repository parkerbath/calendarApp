import React from "react";
import {
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate, Link } from "@reach/router";

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
              <Link to='/testCal' className={classes.text}>
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

              <AccountCircle className={classes.account} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}
