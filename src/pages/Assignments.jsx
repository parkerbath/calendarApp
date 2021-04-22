import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AssignmentsForm from "../components/AssignmentsForm";
import AssignmentList from "../components/AssignmentList";
import AssignmentCalendar from "../components/AssignmentCalendar";

export default function Assignments() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Button
        variant='contained'
        style={{ marginTop: 20, marginLeft: 20 }}
        onClick={() => setDisplay((prevState) => !prevState)}
      >
        {display ? "List View" : "Calendar View"}
      </Button>
      <AssignmentsForm />
      {display ? <AssignmentCalendar /> : <AssignmentList />}
    </>
  );
}
