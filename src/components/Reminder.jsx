// import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const Reminder = ({ reminder, edit, deleteReminder }) => {
  //////////////////
  // Style Objects
  //////////////////
  const ul = {
    textAlign: "center",
    width: "fit-content",
  };

  const li = {
    listStyleType: "none",
    border: "1px solid gray",
    padding: "2px",
    paddingRight: "0.75rem"
  };

  const div = {
    width: "40%",
    minWidth: "300px",
    margin: "10px auto",
  };

  
  return (
    <div style={div}>
      <ul style={ul}>
        <li style={li}>
          {/* <Link to={`/reminders/${reminder.id}`}> */}
          <Button color="secondary" onClick={event => edit(reminder)}>Edit</Button>
          <Button color="error" onClick={event => deleteReminder(reminder)}>DELETE</Button>
          {reminder.text}
          {/* </Link> */}
        </li>
      </ul>
    </div>
  )
}


export default Reminder;
