import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import EventCalendar from "../components/EventCalendar";

export default function Events() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <Button
        variant='contained'
        onClick={() => setDisplay((prevState) => !prevState)}
        style={{ marginLeft: 20, marginTop: 20 }}
      >
        {display ? "Calendar View" : "List View"}
      </Button>
      <EventForm />
      {display ? <EventList /> : <EventCalendar />}
    </div>
  );
}
