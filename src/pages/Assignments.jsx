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
    paddingTop: 25,
    padding: 10,
    marginTop: -20,
  },
}));

export default function Assignments(props) {
  const { currentUser } = props;
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  if (!currentUser) {
    return (
      <div className={classes.root}>
        <Typography variant='h2' className={classes.root}>
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
            padding: 10.5,
            float: "right",
            marginRight: 20,
            marginTop: 23,
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
