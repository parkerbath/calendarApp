import {React, useState} from "react";
import {
    Typography,
    makeStyles,
    Grid,
    Button,
    Card,
    CardContent,
  } from "@material-ui/core";
  import AssignmentCard from './AssignmentCard';

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

  export default function AssignmentList(props) {
      const {assignments} = props;

      return (
          <div>
             <Grid container>

                 {assignments && assignments.map(assign => (
                     <Grid item xs={4}>
                         <AssignmentCard assignment={assign} />      
                    </Grid>

                 ))}
             
             </Grid> 
          </div>
        
      )



  }