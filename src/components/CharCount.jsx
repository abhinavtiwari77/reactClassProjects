import { useState } from "react"

const CharCount = () => {
    const [text, setText] = useState("");
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    const handleCheck = () => {
        const length = text.length;
        
        if (length > 20) {
            alert("More than 20 characters!");
        } else if (length < 5 && length > 0) {
            alert("Less than 5 characters!");
        } else if (length === 0) {
            alert("Please enter some text!");
        } else {
            alert("Character count is valid (between 5 and 20)!");
        }
    }
    
    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Enter the characters</h1>
            <input 
                type="text" 
                value={text}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type here..."
            />
            <p className="mt-3 text-gray-600">
                Character count: <span className="font-bold">{text.length}</span>
            </p>
            <button 
                onClick={handleCheck}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
                Check Character Count
            </button>
        </div>
    )
}

export default CharCount