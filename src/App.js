import React from "react";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Assignments from "./pages/Assignments";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Assignments path='/assignments' />
        <Events path='/calendar' />
        <Calendar path='/testCal' />
        <Login path='/login' />
        <SignUp path='/signup' />
      </Router>
    </>
  );
}

export default App;
