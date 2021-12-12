import { useState, useEffect } from "react";
import Timeblock from "./Timeblock";


const Timeslots = ({ timeblocks }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => { clearInterval(interval) }
  }, []);
  
  let highlighted = {
    backgroundColor: "orange",
    width: "fit-content",
    margin: "0 auto",
    padding: "0.5rem",
    fontWeight: "bold"
  }


  if (timeblocks && time.getHours() >= 8 && time.getHours() <= 16) {
    return (
      <div>
        <h3 style={time.getHours() === 8 ? highlighted : null}>8:00am - 8:50am: <Timeblock timeblock={timeblocks[0]} /></h3>
        <h3 style={time.getHours() === 9 ? highlighted : null}>9:00am - 9:50am: <Timeblock timeblock={timeblocks[0]} /></h3>
        <h3 style={time.getHours() === 10 ? highlighted : null}>10:00am - 10:50am: <Timeblock timeblock={timeblocks[1]} /></h3>
        <h3 style={time.getHours() === 11 ? highlighted : null}>11:00am - 11:50am: <Timeblock timeblock={timeblocks[2]} /></h3>
        <h3 style={time.getHours() === 13 ? highlighted : null}>1:00pm - 1:50pm: <Timeblock timeblock={timeblocks[3]} /></h3>
        <h3 style={time.getHours() === 14 ? highlighted : null}>2:00pm - 2:50pm: <Timeblock timeblock={timeblocks[1]} /></h3>
        <h3 style={time.getHours() === 15 ? highlighted : null}>3:00pm - 3:50pm: <Timeblock timeblock={timeblocks[2]} /></h3>
        <h3 style={time.getHours() === 16 ? highlighted : null}>4:00pm - 5:00pm: <Timeblock timeblock={timeblocks[3]} /></h3>
      </div>
    )
  } else if (timeblocks && time.getHours() < 8 || time.getHours > 16) {
    return (
      <h1>Take it easy! Keep your life balanced, and enjoy your evening!</h1>
    )
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}


export default Timeslots;
