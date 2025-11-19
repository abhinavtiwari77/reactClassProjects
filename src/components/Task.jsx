import { useState } from "react";

function Task() {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">State Manager</h1>
      <div className="text-lg">
        Button State: <span className="font-semibold">{isOn ? "true" : "false"}</span>
      </div>
      <button
        onClick={handleToggle}
        className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
          isOn 
            ? "bg-green-500 hover:bg-green-600" 
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {isOn ? "ON" : "OFF"}
      </button>
      <div className="flex items-center gap-2">
        <div 
          className={`w-4 h-4 rounded-full ${
            isOn ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <span className="text-sm text-gray-600">
          {isOn ? "Button is currently ON" : "Button is currently OFF"}
        </span>
      </div>
    </div>
  );
}

export default Task;