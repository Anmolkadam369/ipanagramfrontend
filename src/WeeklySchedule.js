import React, { useState } from "react";
import "./WeeklySchedule.css";

const WeeklySchedule = (props) => {
  let checkdata;
  console.log(props.date);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM"
  ];

  let updatedCheckboxes;
  // Initialize state to keep track of selected checkboxes
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const handleCheckboxChange = (day, time) => {
    updatedCheckboxes = { ...selectedCheckboxes };

    // Toggle the checkbox state for the selected day and time
    updatedCheckboxes[day] = updatedCheckboxes[day] || {};
    updatedCheckboxes[day][time] = !updatedCheckboxes[day][time];
    console.log(typeof updatedCheckboxes);

    checkdata = updatedCheckboxes;
    console.log(props.date);
    console.log("hey", checkdata);
    // Update the state with the new checkbox values
    setSelectedCheckboxes(checkdata);
  };
  console.log("hey1", selectedCheckboxes);

  const requestData = {
    date: props.date,
    time: selectedCheckboxes
  };

  console.log("RequestData", requestData.time);

  // Function to send the selected data to the backend
  const sendDataToBackend = () => {
    // Send the selectedCheckboxes data to the backend using a POST API call
    fetch("http://localhost:3000/createData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from the backend: ", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="weekly-schedule">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {times.map((time) => (
              <th key={time}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {times.map((time) => (
                <td key={time}>
                  <input
                    type="checkbox"
                    checked={selectedCheckboxes[day]?.[time] || false}
                    onChange={() => handleCheckboxChange(day, time)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="button" onClick={sendDataToBackend}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default WeeklySchedule;
