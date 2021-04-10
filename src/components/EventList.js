import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EventForm from "./EventForm";
import EventCard from "./EventCard";

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    margin: 5,
  },
  grid: {
    marginTop: 20,
    paddingTop: 20,
  },
});

export default function EventList(props) {
  const { events } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container align="center" alignItems="center">
        {events &&
          events.map((item) => (
            <Grid item xs={4} style={{ margin: 0 }}>
              <EventCard event={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
