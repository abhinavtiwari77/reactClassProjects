function EventHandler() {
    function handleClick(){
        alert("Button clicked");
    }
  return (
    <>
        <div className="flex items-center">
            <button onClick={handleClick} className="hover:cursor flex items-center bg-amber-200 text-black rounded-xl p-4 justify-center text-center">Click me</button>
        </div>
        
    </>
  )
}
export default EventHandler