import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center">
        <img
          src="/calendar.png"
          alt="Logo"
          className="h-10"
        />
        <h1 className="ml-2 text-xl font-bold text-blue-600">
          Agentic Scheduler
        </h1>
      </div>
      <div className="flex items-center">
        <FaUserCircle className="text-2xl text-gray-600" />
        <span className="ml-2 text-gray-800">User</span>
      </div>
    </header>
  );
};

export default Header;