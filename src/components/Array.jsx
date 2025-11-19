import { useState } from "react";

// Renders a list of fruits from an array and lets you add more
function Array() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango", "Grapes"]);
  const [newFruit, setNewFruit] = useState("");

  const addFruit = () => {
    const name = newFruit.trim();
    if (!name) return; // ignore empty
    if (fruits.includes(name)) {
      setNewFruit("");
      return; // avoid duplicates
    }
    setFruits((prev) => [...prev, name]);
    setNewFruit("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") addFruit();
  };

  return (
    <div className="bg-linear-to-r from-pink-400 to-red-300 py-6 shadow-lg mt-10 p-4 rounded-md">
      <h2 className="text-center text-white text-xl font-semibold mb-4">Fruits</h2>

      {/* Render list from array using map */}
      <ul className="flex flex-wrap justify-center gap-4 text-white text-lg tracking-wide mb-4">
        {fruits.map((fruit) => (
          <li
            key={fruit}
            className="cursor-pointer bg-white/15 px-4 py-2 rounded hover:scale-105 transition-transform"
          >
            {fruit}
          </li>
        ))}
      </ul>

      {/* Simple UI to add a new fruit to the array */}
      <div className="flex justify-center gap-2">
        <input
          className="px-3 py-2 rounded w-56 outline-none"
          placeholder="Add a fruit (e.g., Orange)"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button
          onClick={addFruit}
          className="bg-white text-pink-600 font-medium px-4 py-2 rounded hover:bg-pink-50"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Array;