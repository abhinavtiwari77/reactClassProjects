import { useEffect, useState } from "react"

function Fetch() {
    const arr = [];
    const[count,setcount] = useState(0);
    useEffect(()=>{
        console.log("Data is fetched");
    },[]);
    const abc = ()=>{
        setcount(count+1);
        arr.push(count);
    }
  return (
  <>
    <button onClick={abc}>btn</button>;
    
  </>

  )
}
export default Fetch