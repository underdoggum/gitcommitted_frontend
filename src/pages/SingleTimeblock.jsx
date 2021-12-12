import { Link, useParams } from "react-router-dom";
import AllReminders from "./AllReminders";


const SingleTimeblock = ({ timeblocks, reminders }) => {
  const params = useParams();
  const id = parseInt(params.id);
  const timeblock = timeblocks.find(t => t.id === id);



  if (timeblocks) {
    return(
      <div>
        <Link to={"/timeblocks"}>Back to Schedule</Link>
        <h1>{timeblock.title}</h1>
        <AllReminders reminders={reminders.filter(reminder => reminder.category === timeblock.id)} />
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}


export default SingleTimeblock;
