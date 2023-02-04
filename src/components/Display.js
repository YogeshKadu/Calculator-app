import React from 'react'

export default function Display(props) {
  return (
    <div className='max-w-xl w-full bg-emerald-400 flex justify-end h-16 items-center pr-10 text-2xl font-semibold'>
      {props.value}
    </div>
  )
}
