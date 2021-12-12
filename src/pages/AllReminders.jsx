import Reminder from "../components/Reminder";


const AllReminders = ({ reminders }) => {


  return(
    <div>
      {reminders.map(reminder => <Reminder reminder={reminder} key={reminder.id} />)}
    </div>
  )
}


export default AllReminders;
