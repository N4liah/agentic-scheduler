import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ onSelectSlot }) => {
  const events = [
    {
      id: 1,
      title: 'Team Meeting',
      start: new Date(2025, 7, 10, 10, 0),
      end: new Date(2025, 7, 10, 11, 0),
    },
  ];

  return (
    <div className="h-[calc(100vh-8rem)]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={onSelectSlot}
        defaultView="month"
        className="rbc-calendar"
      />
    </div>
  );
};

export default MyCalendar;