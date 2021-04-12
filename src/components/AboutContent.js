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
    marginTop: 30,
  },
  card: {
    maxWidth: 600,
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
    <Grid className={classes.root} justify='center' align='center'>
      <Grid item>
        {test &&
          test.map((d) => (
            <>
              <Typography>{d.title}</Typography>
              <Typography>{d.body}</Typography>
            </>
          ))}
      </Grid>
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
