import React, {useState} from "react";
import AssignmentsForm from "../components/AssignmentsForm";
import AssignmentList from "../components/AssignmentList";


export default function Assignments() {
  const [assignments, setAssignments] = useState([]);

  function addToAssignments(assign) {
    setAssignments([{...assign}, ...assignments]);
  }
  return (
  <>
  <AssignmentsForm addToAssignments ={addToAssignments} />
  <AssignmentList assignments ={assignments}/>
  

  </>
  )
 

}
