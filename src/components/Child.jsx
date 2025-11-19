function Child({ count, increaseCount }) {
  return (
    <div>
      <h2>Child Component (Stateless)</h2>
      <p>This component receives props from parent</p>
      
      <div>
        <p>Current Count:</p>
        <p>{count}</p>
      </div>
      
      <button onClick={increaseCount}>
        Increase Count
      </button>
    </div>
  );
}

export default Child;
