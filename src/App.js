import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import AllTimeblocks from "./pages/AllTimeblocks";
import Form from "./pages/Form";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MotivationalQuotes from "./components/MotivationalQuotes";
import SingleTimeblock from "./pages/SingleTimeblock";
import Footer from "./components/Footer";

import "./App.css"
import CurrentTime from "./components/CurrentTime";


function App() {
  const navigate = useNavigate();

  ///////////////
  // State & Other Variables
  ///////////////
  const url = "https://gitcommitted-backend.herokuapp.com/";
  const [timeblocks, setTimeblocks] = useState([]);
  const [reminders, setReminders] = useState([]);

  // null Reminder
  const nullReminder = {
    category: 1,
    text: ""
  }
  
  const [targetReminder, setTargetReminder] = useState(nullReminder);

  //////////////
  // Functions
  //////////////
  // Get
  const getTimeblocks = async () => {
    const response = await fetch(url + "timeblocks/");
    const data = await response.json();
    setTimeblocks(data);
  }
  const getReminders = async () => {
    const response = await fetch(url + "reminders/");
    const data = await response.json();
    setReminders(data);
  }

  // Create
  const addReminders = async (newReminder) => {
    await fetch(url + "reminders/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReminder)
    });
    getReminders();
    // navigate("/timeblocks/" + newReminder.category)
  }

  const getTargetReminder = reminder => {
    setTargetReminder(reminder);
    navigate("/edit")
  }

  // Edit
  const updateReminder = async reminder => {
    await fetch(url + "reminders/" + reminder.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reminder)
    })
    getReminders();
    // navigate("/timeblocks/" + reminder.category)
  }

  // Delete
  const deleteReminder = async reminder => {
    await fetch(url + "reminders/" + reminder.id, {
      method: "delete"
    })
    getReminders();
  }


  //////////////
  // useEffect
  //////////////
  useEffect(() => {
    getTimeblocks();
    getReminders();
  }, [])


  //////////////
  // Returned JSX
  //////////////
  return (
    <div className="App">
      <Header />
      <MotivationalQuotes />
      <CurrentTime />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/timeblocks" element={<AllTimeblocks timeblocks={timeblocks} />} />
        <Route path="/timeblocks/:id" element={
          <SingleTimeblock
            timeblocks={timeblocks}
            reminders={reminders}
            edit={getTargetReminder}
            deleteReminder={deleteReminder}
          />}
        />

        <Route path="/new/:id" element={
          <Form
            initialReminders={nullReminder}
            handleSubmit={addReminders}
            buttonLabel="Add Reminder"
          />}
        />

        <Route path="/edit" element={
          <Form
            initialReminders={targetReminder}
            handleSubmit={updateReminder}
            buttonLabel="Update"
          />

        } />
        
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
