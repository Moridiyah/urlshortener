import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburger from '../assets/icon-hamburger.svg'

const nav = () => {
  return (
    <div className='flex px-[20px] lg:px-[120px] py-[30px] items-center justify-between text-gray-400 font-semibold '>
      <div className='flex gap-[32px]'>
        <img
          src={Logo}
          alt=''
          className='w-[120px] lg:animate-bounce animate-none'
        />
        <div className='md:flex gap-[32px] hidden '>
          <p className='hover:underline'>
            <a href='#'>Features</a>
          </p>
          <p className='hover:underline'>
            <a href='#'>Pricing</a>
          </p>
          <p className='hover:underline'>
            <a href='#'>Resources</a>
          </p>
        </div>
      </div>
      <div>
        <div className='md:flex hidden gap-[32px]'>
          <p className='hover:underline'>
            <a href='#'>Login</a>
          </p>
          <button>Sign Up</button>
        </div>
        <div className='flex'>
          <img
            src={Hamburger}
            alt='hamburger'
            className='md:hidden flex w-[32px] '
          />
        </div>
      </div>
    </div>
  )
}

export default nav