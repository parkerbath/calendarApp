import React, { useState } from "react";
import { auth } from "../firebase";
import { Button, Typography, makeStyles } from "@material-ui/core";
import AssignmentsForm from "../components/AssignmentsForm";
import AssignmentList from "../components/AssignmentList";
import AssignmentCalendar from "../components/AssignmentCalendar";
import { navigate } from "@reach/router";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 50,
  },
}));

export default function Assignments() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  if (!auth.currentUser) {
    return (
      <div className={classes.root}>
        <Typography variant='h2' justify='center' className={classes.root}>
          Assignments
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
      <>
        <Button
          variant='contained'
          style={{
            marginTop: 10,
            marginRight: 20,
            float: "right",
            padding: 10,
          }}
          onClick={() => setDisplay((prevState) => !prevState)}
        >
          {display ? "List View" : "Calendar View"}
        </Button>
        <AssignmentsForm />
        <Typography variant='h2' justify='center' className={classes.root}>
          Assignments
        </Typography>
        {display ? <AssignmentCalendar /> : <AssignmentList />}
      </>
    );
  }
}
