import React, { useState } from "react";
import "./App.css";

function App() {
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  };
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString("en-US", timeOptions);
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", timeOptions);
    setTime(newTime);
  }
  return (
    <div className="container">
      <h2>CurrentTime</h2>
      <h1>&nbsp;{time}</h1>
      <p>Taran</p>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}
export default App;
