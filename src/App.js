import React from "react";
// import WeekNavigator from './WeekNavigator';
import TimezoneSelector from "./TimezoneSelector";
import WeeklySchedule from "./WeeklySchedule";

const App = () => {
  return (
    <div>
      <h1>Weekly Date Navigator</h1>
      {/* <WeekNavigator /> */}
      <TimezoneSelector />
      {/* <WeeklySchedule /> */}
    </div>
  );
};

export default App;
