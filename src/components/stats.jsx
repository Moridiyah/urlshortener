import React from 'react'
import Brand from '../assets/icon-brand-recognition.svg'
import Detailed from '../assets/icon-detailed-records.svg'
import Customized from '../assets/icon-fully-customizable.svg'

const stats = () => {
  return (
    <div className='flex flex-col items-center lg:px-[120px] px-[20px] pt-[30px] lg:pt-[120px] pb-[120px] lg:pb-[240px] bg-blue-100'>
      <div className='flex flex-col items-center text-center w-[100%] lg:w-[50%] py-[100px]'>
        <h1 className='text-[28px] text-blue-950 font-extrabold pb-[12px]'>
          Advanced Statistics
        </h1>
        <p className='text-[18px] text-gray-500'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-8'>
        <div className='bg-white rounded-md px-[12px] py-[20px]  items-center lg:items-start flex flex-col text-center lg:text-start'>
          <div className='w-[80px] h-[80px] rounded-full bg-blue-950 flex items-center justify-center relative bottom-0 lg:bottom-[60px] lg:left-[28px] left-0'>
            <img src={Brand} alt='brand' />
          </div>
          <h3 className='text-[24px] text-blue-950 font-bold py-[12px]'>
            Brand Recognition
          </h3>
          <p className='text-gray-500 text-[17px]'>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className='bg-white rounded-md px-[12px] py-[20px]  items-center lg:items-start flex flex-col text-center lg:text-start'>
          <img
            src={Brand}
            alt='brand'
            className='w-[80px] h-[80px] rounded-full bg-blue-950 flex items-center justify-center relative bottom-0 lg:bottom-[60px] lg:left-[28px] left-0'
          />
          <h3 className='text-[24px] text-blue-950 font-bold py-[12px]'>
            Detailed Records
          </h3>
          <p className='text-gray-500 text-[17px]'>
            Gain insights into who is clicking your links.Knowing whem and where
            people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className='bg-white rounded-md px-[12px] py-[20px]  items-center lg:items-start flex flex-col text-center lg:text-start'>
          <img
            src={Brand}
            alt='brand'
            className='w-[80px] h-[80px] rounded-full bg-blue-950 flex items-center justify-center relative  bottom-0 lg:bottom-[60px] lg:left-[28px] left-0'
          />
          <h3 className='text-[24px] text-blue-950 font-bold py-[12px]'>
            Fully Customizable
          </h3>
          <p className='text-gray-500 text-[17px]'>
            Improve brand awareness and contebt discoverability through
            customizable links,supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default stats