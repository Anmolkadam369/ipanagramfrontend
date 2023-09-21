import React, { useState } from "react";
import { DateTime } from "luxon";
import WeekNavigator from "./WeekNavigator";
const TimeZoneSelect = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(DateTime.now());
  const DynamicTime = currentTime.toLocaleString(DateTime.DATETIME_FULL);
  // Function to handle timezone change
  const handleTimeZoneChange = (e) => {
    const newTimeZone = e.target.value;
    setSelectedTimeZone(newTimeZone);
    // Convert the current time to the selected timezone
    const newTime = currentTime.setZone(newTimeZone);
    setCurrentTime(newTime);
  };

  return (
    <div>
      <h1>Timezone Selector</h1>
      <div>
        <label htmlFor="timezoneSelect">Select Timezone: </label>
        <select
          id="timezoneSelect"
          onChange={handleTimeZoneChange}
          value={selectedTimeZone}
        >
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
          {/* Add more timezones as needed */}
        </select>
      </div>
      <div>
        <p>
          <WeekNavigator DynamicTime={DynamicTime} />
        </p>
      </div>
    </div>
  );
};

export default TimeZoneSelect;
