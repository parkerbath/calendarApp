import React from "react";
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
    marginTop: 30,
  },
  card: {
    maxWidth: 600,
  },
}));

export default function AboutContent() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} justify='center' align='center'>
      <Grid item>
        <Typography variant='h2'>Meet the team.</Typography>
      </Grid>
      <Grid item>
        <Grid container justify='space-evenly' align='center'>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant='h4'>Ashley Buschhorn</Typography>
                <img src={ashley} height={400} alt='' />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant='h4'>Hunter Krasa</Typography>
                <img src={hunter} height={400} alt='' />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant='h4'>Parker Bath</Typography>
                <img src={parker} height={400} alt='' />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
