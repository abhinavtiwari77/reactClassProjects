import React, { useEffect, useState } from 'react'

function Counter() {
    // declare state using array destructuring
    const [count, setCount] = useState(0)
    

    useEffect(()=>{
        console.log(`State is changing with value of count ${count}`);
    },[count])
    // handler functions (use functional update for safety)
    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button type="button" onClick={increment} className='
            flex p-4'>Increment</button>
            <button type="button" onClick={decrement} className='
            flex p-2 rounded-lg bg-amber-200 text-red-800 text-center'>Decrement</button>
        </div>
    )
}

export default Counter