import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

export default function Events() {
  const [events, setEvents] = useState([]);
  function addToList(item) {
    setEvents([{ ...item }, ...events]);
    console.log(events);
  }
  return (
    <div>
      <EventForm addToList={addToList} />
      <EventList events={events} />
    </div>
  );
}
