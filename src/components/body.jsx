import React from 'react'
import Image from '../assets/illustration-working.svg'
const body = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row px-[20px] lg:px-[120px] items-center justify-between pb-[32px] lg:pb-[80px] pt-[32px]'>
      <div className='w-[100%] text-center lg:text-start lg:w-[40%] '>
        <h1 className='text-[45px] text-blue-950 font-extrabold'>More than just shorter links</h1>
        <p className='text-[20px] mt-2 text-gray-400'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='px-[60px] lg:px-6 py-3 text-white hover:bg-transparent bg-blue-300 rounded-full mt-[16px]'>Get Started</button>
      </div>
      <div className='w-[100%] lg:w-[60%] flex lg:justify-end justify-center items-center'>
        <img src={Image} alt='image' className='w-[80%] animate-pulse lg:animate-none' />
      </div>
    </div>
  )
}

export default body