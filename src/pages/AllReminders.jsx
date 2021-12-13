import Reminder from "../components/Reminder";


const AllReminders = ({ reminders, edit, deleteReminder }) => {


  return(
    <div>
      {reminders.map(reminder => <Reminder reminder={reminder} key={reminder.id} edit={edit} deleteReminder={deleteReminder} />)}
    </div>
  )
}


export default AllReminders;
