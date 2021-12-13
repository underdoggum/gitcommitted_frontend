import { Link, useParams } from "react-router-dom";
import AllReminders from "./AllReminders";
import { Button } from "@mui/material";


const SingleTimeblock = ({ timeblocks, reminders, edit, deleteReminder }) => {
  const params = useParams();
  const id = parseInt(params.id);
  const timeblock = timeblocks.find(t => t.id === id);

  const link = {
    textDecoration: "none",
    color: "#1976d2",
    fontWeight: "bold"
  }


  if (timeblocks && timeblock && reminders) {
    return(
      <div>
        <Link style={link} to={"/timeblocks"}>Back to Schedule</Link>
        <h1>{timeblock.title}</h1>
        <AllReminders edit={edit} deleteReminder={deleteReminder} reminders={reminders.filter(reminder => reminder.category === timeblock.id)} />
        <Link style={link} to={`/new/${timeblock.id}`}><Button>Add Reminder</Button></Link>
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}


export default SingleTimeblock;
