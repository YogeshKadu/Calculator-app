import React, { useState } from "react";
import { AiFillCalculator } from "react-icons/ai";
import Calculator from "./components/Calculator";

function App() {
  const [activeCalc,setCalc] = useState(false);
  console.log(activeCalc);

  return (
    <div className="h-screen relative overflow-hidden">
      {activeCalc && <Calculator />} 
        <button className="absolute rounded-full w-14 aspect-square bg-slate-800 text-white grid place-content-center bottom-4 right-4" onClick={()=> setCalc(previous=>!previous)}>
          <AiFillCalculator className="text-2xl" />
        </button>
    </div>
  );
}

export default App;