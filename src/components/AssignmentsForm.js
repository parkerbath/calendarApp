import {React, useState} from "react";
import {
    Typography,
    makeStyles,
    Grid,
    Button,
  } from "@material-ui/core";
  import addToAssignments from '../pages/Assignments'
  

  const useStyles = makeStyles(() => ({
    root: { 
        textAlign: "center",
        marginTop: 50,
    },
    button: {
        padding: 10,
        margin: 10,
        color: "green",
        alignSelf: "center",
    },
    input: {
        padding: 10,
        margin: 10,
        width: "50%",
    }
}))
  export default function AssignmentsForm() {
      const [description, setDescription] = useState("");
      const [dueDate, setDueDate] = useState("");
      const [category, setCategory] = useState("");
      const [dueTime, setDueTime] = useState("");
      const classes = useStyles();
      const [assignment, setAssignment] = useState({});
      

      function handleSubmit() {
          setAssignment([{title: description, date: dueDate, class: category, time: dueTime}]);
          addToAssignments(assignment);
          setDescription("");
          setDueDate("");
          setCategory("");
          setDueTime("");
        //   console.log(assignments)

      }



      return (
          
          <div className={classes.root}>
              <Grid className={classes.root} containter direction="row" justify="center" align="center">
                  <Grid item xs={12}><Typography variant="h2">Assignment Form</Typography></Grid>
                  <Grid item xs={12}><input className={classes.input} placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></input></Grid>
                  <Grid item xs={12}><input className={classes.input} placeholder="Due Date" value={dueDate} onChange={(event) => setDueDate(event.target.value)}></input></Grid>
                  <Grid item xs={12}><input className={classes.input} placeholder="Class" value={category} onChange={(event) => setCategory(event.target.value)}></input></Grid>
                  <Grid item xs={12}><input className={classes.input} placeholder="Due Time" value={dueTime} onChange={(event) => setDueTime(event.target.value)}></input></Grid>
                  <Grid item xs={12}><Button variant="contained" className={classes.button} onClick={handleSubmit}>Submit</Button></Grid>
              </Grid>
              {/* <Grid> 
                  {assignments &&
                      assignments.map((task) => (
                          <>
                          <Typography>{task.title}</Typography>
                          <Typography>{task.date}</Typography>
                          <Typography>{task.class}</Typography>
                          <Typography>{task.time}</Typography>
                          </>
                      ))

                  }
              </Grid> */}



          </div>
       


      );

      
  }