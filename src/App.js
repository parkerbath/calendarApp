import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Assignments from "./pages/Assignments";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import { auth } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  return (
    <>
      <Navbar />
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Assignments path='/assignments' currentUser={currentUser} />
        <Events path='/events' currentUser={currentUser} />
        <Login path='/login' />
        <SignUp path='/signup' />
        <SignOut path='/sign-out' />
      </Router>
    </>
  );
}

export default App;
