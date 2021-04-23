import React, { useState } from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";
import AssignmentsForm from "../components/AssignmentsForm";
import AssignmentList from "../components/AssignmentList";
import AssignmentCalendar from "../components/AssignmentCalendar";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 50,
  }
}));

export default function Assignments() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Button
        variant='contained'
        style={{ marginTop: 10, marginRight: 20, float: "right", padding: 10, }}
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
