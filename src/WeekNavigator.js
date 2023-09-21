import React, { useState } from "react";
import "./WeekNavigator.css"; // Create a CSS file for styling
import WeeklySchedule from "./WeeklySchedule";
const WeekNavigator = (props) => {
  console.log(props);
  // Initialize state to store the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to navigate to the previous week
  const goToPreviousWeek = () => {
    let newDate = props.dynamicTime;
    newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // Function to navigate to the next week
  const goToNextWeek = () => {
    let newDate = props.dynamicTime;
    newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Format the date to display
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div>
      <div className="week-navigator">
        <button className="nav-button" onClick={goToPreviousWeek}>
          {" < "}
        </button>
        <div className="current-week">{formattedDate}</div>
        <button className="nav-button" onClick={goToNextWeek}>
          {" > "}
        </button>
      </div>
      <div>
        <WeeklySchedule date={formattedDate} />
      </div>
    </div>
  );
};

export default WeekNavigator;
