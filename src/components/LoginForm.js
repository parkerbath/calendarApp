import React, { useState } from "react";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import { Link, navigate } from "@reach/router";
import { firestore, auth } from "../firebase";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
  },
  input: {
    padding: 10,
    margin: 10,
    width: "30%",
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

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    // firestore
    //   .collection("users")
    //   .add({
    //     email,
    //     password,
    //   })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //     setEmail("");
    //     setPassword("");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("logged in");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    navigate("/");
  }

  return (
    <Grid className={classes.root} container justify='center' align='center'>
      <Grid item xs={12}>
        <Typography variant='h3'>Login</Typography>
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <input
          className={classes.input}
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <input
          className={classes.input}
          placeholder='Password'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <Button
          className={classes.button}
          variant='contained'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      <Grid item className={classes.item}>
        <>
          <Typography>Don't have an account yet?</Typography>
          <Link to='/signup'>
            <Typography>Sign up here.</Typography>
          </Link>
        </>
      </Grid>
    </Grid>
  );
}
