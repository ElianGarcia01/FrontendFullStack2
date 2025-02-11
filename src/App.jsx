import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useState} from "react";

function App() {
  const [count,setCount] = useState(0);


  function increment(contador) {
    setCount(contador+1);
    console.log(count+1);
    console.log(contador+1);
  }


  function decrement(contador) {
    setCount(contador-1);
    console.log(count);
    console.log(contador);

  }

  console.log("Renderizo, Count", count);
  

  return (
    <>
      <h1>⚛️ React ⚛️</h1>
      <h2>Increment and Decrement Buttons</h2>

      <div id="counter">{count}</div>
      <br />
      <button id="increment" onClick={()=>increment(count)}>+</button>
      <button id="decrement" onClick={()=>decrement(count)}>-</button>
    </>
  );
}

export default App;
