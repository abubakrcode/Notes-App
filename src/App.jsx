import { useState } from "react";
import { MdClose } from "react-icons/md";

function App() {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!heading || !details) return;

    setTask([{ heading, details }, ...task]);
    setHeading("");
    setDetails("");
  };

  const removeNote = (idx) => {
    const updated = [...task];
    updated.splice(idx, 1);
    setTask(updated);
  };

  const toggleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Notes App
      </h1>

      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10 border border-gray-200"
      >
        <input
          type="text"
          placeholder="Note Title"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none text-lg bg-gray-50"
        />

        <textarea
          placeholder="Write your note..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none min-h-[150px] bg-gray-50"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 transition rounded-xl p-3 text-xl font-medium text-gray-900"
        >
          Save Note
        </button>
      </form>

      {/* Notes Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {task.map((note, idx) => (
            <div
              key={idx}
              className="relative bg-yellow-50 border border-yellow-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition h-[220px] flex flex-col"
            >
              {/* Close Icon */}
              <button
                onClick={() => removeNote(idx)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
              >
                <MdClose size={22} />
              </button>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {note.heading}
              </h3>

              {/* Description */}
              <p
                className={`text-sm text-gray-700 leading-relaxed overflow-hidden ${
                  expanded === idx ? "line-clamp-none" : "line-clamp-4"
                }`}
              >
                {note.details}
              </p>

              {/* Show More */}
              {note.details.length > 120 && (
                <button
                  onClick={() => toggleExpand(idx)}
                  className="mt-auto text-yellow-600 text-sm font-medium hover:underline self-start"
                >
                  {expanded === idx ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
