import { useState, useEffect } from "react";


const CurrentTime = props => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => { clearInterval(interval) }
  }, []);
  
  const timeStr = time.toLocaleString('en-US', { hour: "numeric", minute: "numeric", second: "numeric", hour12: true })



  return (
    <div>
      <p>Current time: {timeStr}</p>
    </div>
  )
}


export default CurrentTime;
