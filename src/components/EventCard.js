import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EventForm from "./EventForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EventCard(props) {
  const { event } = props;
  const classes = useStyles();

  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {event.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {event.date}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {event.startTime}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {event.endTime}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {event.location}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {event.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
