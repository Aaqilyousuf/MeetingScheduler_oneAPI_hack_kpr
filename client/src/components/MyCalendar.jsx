// MyCalendar.js
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import CSS for the calendar

const localizer = momentLocalizer(moment);

const MyCalendar = ({ myEventsList }) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList} // Assuming you have your events list here
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
