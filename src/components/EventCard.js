import React from "react";
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
import EventForm from "./EventForm";
import { firestore } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
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
    margin: 20,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
  },
}));

// const theme = createMuiTheme({
//   palette: {
//     //;primary: { main: purple[500] }, // Purple and green play nicely together.
//     secondary: { main: "#f0fff5" }, // This is just green.A700 as hex.
//   },
//   typography: { useNextVariants: true },
// });

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
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        {/* <MuiThemeProvider theme={theme}> */}
        <Grid container>
          <Grid container direction='row'>
            <Grid item xs={6}>
              <Typography
                align='left'
                variant='h5'
                component='h2'
                // color="secondary"
              >
                {event.title}
              </Typography>

              <Grid item xs={12} align='left' styles={{ paddingTop: 20 }}>
                <Typography align='left' variant='h7'>
                  <Box m={1}> {event.day}</Box>
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Typography variant='h7' color='textSecondary'>
                {event.startTime}
              </Typography>
              <Typography color='textSecondary'>-</Typography>
              <Grid item xs={4} alignItem='right'>
                <Typography
                  align='right'
                  styles={{ padding: 20 }}
                  variant='h7'
                  color='textSecondary'
                >
                  {event.endTime}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction='row' alignContent='left'>
            <Grid item xs={12} alignItem='left'>
              <Typography variant='h7' color='textSecondary'>
                <Box m={4}> {event.location}</Box>
              </Typography>
              <Grid item xs={12}>
                <Typography variant='h7' color='textSecondary'>
                  <Box m={-0.5}> {event.description}</Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </MuiThemeProvider> */}
        <Button
          variant='contained'
          class={classes.button}
          onClick={handleDelete}
        >
          {" "}
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
