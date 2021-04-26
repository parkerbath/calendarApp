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
    maxWidth: 600,
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
  const [test, setTest] = useState([]);

  useEffect(() => {
    firestore
      .collection("testData")
      .get()
      .then(function (querySnapshot) {
        let data = [];
        querySnapshot.forEach(function (doc) {
          data.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setTest(data);
      });
  }, []);

  return (
    <Grid className={classes.root} justify="center" align="center">
      <Grid item>
        {test &&
          test.map((d) => (
            <>
              <Typography>{d.title}</Typography>
              <Typography>{d.body}</Typography>
            </>
          ))}
      </Grid>
      <Grid item className={classes.typography}>
        <Typography variant="h2">Meet the team.</Typography>
      </Grid>
      <Grid item>
        <Grid container justify="space-evenly" align="center">
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.typography} variant="h4">
                  Ashley Buschhorn
                </Typography>
                <img src={ashley} height={400} alt="" />

                <Typography className={classes.typography} variant="h5">
                  computer science and journalism double major in the LMU Class
                  of 2024. Originally from Austin, TX, Buschhorn is an avid
                  writer, photographer, and coder. She focuses on how she can
                  use the technical side of computer science to develop new
                  forms of journalism.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.typography} variant="h4">
                  Hunter Krasa
                </Typography>
                <img src={hunter} height={400} alt="" />
                <Typography className={classes.typography} variant="h5">
                  honors computer science major in the LMU Class of 2024. Krasa
                  is originally from Phoenix, Arizona and is also a part of the
                  Track and Cross Country teams at LMU. Outside of school he
                  enjoys juggling, producing lofi study beats, and playing
                  drums.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.typography} variant="h4">
                  Parker Bath
                </Typography>
                <img src={parker} height={400} alt="" />
                <Typography className={classes.typography} variant="h5">
                  computer science major in the LMU Class of 2022. Coming all
                  the way from Washington DC, Bath is an avid coder, cat dad,
                  and aspiring producer/singer/songwriter.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
