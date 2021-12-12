import { Link } from "react-router-dom";


const Reminder = ({ reminder }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/reminders/${reminder.id}`}>
      <h1>{reminder.text}</h1>
      </Link>
    </div>
  )
}


export default Reminder;
