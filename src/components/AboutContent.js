import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import {
  Typography,
  Grid,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import hunter from "../assets/hunter.jpeg";
import ashley from "../assets/ashley.JPG";
import parker from "../assets/parker.jpeg";

const useStyles = makeStyles(() => ({
  root: {
    margin: 30,
  },
  card: {
    // maxWidth: 600,
    margin: 30,
    boxShadow: "0 3px 15px 5px rgba(0, 0, 0, .06)",
    borderRadius: 5,
  },
  typography: {
    margin: 40,
  },
}));

export default function AboutContent() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} justify='center' align='center'>
      <Grid item className={classes.typography}>
        <Typography variant='h2'>Meet the team.</Typography>
      </Grid>
      <Grid item>
        <Grid container align='center'>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Grid item container>
                  <Grid item xs={4}>
                    <img src={ashley} height={400} alt='' />
                  </Grid>
                  <Grid item xs={8} container direction='column'>
                    <Grid item>
                      <Typography className={classes.typography} variant='h4'>
                        Ashley Buschhorn
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.typography} variant='h5'>
                        Computer science and journalism double major in the LMU
                        Class of 2024. Originally from Austin, TX, Buschhorn is
                        an avid writer, photographer, and coder. She focuses on
                        how she can use the technical side of computer science
                        to develop new forms of journalism.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Grid item container>
                  <Grid item xs={8} container direction='column'>
                    <Grid item>
                      <Typography className={classes.typography} variant='h4'>
                        Hunter Krasa
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.typography} variant='h5'>
                        Honors computer science major in the LMU Class of 2024.
                        Krasa is originally from Phoenix, Arizona and is also a
                        part of the Track and Cross Country teams at LMU.
                        Outside of school he enjoys juggling, producing lofi
                        study beats, and playing drums.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={hunter} height={400} alt='' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Grid item container>
                  <Grid item xs={4}>
                    <img src={parker} height={400} alt='' />
                  </Grid>
                  <Grid item xs={8} container direction='column'>
                    <Grid item>
                      <Typography className={classes.typography} variant='h4'>
                        Parker Bath
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.typography} variant='h5'>
                        Computer science major in the LMU Class of 2022. Coming
                        all the way from Washington DC, Bath is an avid coder,
                        cat dad, and aspiring producer/singer/songwriter.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
