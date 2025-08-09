import { useState } from 'react';

const NLPInput = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('NLP Input:', input);
    // TODO: Call backend /nlp endpoint
  };

  return (
    <div className="p-4 bg-teal-100 rounded-lg shadow">
      <h2 className="text-xl text-amber-900 bg-teal-50 font-semibold">Schedule Request</h2>
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Lên lịch họp vào thứ Tư chiều"
          className="w-full p-2 bg-gray-500 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NLPInput;