import React from "react";

const AppointmentDayView = ({ appointments }) => {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((ap, i) => (
          <li key={i}>{ap.startsAt}</li>
        ))}
      </ol>
    </div>
  );
};

export default AppointmentDayView;
