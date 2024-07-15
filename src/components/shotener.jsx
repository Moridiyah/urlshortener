import React, { useState } from 'react'
import BgImage from '../assets/bg-shorten-desktop.svg'

const Shortener = () => {
  const [input, setInput] = useState('')
  const [Url, setUrl] = useState(null)
  const [isClick, setIsClick] = useState(false)

  const handleInput = (e) => {
    const value = e.target.value
    setInput(value)
  }

  async function fetchApi(e) {
    e.preventDefault()

    // if(!Url){
    //   return alert('please enter url')
    // }

    try {
      setIsClick(true)
      const baseUrl = 'https://shorturl-ovln.onrender.com/api/v1/shorturl'
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: input }),
      }).then((res) => res.json())

      const returnData = await response.shorturl

      setUrl(returnData)
      console.log(returnData)

      if (returnData) {
        setIsClick(false)
      }
    } catch (error) {
      console.error('Fetch error:', error.message)
      setError('Failed to shorten URL')
      setIsClick(false)
    }
  }

  return (
    <div className='w-[100%] h-[15vh] px-[20px] lg:px-[120px] flex items-center my-[80px] flex-col '>
      <div
        className='flex px-[40px] py-[32px] bg-cover bg-purple-700 w-[100%] items-center rounded-md'
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <form
          className='flex flex-col lg:flex-row justify-between w-[100%] gap-[16px]'
          onSubmit={fetchApi}
        >
          <input
            onChange={handleInput}
            type='text'
            value={input}
            placeholder='Enter your URL here'
            className=' py-[12px] px-[30%] border-none text-center text-black'
          />
          <button className='bg-blue-200  py-2 px-[32px] rounded-md'>
            {isClick ? 'Please wait...' : 'Submit'}{' '}
          </button>
        </form>
      </div>
      <div className=' py-[12px] h-8'>
        <h1 className='text-gray-500 font-bold text-[32px]'>
          <a href={Url} rel='' target='_blank'>
            {Url}
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Shortener
