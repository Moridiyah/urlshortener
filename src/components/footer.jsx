import React from 'react'
import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'

const footer = () => {
  return (
    <div className='w-[100%] flex flex-col lg:flex-row justify-between items-center lg:items-start bg-gray-950 px-[20px] lg:px-[120px] text-white py-[32px] text-center lg:text-start'>
      <div>
        <img src={Logo} alt='' className='animate-pulse pb-[20px]' />
      </div>

      <div className='flex flex-col gap-[12px] pb-[60px]'>
        <h3 className='text-[20px] font-bold pb-[12px]'>Features</h3>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>

      <div className='flex flex-col gap-[12px] pb-[60px]'>
        <h3 className='text-[20px] font-bold pb-[12px]'>Resources</h3>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>

      <div className='flex flex-col gap-[12px] pb-[60px]'>
        <h3 className='text-[20px] font-bold pb-[12px]' h3>
          Company
        </h3>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>

      <div className='flex gap-[16px]'>
        <img src={Facebook} alt='Facebook' />
        <img src={Twitter} alt='Twitter' />
        <img src={Pinterest} alt='Pinterest' />
      </div>
    </div>
  )
}

export default footer