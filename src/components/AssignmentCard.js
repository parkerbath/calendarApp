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
  root: {
    padding: 30,
    paddingTop: 20,
    minHeight: 200,
    maxWidth: 300,
    margin: 10,
    borderRadius: 5,
    boxShadow: "0 3px 15px 5px rgba(0, 0, 0, .08)",
  },
  grid: {
    width: 500,
    height: 450,
    padding: 20,
    margin: 20,
    marginTop: 20,
  },
});

  export default function AssignmentCard(props) {
    const classes = useStyles();
    const {assignment} = props;

    return (

      
          <Card className={classes.root} variant= "outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {assignment.dueDate} 
              </Typography>
              <Typography variant="h5" component="h2">
                {assignment.title} 
              </Typography>
              <Typography variant="body1" component="h2">
                {assignment.description} 
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {assignment.category} 
              </Typography>
              <Typography variant="body2" component="p">
                {assignment.dueTime} 
              </Typography>
            </CardContent>
          </Card>
        );
  

  }