import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EventForm from "./EventForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    paddingTop: 20,
    minHeight: 200,
    maxWidth: 300,
    margin: 20,
  },
  grid: {
    width: 500,
    height: 450,
    padding: 20,
    margin: 20,
    marginTop: 20,
  },
  button: {
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
    color: "red",
  },
  card: {
    marginTop: 40,
    padding: 40,
    margin: 20,
    borderRadius: 0,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
  },
}));

{
  /* <Grid item xs={6}>
<Typography align="left" variant="h7" component="h6">
  {"Subject"}
</Typography> */
}

export default function EventCard(props) {
  const { event } = props;
  const classes = useStyles();

  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid container classname={classes.grid} direction="row">
            <Grid item xs={6}>
              <Typography align="left" variant="h5" component="h2">
                {event.title}
              </Typography>

              <Grid item xs={12} align="left">
                <Typography
                  align="left"
                  styles={classes.grid}
                  variant="h7"
                  color="textSecondary"
                >
                  {event.date}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6} alignItem="right">
              <Typography align="right" variant="h7">
                {event.startTime}
              </Typography>
              <Typography>-</Typography>
              <Grid item xs={4} alignItem="right">
                <Typography align="right" styles={{ padding: 20 }} variant="h7">
                  {event.endTime}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} alignItem="bottom">
            <Typography
              classname={{ paddingTop: 20 }}
              variant="h6"
              color="textSecondary"
            >
              {event.location}
            </Typography>
            <Grid item xs={12}>
              <Typography
                //className={classes.pos}
                variant="h6"
                color="textSecondary"
              >
                {event.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
