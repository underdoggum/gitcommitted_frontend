import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import AllTimeblocks from "./pages/AllTimeblocks";
import AllReminders from "./pages/AllReminders";
import Form from "./pages/Form";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MotivationalQuotes from "./components/MotivationalQuotes";
import SingleTimeblock from "./pages/SingleTimeblock";
import Footer from "./components/Footer";

import "./App.css"
import CurrentTime from "./components/CurrentTime";


function App() {
  


  ///////////////
  // State & Other Variables
  ///////////////
  const url = "https://gitcommitted-backend.herokuapp.com/";
  const [timeblocks, setTimeblocks] = useState([]);
  const [reminders, setReminders] = useState([]);


  //////////////
  // Functions
  //////////////
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


  //////////////
  // useEffects
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
        <Route path="/timeblocks/:id" element={<SingleTimeblock timeblocks={timeblocks} reminders={reminders} />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
