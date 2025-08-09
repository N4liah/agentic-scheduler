import { useState } from 'react';
import { FaCalendarAlt, FaCalendarDay, FaCalendarWeek } from 'react-icons/fa';

const Sidebar = () => {
  const [view, setView] = useState('month');
  const [nlpInput, setNlpInput] = useState('');

  const handleNlpSubmit = (e) => {
    e.preventDefault();
    console.log('NLP Request:', nlpInput);
    // TODO: Call /nlp endpoint
    setNlpInput('');
  };

  return (
    <aside className="w-64 bg-white p-4 shadow flex flex-col">
      <div className="mb-4">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + Create Event
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Views</h3>
        <button
          className={`flex items-center w-full p-2 mt-2 rounded ${view === 'day' ? 'bg-blue-100' : ''}`}
          onClick={() => setView('day')}
        >
          <FaCalendarDay className="mr-2" /> Day
        </button>
        <button
          className={`flex items-center w-full p-2 mt-2 rounded ${view === 'week' ? 'bg-blue-100' : ''}`}
          onClick={() => setView('week')}
        >
          <FaCalendarWeek className="mr-2" /> Week
        </button>
        <button
          className={`flex items-center w-full p-2 mt-2 rounded ${view === 'month' ? 'bg-blue-100' : ''}`}
          onClick={() => setView('month')}
        >
          <FaCalendarAlt className="mr-2" /> Month
        </button>
      </div>
      <div className="mt-auto">
        <h3 className="text-lg font-semibold">Schedule with NLP</h3>
        <form onSubmit={handleNlpSubmit} className="mt-2">
          <input
            type="text"
            value={nlpInput}
            onChange={(e) => setNlpInput(e.target.value)}
            placeholder="e.g., Lên lịch họp vào thứ Tư chiều"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Schedule
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;