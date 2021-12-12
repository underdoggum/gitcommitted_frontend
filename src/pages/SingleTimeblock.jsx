import { Link, useParams } from "react-router-dom";
import AllReminders from "./AllReminders";


const SingleTimeblock = ({ timeblocks, reminders }) => {
  const params = useParams();
  const id = parseInt(params.id);
  const timeblock = timeblocks.find(t => t.id === id);




  return(
    <div>
      <Link to={"/timeblocks"}>Back to Schedule</Link>
      <h1>{timeblock.title}</h1>
      <AllReminders reminders={reminders} />
    </div>
  )
}


export default SingleTimeblock;
