import { useState } from "react";

const quotes = [
  "Your future isn’t written in the stars—it’s carved by your daily choices.",
  "Discomfort is the birthplace of growth; if it scares you, it’s probably worth doing.",
  "You don’t need more time, you need more clarity—clarity turns minutes into momentum.",
  "Success doesn’t come from wishing for less problems, but from building stronger mindsets.",
  "Every day you wait is a day someone else uses to get ahead—start now, even if it’s messy.",
  "Silence isn’t empty; it’s full of answers you can’t hear when you’re rushing.",
  "You aren’t losing yourself—you’re shedding versions of you that no longer fit your destiny.",
  "Not every closed door is rejection; some are redirections toward something greater.",
  "Dream big, but execute bigger—vision without action is just imagination.",
  "You were not born to blend in with the noise—you were built to change the frequency."
];

function Randomq() {
    const [quote,setQuote] = useState(quotes[0]);
    const handleNextQuote = ()=>{
        const randIndex= Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randIndex]);
    } 
    
  return (
    <div className="flex flex-col items-center gap-4 p-6 max-w-xl mx-auto text-center">
        <p className="text-xl font-semibold">{quote}</p>
        <button 
        onClick={handleNextQuote}
        className="px-4 py-2 bg-gray-800 text-white round-lg hover:bg-gray-700 transition"
        >
        Next Quote
        </button>
    </div>
  )
}
export default Randomq