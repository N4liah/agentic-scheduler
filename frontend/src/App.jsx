import { useState } from 'react';
import Calendar from './components/Calendar';
import EventModal from './components/EventModal';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <Calendar onSelectSlot={handleSelectSlot} />
        </main>
      </div>
      {isModalOpen && (
        <EventModal
          date={selectedDate}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;