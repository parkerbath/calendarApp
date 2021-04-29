import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { Button, makeStyles, Typography } from "@material-ui/core";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    //textAlign: "center",
    paddingTop: 25,
    padding: 10,
    marginTop: 20,
  },
  noUser: {
    textAlign: "center",
    marginTop: 50,
  },
}));

export default function Events(props) {
  const { currentUser } = props;
  const [display, setDisplay] = useState(true);
  const classes = useStyles();

  if (!currentUser) {
    return (
      <div className={classes.noUser}>
        <Typography variant='h2' justify='center' className={classes.root}>
          Events
        </Typography>
        <Typography
          variant='h5'
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: 80,
          }}
        >
          Oops! You need to Login or SignUp first.
        </Typography>
        <Button
          variant='contained'
          style={{ marginTop: 30 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Button
          variant='contained'
          style={{
            padding: 10.5,
            float: "right",
            marginRight: 10,
            marginTop: -20.5,
          }}
          onClick={() => setDisplay((prevState) => !prevState)}
        >
          {display ? "Calendar View" : "List View"}
        </Button>
        <EventForm />
        <Typography variant='h2' align='center'>
          Events
        </Typography>

        {display ? <EventList /> : <EventCalendar />}
      </div>
    );
  }
}
