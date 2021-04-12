import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate, Link } from "@reach/router";
import { firestore } from "../firebase";

// const useStyles = makeStyles(() => ({
//   root: {
//     textAlign: "center",
//     marginTop: 50,
//   },
//   button: {
//     padding: 10,
//     margin: 10,
//     color: "red",
//     alignSelf: "center",
//   },
//   input: {
//     padding: 10,
//     margin: 10,
//     width: "50%",
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: 50,
  },
  grid: {
    marginTop: 60,
    width: 500,
    height: 450,
  },
  button: {
    marginTop: 20,
    padding: 10,
    margin: 10,
    alignSelf: "center",
  },
  input: {
    padding: 10,
    margin: 10,
    width: "50%",
  },
}));

export default function EventForm(props) {
  //   const {
  //     title,
  //     day,
  //     startTime,
  //     endTime,
  //     location,
  //     description,
  //     addToList,
  //   } = props;
  const classes = useStyles();
  const { addToList } = props;
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [eventItem, setEventItem] = useState({});

  function handleSubmit() {
    firestore
      .collection("events")
      .add({
        title,
        day,
        startTime,
        endTime,
        location,
        description,
      })
      .then(() => {
        console.log("Document successfully written!");
        setTitle("");
        setDay("");
        setStartTime("");
        setEndTime("");
        setLocation("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItem="center">
        <Grid item xs={12}>
          <Typography variant="h3">MEOW EVENT</Typography>
        </Grid>
        <Grid item xs={5} style={{ marginTop: 25 }}>
          <input
            className={classes.input}
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>

        <Grid item xs={5} style={{ marginTop: 25 }}>
          <input
            className={classes.input}
            placeholder="Starts at"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <input
            className={classes.input}
            placeholder="Date"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <input
            className={classes.input}
            placeholder="Ends at"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 15 }}>
          <input
            className={classes.input}
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Grid>
          {/* {events &&
            events.map((event) => (
              <>
                <Typography>{event.title}</Typography>
                <Typography>{event.date}</Typography>
                <Typography>{event.startTime}</Typography>
                <Typography>{event.endTime}</Typography>
                <Typography>{event.location}</Typography>
                <Typography>{event.description}</Typography>
              </>
            ))} */}
        </Grid>
      </Grid>
    </div>
  );
}
