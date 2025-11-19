import { useState } from "react";
import Child from "./Child";
function Parent() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component (Stateful)</h1>
      <p>This component manages the state</p>
      <Child count={count} increaseCount={increaseCount} />
    </div>
  );
}

export default Parent;
