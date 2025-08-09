import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';

const EventModal = ({ date, onClose }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(
    moment(date).format('HH:mm'),
  );
  const [endTime, setEndTime] = useState(
    moment(date).add(1, 'hour').format('HH:mm'),
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = {
      title,
      start: moment(date)
        .set({
          hour: parseInt(startTime.split(':')[0]),
          minute: parseInt(startTime.split(':')[1]),
        })
        .toDate(),
      end: moment(date)
        .set({
          hour: parseInt(endTime.split(':')[0]),
          minute: parseInt(endTime.split(':')[1]),
        })
        .toDate(),
    };
    try {
      // TODO: Replace with actual /schedule endpoint
      await axios.post('http://localhost:8000/schedule', event);
      onClose();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-2xl  w-96">
        <h2 className="text-xl text-gray-800 font-semibold mb-4">Create Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 text-gray-700  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              End Time
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;