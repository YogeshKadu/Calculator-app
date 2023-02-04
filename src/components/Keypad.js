import React from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { TbDivide,TbPercentage } from "react-icons/tb";

export default function Keypad(props) {
  return (
    <div className='w-full bg-transparent h-[500px] grid grid-cols-4 gap-2 text-2xl font-bold py-10 px-3'>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={1}>1</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={2}>2</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={3}>3</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'+'}><GrFormAdd className='text-3xl'   /></button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={4}>4</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={5}>5</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={6}>6</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'-'}><GrFormSubtract className='text-3xl' /></button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={7}>7</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={8}>8</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={9}>9</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'*'}><IoClose className='text-2xl' /></button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'='}><TbPercentage className="text-2xl" /></button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={0}>0</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'.'}>.</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'/'}><TbDivide className="text-2xl" /></button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'C'}>C</button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm" onClick={(e)=> props.handleClick(e)} value={'AC'}><BsArrowLeft className='text-sm' /></button>
      <button className="active:bg-gray-300 grid place-content-center bg-slate-100 rounded-full shadow-sm col-span-2" onClick={(e)=> props.handleClick(e)} value={'='}>=</button>
    </div>
  )
}
