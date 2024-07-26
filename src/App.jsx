import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (title.trim()) {
      setItems([...items, { id: Date.now(), title, done: false }]);
      setTitle("");
    }
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const doneItems = items.filter((item) => item.done);
  const todoItems = items.filter((item) => !item.done);

  return (
    <div className="container mx-auto p-4 max-w-lg bg-gray-950 text-white mt-20 rounded">
      <div className="flex justify-between items-center mb-8 mt-20">
        <input
          type="text"
          className="border p-2 flex-grow mr-2 text-emerald-900 rounded"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className=" text-slate-950 p-3 bg-fuchsia-700 rounded"
          onClick={addItem}
          disabled={!title.trim()}
        >
          +
        </button>
      </div>
      <div>
        <h2 className="text-xl mb-2">Tasks to do - {todoItems.length}</h2>
        <ul className="mb-4">
          {todoItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-2 border mb-2 bg-blueviolet rounded shadow"
            >
              <span>{item.title}</span>
              <div>
                <button
                  className="bg-emerald-200 text-slate-950 p-2 mr-2"
                  onClick={() => toggleDone(item.id)}
                >
                 Togri
                </button>
                <button
                  className="bg-red-500  text-slate-950 p-2"
                  onClick={() => deleteItem(item.id)}
                >
                  <img
                    className="w-6"
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    alt="delete"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-xl mb-2">Done - {doneItems.length}</h2>
        <ul>
          {doneItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-2 border mb-2 bg-blue-100 rounded shadow"
            >
              <span className="line-through">{item.title}</span>
              <div>
                <button
                  className="bg-yellow-500 text-slate-950 p-2 mr-2"
                  onClick={() => toggleDone(item.id)}
                >
                  Qaytar
                </button>
                <button
                  className="bg-red-500 text-gray-700  p-2"
                  onClick={() => deleteItem(item.id)}
                >
                  <img
                    className="w-6"
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    alt="delete"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
