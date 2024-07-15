import React from 'react'
import Boosts from '../assets/bg-boost-desktop.svg'
const boost = () => {
  return (
    <div
      className='flex flex-col items-center bg-purple-800 py-[20px] gap-[12px] bg-cover'
      style={{ backgroundImage: `url(${Boosts})` }}
    >
      <h1 className='text-[32px] text-white font-bold'>Boost your links today</h1>
      <button className='bg-blue-200  py-2 px-[32px] rounded-full text-white hover:bg-transparent hover:border-black border-2'>Get Started</button>
    </div>
  )
}

export default boost