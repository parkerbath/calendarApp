import {React, useState} from "react";
import {
    Typography,
    makeStyles,
    Grid,
    Button,
    Card,
    CardContent,
  } from "@material-ui/core";
//import assignments from './AssignmentsForm';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

  export default function AssignmentCard(props) {
    const classes = useStyles();
    const {assignment} = props;

    return (

      
          <Card className={classes.root} variant= "outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {assignment.title} 
              </Typography>
              <Typography variant="h5" component="h2">
                {assignment.date} 
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {assignment.class} 
              </Typography>
              <Typography variant="body2" component="p">
                {assignment.time} 
              </Typography>
            </CardContent>
          </Card>
        );
  

  }