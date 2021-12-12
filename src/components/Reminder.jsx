// import { Link } from "react-router-dom";


const Reminder = ({ reminder }) => {
  //////////////////
  // Style Objects
  //////////////////
  const ul = {
    textAlign: "center",
    width: "fit-content",
  };
  const div = {
    width: "40%",
    minWidth: "300px",
    margin: "10px auto",
  };

  return (
    <div style={div}>
      <ul style={ul}>
        <li>
          {/* <Link to={`/reminders/${reminder.id}`}> */}
            <h4>{reminder.text}</h4>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  )
}


export default Reminder;
