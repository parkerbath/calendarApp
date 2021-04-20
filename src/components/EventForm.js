import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Button,
  Box,
  Modal,
  Color,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate, Link } from "@reach/router";
import { firestore } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: 25,
    padding: 10,
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
    marginTop: 10,
    width: "71.5%",
    //boxShadow: "0 4px 10px 5px rgba(0, 0, 0, .1)",
    borderRadius: 3,
  },
  submit: {
    background: "linear-gradient(170deg, #63f883 -30%, #163c1e 105%)",
    border: 0,
    borderRadius: 5,
    //boxShadow: "0 3px 10px 5px rgba(0, 0, 0, .2)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  newEvent: {
    background: "linear-gradient(170deg, #63f883 -30%, #163c1e 105%)",
    border: 0,
    borderRadius: 5,
    //boxShadow: "0 3px 5px 5px rgba(5, 255, 24, .1)",
    color: "white",
    height: 48,
    width: 160,
    //alignItem: "left",
  },
  modal: {
    boxShadow: "0 3px 20px 5px rgba(0, 0, 0, .3)",
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 25,
    maxWidth: 800,
    background: "white",
    color: "white",
  },
}));

export default function EventForm(props) {
  const classes = useStyles();
  const { addToList } = props;
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventItem, setEventItem] = useState({});
  const [open, setOpen] = React.useState(false);

  function handleNewEvent() {
    open ? setOpen(false) : setOpen(true);
  }

  function handleSubmit() {
    firestore
      .collection("events")
      .add({
        title,
        date: {
          month: day.substring(0, 2),
          day: day.substring(3, 5),
          year: day.substring(6),
        },
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
    setOpen(false);
  }

  const body = (
    <div className={classes.modal}>
      <Grid container direction='row' justify='center' alignItem='center'>
        <Grid item xs={12} style={{ marginTop: 35, color: "#026923" }}>
          <Typography variant='h3'>New Event</Typography>
        </Grid>
        <Grid item xs={5} style={{ marginTop: 35 }}>
          <input
            className={classes.input}
            placeholder='Title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>

        <Grid item xs={5} style={{ marginTop: 35 }}>
          <input
            className={classes.input}
            placeholder='Starts at'
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <input
            className={classes.input}
            placeholder='Date'
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <input
            className={classes.input}
            placeholder='Ends at'
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 5 }}>
          <input
            className={classes.input}
            placeholder='Location'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder='Description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <Button
          style={{ marginTop: 35, marginBottom: 50 }}
          variant='contained'
          className={classes.submit}
          onClick={handleSubmit}
        >
          <Box fontWeight={"fontWeightBold"} m={1}>
            Submit
          </Box>
        </Button>
      </Grid>
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant='h1' justify='center' className={classes.root}>
          Events
        </Typography>
      </Grid>
      <Button
        type='button'
        style={{ marginTop: 30 }}
        variant='contained'
        justify='left'
        className={classes.newEvent}
        onClick={handleNewEvent}
      >
        <Box fontWeight={"fontWeightBold"} m={2}>
          New Event
        </Box>
      </Button>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 200,
          marginTop: 200,
        }}
        open={open}
        onClose={handleNewEvent}
      >
        <Grid align='center'>{body}</Grid>
      </Modal>
    </div>
  );
}
