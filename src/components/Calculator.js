import React, { useState } from 'react';
import { motion } from "framer-motion";
import Display from "./Display";
import Section from "./Keypad";
export default function Calculator() {

  const [display,setDisplay] = useState(0);
  const updateDisplay = (display) => {
    setDisplay(display);
  }
  const handleClick = (value) => {
    const a = value;
    console.log(value);
    return;
    if(a !== '+'&& a !== '-'&& a !== '*'&& a !== '/'&& a !== '='&& a !== 'C'&& a !== 'AC'&& a !== 'M+'&& a !== 'M-'){
      updateDisplay(display+""+a);
      // updateDisplay(display+""+a);
    }
    else{
      if(a === '+'){
        updateDisplay(display+""+a);
      }
      if(a === '-'){
        updateDisplay(display+""+a);
      }
      if(a === '*'){
        updateDisplay(display+""+a);
      }
      if(a === '/'){
        updateDisplay(display+""+a);
      }
      if(a === '='){
        if(display.indexOf('+') !== -1){
          const arr = display.split('+');
          updateDisplay(Number(arr[0],10) + Number(arr[1],10));
        }
        if(display.indexOf('-') !== -1){
          const arr = display.split('-');
          updateDisplay(Number(arr[0],10) - Number(arr[1],10));
        }
        if(display.indexOf('*') !== -1){
          const arr = display.split('*');
          updateDisplay(Number(arr[0],10) * Number(arr[1],10));
        }
        if(display.indexOf('/') !== -1){
          const arr = display.split('/');
          updateDisplay(Number(arr[0],10) / Number(arr[1],10));
        }
      }
      if(a == 'AC'){
        const arr = display.slice(0,-1);
        updateDisplay(arr);
      }
      if(a === 'C'){
        // const arr = display.slice(0,-1);
        updateDisplay(0);
      }
    }
  }
  return (
    <motion.div
      initial={{
        y:200
      }}
      animate={{ y: 0 }}
      className="w-60 h-[400px] absolute bottom-2 left-2 bg-slate-200 flex flex-col justify-center items-center overflow-hidden
       rounded-lg"
    >
        <Display value={display} />
        <Section handleClick={handleClick} />
    </motion.div>
  )
}
