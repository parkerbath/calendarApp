import React from "react";
import { Toolbar, Typography, makeStyles, Grid, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";

const useStyles = makeStyles(() => ({
  toolbar: {
    background: "linear-gradient(178deg, #63f883 -10%, #163c1e 105%)",
    border: 0,
    borderRadius: 2,
    boxShadow: "0 5px 32px 25px rgba(5, 255, 20, .15)",
    color: "white",
    height: 48,
    padding: "0 30px",
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
          justify="space-evenly"
          align="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Grid container justify="flex-start">
              <MenuIcon />
              <Link to="/calendar" className={classes.text}>
                <Typography style={{ marginLeft: 30 }}>
                  <Box fontWeight={500}>Events</Box>
                </Typography>
              </Link>
              <Link to="/assignments" className={classes.text}>
                <Typography style={{ marginLeft: 50 }}>
                  <Box fontWeight={500}>Assignments</Box>
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Link to="/" className={classes.text}>
              <Typography variant="h3">ASTRO</Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify="flex-end">
              <Link to="/about" className={classes.text}>
                <Typography className={classes.about}>
                  <Box fontWeight={500}>About Us</Box>
                </Typography>
              </Link>
              <Link to="/login" className={classes.text}>
                <Typography className={classes.about}>
                  <Box fontWeight={500}>Login</Box>
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}
