import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EventForm from "./EventForm";
import EventCard from "./EventCard";

const useStyles = makeStyles((theme) => ({}));

// const { event } = props;
// const classes = useStyles();
// addToList({ ...events });

export default function EventList(props) {
  const classes = useStyles();
  const { events } = props;

  return (
    <div>
      <Grid container align="center" alignItems="center">
        {events &&
          events.map((item) => (
            <Grid item xs={4}>
              <EventCard event={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
