// Default list of names used when the parent doesn't pass a `names` prop
const defaultNames = ["Alice", "Bob", "Charlie", "Diana"];

const Greetings = ({ names = defaultNames }) => {
  return (
  <>    
    <div className="">
        <h1>Greetings</h1>
        {names.map((name, index) => (
            <h2 key={index}>Welcome {name}</h2>
        ))}
    </div>
    <div className="flex justify-center mt-4">
        <button className="bg-blue-400 text-white rounded-lg hover:bg-red-500 pl-2 pr-2 justify-center">Click me</button>
    </div>
    </>
  );
};

export default Greetings;
