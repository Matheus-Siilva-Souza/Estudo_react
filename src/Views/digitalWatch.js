import { useState } from "react";
import WatchVisor from "../components/watch";


function DigitalWatch({ date }) {
  const [hours, setHours] = useState();
  setInterval(() => {
    let currentData = new Date()
    let hour = currentData.getHours();
    let minutes = currentData.getMinutes();
    let seconds = currentData.getSeconds();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let hours = hour + ":" + minutes + ":" + seconds;
    setHours(hours)
  }, 1000);

  return (
    <div className="rel">
      <WatchVisor date={hours} />
    </div>
  );
}


export default DigitalWatch;