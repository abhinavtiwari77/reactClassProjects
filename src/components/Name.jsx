import { useState } from "react";

function Name(){
    const [name, setName] = useState("")
    const handleChange = (event) => {
        setName(event.target.value);
    }
    return (
        <>
            <h2>Display the name</h2>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={handleChange}
            />
            <p>Hello, {name || "Guest"}</p>
        </>
    )
}

export default Name