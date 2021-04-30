import { React, useState } from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { firestore } from "../firebase";

const useStyles = makeStyles({
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
  root: {
    padding: 30,
    paddingTop: 20,
    minHeight: 200,
    maxWidth: 300,
    margin: 10,
    borderRadius: 5,
    boxShadow: "0 3px 15px 5px rgba(0, 0, 0, .06)",
  },
  grid: {
    width: 500,
    height: 450,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: -20,
    margin: 20,
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    marginLeft: 200,
    marginBottom: -20,
    paddingBottom: -20,
    
  },
});

export default function AssignmentCard(props) {
  const classes = useStyles();
  const { assignment } = props;

  function handleDelete() {
    // firestore
    // .collection('assignments')
    // .doc(firestore
    //   .collection('assignments')
    //   .where("title", "==", assignment.title))
    // .delete()

    var selectedAssignment = firestore
      .collection("assignments")
      .where("title", "==", assignment.title);
    selectedAssignment.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
    // .then(() => {
    //   console.log("Document successfully deleted!");
    // })
    // .catch((error) => {
    //   console.error("Error deleting document: ", error);
    // });
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {assignment.dueDate
            ? `${assignment.dueDate.month}/${assignment.dueDate.day}/${assignment.dueDate.year}`
            : null}
        </Typography>
        <Typography variant='h5' component='h2'>
          {assignment.title}
        </Typography>
        <Typography variant='body1' component='h2'>
          {assignment.description}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {assignment.category}
        </Typography>
        <Typography variant='body2' component='p'>
          {assignment.dueTime}
        </Typography>
        <Button className={classes.button} onClick={handleDelete}>
          <DeleteOutlined style={{ color: "red" }} />
        </Button>
      </CardContent>
    </Card>
  );
}
