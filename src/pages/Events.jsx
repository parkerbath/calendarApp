import React, { useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar";

const useStyles = makeStyles((theme) => ({
  root: {
    //textAlign: "center",
    paddingTop: 25,
    padding: 10,
    marginTop: 20,
  },
}));

export default function Events() {
  const [display, setDisplay] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        onClick={() => setDisplay((prevState) => !prevState)}
        style={{ padding: 5, marginLeft: 0, marginTop: -16, float: "right" }}
      >
        {display ? "Calendar View" : "List View"}
      </Button>
      <EventForm />
      <Typography variant="h2" align="center">
        Events
      </Typography>

      {display ? <EventList /> : <EventCalendar />}
    </div>
  );
}
