import { React, useState } from "react";
import { Typography, makeStyles, Grid, Button, Modal } from "@material-ui/core";
import { auth, firestore } from "../firebase";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 50,
  },
  button: {
    padding: 20,
    margin: 10,
    marginTop: 22,
    background: "linear-gradient(170deg, #63f883 -30%, #163c1e 105%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    height: 48,
    width: 200,
  },
  assignmentButton: {
    padding: 20,
    margin: 10,
    marginTop: 22,
    marginLeft: 20,
    background: "linear-gradient(170deg, #63f883 -30%, #163c1e 105%)",
    border: 0,
    borderRadius: 5,
    color: "white",
    height: 48,
    width: 200,
  },
  input: {
    padding: 10,
    margin: 10,
    width: "50%",
  },
  modal: {
    boxShadow: "0 3px 20px 5px rgba(0, 0, 0, .1)",
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 20,
    width: 800,
    background: "white",
    color: "black",
  },
}));
export default function AssignmentsForm(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [reminder, setReminder] = useState("");
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState(false);

  function handleSubmit() {
    firestore
      .collection("assignments")
      .add({
        userID: auth.currentUser ? auth.currentUser.uid : null,
        title,
        description,
        dueDate: {
          month: dueDate.substring(0, 2),
          day: dueDate.substring(3, 5),
          year: dueDate.substring(6),
        },
        category,
        dueTime,
        reminder,
        color,
      })
      .then(() => {
        console.log("Document successfully written!");
        setTitle("");
        setDescription("");
        setDueDate("");
        setCategory("");
        setDueTime("");
        setReminder("");
        setColor("");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setDisplay(false);
    //   console.log(assignments)
  }

  function displayModal() {
    display ? setDisplay(false) : setDisplay(true);
  }

  const body = (
    <div className={classes.modal}>
      <Grid
        className={classes.root}
        containter
        direction="row"
        justify="center"
        alignItem="center"
      >
        <Grid item xs={12}>
          <Typography variant="h2">Assignment Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Due Date (XX/XX/XXXX)"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Due Time"
            value={dueTime}
            onChange={(event) => setDueTime(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Class"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Reminder"
            value={reminder}
            onChange={(event) => setReminder(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.input}
            placeholder="Color (#hexcode)"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <>
      <Button
        className={classes.assignmentButton}
        variant="contained"
        onClick={displayModal}
      >
        {" "}
        New Assignment{" "}
      </Button>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 200,
          marginTop: 200,
        }}
        open={display}
        onClose={displayModal}
      >
        <Grid align="center">{body}</Grid>
      </Modal>
    </>
  );
}
