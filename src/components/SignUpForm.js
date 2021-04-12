import React, { useState } from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import { firestore } from "../firebase";
import { navigate } from "@reach/router";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
  },
  input: {
    padding: 10,
    margin: 10,
    width: "25%",
  },
  button: {
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "#88cc88",
      boxShadow: "none",
    },
  },
  item: {
    marginTop: 30,
  },
}));

export default function SignUpForm() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    firestore
      .collection("users")
      .add({
        id: Math.floor(Math.random() * 5000),
        name,
        email,
        password,
      })
      .then(() => {
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    navigate("/");
    // set navbar link to signout
  }

  return (
    <Grid
      className={classes.root}
      container
      direction='column'
      justify='center'
      align='center'
    >
      <Grid item>
        <Typography variant='h3'>Create a New Account</Typography>
      </Grid>
      <Grid item className={classes.item}>
        <input
          className={classes.input}
          placeholder='Full Name'
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item>
        <input
          className={classes.input}
          placeholder='Email'
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid item>
        <input
          className={classes.input}
          placeholder='Password'
          type='password'
          onChange={(event) => setPassword(event.target.value)}
        />
      </Grid>
      <Grid item className={classes.item}>
        <Button className={classes.button} onClick={handleSubmit}>
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
}
