import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Button,
  Box,
  CardContent,
  Card,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { firestore } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    paddingTop: 20,
    minHeight: 120,
    maxWidth: 300,
    margin: 10,
    borderRadius: 5,
    boxShadow: "0 3px 15px 5px rgba(0, 0, 0, .06)",
    //NOTE: later on I am going to restyle the cards to be themed like the navbar with the title and date at the top
    // background: "linear-gradient(145deg, #63f883 10%, #163c1e 105%)",
  },
  grid: {
    width: 500,
    height: 450,
    padding: 20,
    margin: 0,
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    padding: 5,
    marginLeft: 200,
  },
}));

export default function EventCard(props) {
  const { event } = props;
  const classes = useStyles();

  function handleDelete() {
    var selectedAssignment = firestore
      .collection("events")
      .where("title", "==", event.title);
    selectedAssignment.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
        <Grid item xs={12} align="left" styles={{ paddingTop: 20 }}>
                <Typography align="left" color="textSecondary" gutterBottom>
                  {event.date.month}/{event.date.day}/{event.date.year} 
                </Typography>
              </Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              <Typography
                align="left"
                variant="h5"
                component="h2"
                // color="secondary"
              >
                {event.title}
              </Typography>


            </Grid>

            <Grid item xs={6} align="right">
              <Typography variant="h7" color="textSecondary">
                {event.startTime}
              </Typography>
              <Typography color="textSecondary">-</Typography>
              <Grid item xs={6} align="right">
                <Typography
                  align="right"
                  variant="h7"
                  color="textSecondary"
                >
                  {event.endTime}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" alignContent="left" container align="left">
            <Grid item xs={12} style={{marginTop: 10}} >
              <Typography variant="h7" >
                {event.location}
              </Typography>
            </Grid>
            <Grid item xs={20} style={{marginTop: 10}}>
              <Typography variant="h7" color="textSecondary" >
                  {event.description}
              </Typography>
            </Grid>
            <Grid item xs={10} align="left">
              <Button className={classes.button} onClick={handleDelete}>
                <DeleteOutlined style={{ color: "red" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
