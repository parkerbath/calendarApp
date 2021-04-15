import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { firestore } from "../firebase";
import {
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Button,
  Box,
  //Modal,
  CardContent,
  CardActions,
  Card,
  zIndex,
  MuiThemeProvider,
  createMuiTheme,
  colors,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    margin: 5,
    //paddingTop: 40,
  },
  grid: {
    marginTop: 20,
    paddingTop: 20,
  },
});

export default function EventList(props) {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    firestore
      .collection("events")
      .get()
      .then(function (querySnapshot) {
        let data = [];
        querySnapshot.forEach(function (doc) {
          data.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setEvents(data);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container align="center" alignItems="center">
        {events &&
          events.map((item) => (
            <Grid item xs={4} style={{ padding: 65 }}>
              <EventCard event={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
